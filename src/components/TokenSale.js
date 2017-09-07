import React, { Component } from 'react';
import { getWeb3 } from '../utils/getWeb3';
import moment from 'moment';
import ProgressBar from './ProgressBar';
import PreRegisterForm from './PreRegisterForm';
import RegisterForm from './RegisterForm';

class TokenSale extends Component {
  constructor(props) {
    super(props);
    this.state = {
      web3: null,
      sale: null,
      percentage: 0,
      tokens: 0,
      eth: 0,
      MAX_ETH: 11250000 / 1200,
      MAX_ETH_OVER: 33750000 / 1200,
    };
  }

  componentWillMount() {
    getWeb3
      .then(results => {
        this.setState({
          ...results,
        });
        this.instantiateContract()
          .then(() => {
            this.polling = true;
            this.longPoller();
          })
          .catch(error => {
            console.log('longPoller error', error);
          });
      })
      .catch(e => {
        console.log('Error finding web3.', e);
      });
  }

  longPoller() {
    setTimeout(() => {
      this.instantiateContract().then(() => {
        if (this.polling) {
          this.longPoller();
        }
      });
    }, 2000);
  }

  componentWillUnmount() {
    this.polling = false;
  }

  async instantiateContract() {
    const { sale, MAX_ETH, MAX_ETH_OVER, web3 } = this.state;
    const DeployedSale = await sale.deployed();
    const totalCollected = await DeployedSale.totalCollected();
    let totalSupply = MAX_ETH;
    if (totalCollected >= MAX_ETH) {
      totalSupply = MAX_ETH_OVER;
    }
    const endFundingTime = await DeployedSale.endFundingTime();
    const startFundingTime = await DeployedSale.startFundingTime();

    const newState = {
      eth: web3.fromWei(totalCollected.toNumber(), 'ether'),
      tokens: web3.fromWei(totalCollected.toNumber() * 1200, 'ether'),
      percentage: Math.round(
        web3.fromWei(totalCollected, 'ether') / totalSupply * 100
      ),
      startFundingTime: moment.unix(startFundingTime.toNumber()),
      endFundingTime: moment.unix(endFundingTime.toNumber()),
    };
    // console.log(newState);
    this.setState(newState);
  }

  saleUpcoming = () => {
    return (
      <div>
        <h2 className="sale-date">Early Token Sale starts:</h2>
        <p className="sale-date unmarg--bottom">18 SEPTEMBER 2017 - 5PM CET</p>
        <hr />
        <h3 className="unmarg--bottom">Register to get your referral link</h3>
        <p className="lead">Receive 5% of every contribution you refer</p>
        <div className="modal-instance">
          <a className="btn btn-lg type--uppercase btn--primary modal-trigger">
            Register for the early token sale
          </a>
          <div className="modal-container">
            <div className="modal-content">
              <div className="boxed boxed--lg">
                <PreRegisterForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  saleRunning = () => {
    const { percentage } = this.state;
    return (
      <div>
        <h2 className="sale-date padding-2">Join the Early Token Sale!</h2>
        <hr />
        <ProgressBar percentage={percentage} />
        {this.numberTable()}
        <div className="modal-instance">
          <a className="btn btn-lg type--uppercase btn--primary modal-trigger">
            Buy tokens
          </a>
          <div className="modal-container">
            <div className="modal-content">
              <div className="boxed boxed--lg">
                <RegisterForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  saleDone = () => {
    const { percentage } = this.state;
    return (
      <div>
        <h2 className="sale-date">Early Token Sale is concluded</h2>
        <hr />
        <ProgressBar percentage={percentage} />
        {this.numberTable()}
        <hr />
        <p className="sale-date unmarg--bottom">Thank you for your support!</p>
      </div>
    );
  };

  numberTable = () => {
    const { tokens, eth, percentage, endFundingTime } = this.state;

    return (
      <div>
        <div className="col-sm-6 padding-0">
          <table>
            <tbody>
              <tr>
                <td style={{ textAlign: 'left' }}>Tokens sold:</td>
                <td style={{ textAlign: 'right' }} className="type--bold">
                  {tokens}
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: 'left' }}>ETH collected:</td>
                <td style={{ textAlign: 'right' }} className="type--bold">
                  Ξ {eth}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-sm-6 padding-only-left">
          <table>
            <tbody>
              <tr>
                <td style={{ textAlign: 'left' }}>Completed:</td>
                <td style={{ textAlign: 'right' }} className="type--bold">
                  {percentage}%
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: 'left' }}>Sale closing:</td>
                <td style={{ textAlign: 'right' }} className="type--bold">
                  {endFundingTime.fromNow()}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  render() {
    const {
      tokens,
      eth,
      percentage,
      startFundingTime,
      endFundingTime,
    } = this.state;

    let upcoming = false;
    let done = false;
    if (startFundingTime && endFundingTime) {
      upcoming = startFundingTime.isAfter(moment());
      done = endFundingTime.isBefore(moment());
    }

    const doneLoading =
      percentage >= 0 &&
      startFundingTime >= 0 &&
      endFundingTime >= 0 &&
      eth >= 0 &&
      tokens >= 0;

    setTimeout(() => window.modals(jQuery, window, document), 1000); //eslint-disable-line

    return (
      <div className="boxed boxed--lg border--round box-shadow-wide bg--white token-sale">
        {!doneLoading && <div className="ldr">Loading...</div>}
        {doneLoading && upcoming && this.saleUpcoming()}
        {doneLoading && !done && !upcoming && this.saleRunning()}
        {doneLoading && done && this.saleDone()}
      </div>
    );
  }
}

export default TokenSale;