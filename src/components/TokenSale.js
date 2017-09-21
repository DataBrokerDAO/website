import React, { Component } from 'react';
import { getWeb3 } from '../utils/getWeb3';
import moment from 'moment';
import ProgressBar from './ProgressBar';
// import PreRegisterForm from './PreRegisterForm';
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
      MAX_ETH: 9375,
      MAX_ETH_OVER: 28125,
      // MAX_ETH: 1,
      // MAX_ETH_OVER: 3,
    };
  }

  componentWillMount() {
    if (process.env.REACT_APP_SALE_ACTIVE === 'true') {
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
    } else {
      this.setState({
        startFundingTime: 0,
        endFundingTime: 0,
        eth: 0,
        tokens: 0,
        percentage: 0,
      });
    }
  }

  longPoller() {
    setTimeout(() => {
      this.instantiateContract(true).then(() => {
        if (this.polling) {
          this.longPoller();
        }
      });
    }, 10000);
  }

  componentWillUnmount() {
    this.polling = false;
  }

  async instantiateContract(update = false) {
    const { sale, MAX_ETH, MAX_ETH_OVER } = this.state;
    const DeployedSale = await sale.deployed();

    const totalCollected = await DeployedSale.totalCollected();
    const eth = totalCollected.toNumber() / 10 ** 18;
    let totalSupply = MAX_ETH;

    if (eth >= MAX_ETH) {
      totalSupply = MAX_ETH_OVER;
    }
    if (!update) {
      this.setState({
        startFundingTime: moment.unix(1505746800),
        endFundingTime: moment.unix(1508166000),
      });
    }
    const newState = {
      eth,
      tokens: eth * 1200,
      percentage: eth / totalSupply * 100,
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
        <h3 className="unmarg--bottom">
          Register now to access the sale address before the start!
        </h3>
        <br />
        <p className="lead">
          You will also receive a unique referral link that earns you 5% of
          every contribution you refer
        </p>
        <div className="modal-instance">
          <a
            className="btn btn-lg type--uppercase btn--primary modal-trigger"
            ga-on="click"
            ga-event-category="BuyFunnel"
            ga-event-action="FormOpen"
          >
            Register now for the early token sale
          </a>
          <div style={{ marginTop: '15px' }}>
            <a
              href="/how-to-participate.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-info-circle" aria-hidden="true" />
            </a>{' '}
            <a
              href="/how-to-participate.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'underline' }}
            >
              How to participate in the Early Token Sale
            </a>
          </div>
          <div className="modal-container">
            <div className="modal-content">
              <div className="boxed boxed--lg">
                <RegisterForm upcoming={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  saleRunning = doneLoading => {
    const { percentage } = this.state;
    return (
      <div>
        <h2 className="sale-date padding-2" style={{ marginBottom: '1em' }}>
          Join the Early Token Sale!
        </h2>
        {!doneLoading && (
          <div>
            <div className="ldr">Loading...</div>
          </div>
        )}
        {doneLoading && <ProgressBar percentage={percentage} />}
        {doneLoading && this.numberTable()}
        <div className="modal-instance">
          <a className="btn btn-lg type--uppercase btn--primary modal-trigger">
            Buy your DATA tokens now!
          </a>
          <div style={{ marginTop: '15px' }}>
            <a
              href="/how-to-participate.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-info-circle" aria-hidden="true" />
            </a>{' '}
            <a
              href="/how-to-participate.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'underline' }}
            >
              How to participate in the Early Token Sale
            </a>
          </div>
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
                  {parseInt(tokens, 10).toFixed(0)}
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: 'left' }}>ETH collected:</td>
                <td style={{ textAlign: 'right' }} className="type--bold">
                  Ξ {parseInt(eth, 10).toFixed(2)}
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
                  {percentage.toFixed(2)}%
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: 'left' }}>Time left:</td>
                <td style={{ textAlign: 'right' }} className="type--bold">
                  {endFundingTime.diff(moment(), 'days')}d
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

    let upcoming = process.env.REACT_APP_SALE_UPCOMING === 'true';
    let done = process.env.REACT_APP_SALE_DONE === 'true';
    let active = process.env.REACT_APP_SALE_ACTIVE === 'true';

    // if (startFundingTime && endFundingTime) {
    //   upcoming = startFundingTime.isAfter(moment());
    //   active =
    //     startFundingTime.isBefore(moment()) && endFundingTime.isAfter(moment());
    //   done = endFundingTime.isBefore(moment());
    // }

    const doneLoading =
      percentage >= 0 &&
      startFundingTime >= 0 &&
      endFundingTime >= 0 &&
      eth >= 0 &&
      tokens >= 0;

    // console.log({ upcoming, done, active, doneLoading });

    setTimeout(() => window.modals(jQuery, window, document), 1000); //eslint-disable-line

    return (
      <div className="boxed boxed--lg border--round box-shadow-wide bg--white token-sale">
        {doneLoading && upcoming && this.saleUpcoming()}
        {active && this.saleRunning(doneLoading)}
        {doneLoading && done && this.saleDone()}
      </div>
    );
  }
}

export default TokenSale;
