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
      startFundingTime: moment.unix(1505746800),
      endFundingTime: moment.unix(1508166000)
    };
  }

  componentWillMount() {
    if (process.env.REACT_APP_SALE_ACTIVE === 'true') {
      getWeb3
        .then(results => {
          this.setState({
            ...results
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
        startFundingTime: moment.unix(1505746800),
        endFundingTime: moment.unix(1508166000),
        eth: 0,
        tokens: 0,
        percentage: 0
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
    try {
      const { sale, MAX_ETH, MAX_ETH_OVER } = this.state;
      const DeployedSale = await sale.deployed();

      const totalCollected = await DeployedSale.totalCollected();
      const eth = totalCollected.toNumber() / 10 ** 18;
      let totalSupply = MAX_ETH;

      if (eth >= MAX_ETH) {
        totalSupply = MAX_ETH_OVER;
      }

      const newState = {
        eth,
        tokens: eth * 1200,
        percentage: eth / totalSupply * 100
      };
      // console.log(newState);
      this.setState(newState);
    } catch (error) {
      console.log(error);
    }
  }

  saleUpcoming = () => {
    return (
      <div>
        <h2 className="sale-date">
          The early token sale is concluded. Thank you for your support!
        </h2>
        <hr />
        <p className="sale-date unmarg--bottom">
          The date of the main token sale will be announced shortly.
          <br />
          You’ll hear from us soon.
        </p>
        <hr />
        <div className="modal-instance">
          <a className="btn btn-lg type--uppercase btn--primary modal-trigger">
            Preregister now for the main sale
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
              How to participate in the main sale
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
        <div style={{ marginTop: '15px' }}>
          <p>
            In the meanwhile we are still accepting larger volume purchases at
            reduced rates.<br />{' '}
            <a
              href="mailto:hello@databrokerdao.com"
              style={{ textDecoration: 'underline' }}
            >
              Get in touch to discuss.
            </a>
          </p>
        </div>
      </div>
    );
    // OLD
    // return (
    //   <div>
    //     <h2 className="sale-date">Early Token Sale starts:</h2>
    //     <p className="sale-date unmarg--bottom">18 SEPTEMBER 2017 - 5PM CET</p>
    //     <hr />
    //     <h3 className="unmarg--bottom">
    //       Register now to access the sale address before the start!
    //     </h3>
    //     <br />
    //     <p className="lead">
    //       You will also receive a unique referral link that earns you 5% of
    //       every contribution you refer
    //     </p>
    //     <div className="modal-instance">
    //       <a className="btn btn-lg type--uppercase btn--primary modal-trigger">
    //         Register now for the early sale
    //       </a>
    //       <div style={{ marginTop: '15px' }}>
    //         <a
    //           href="/how-to-participate.pdf"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           <i className="fa fa-info-circle" aria-hidden="true" />
    //         </a>{' '}
    //         <a
    //           href="/how-to-participate.pdf"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           style={{ textDecoration: 'underline' }}
    //         >
    //           How to participate in the early sale
    //         </a>
    //       </div>
    //       <div className="modal-container">
    //         <div className="modal-content">
    //           <div className="boxed boxed--lg">
    //             <RegisterForm upcoming={true} />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // )
  };

  saleRunning = doneLoading => {
    const { endFundingTime, startFundingTime } = this.state;
    const togo = endFundingTime.diff(moment(), 'minutes');
    const total = endFundingTime.diff(startFundingTime, 'minutes');
    const percentage = 100 - togo / total * 100;
    return (
      <div>
        <h2 className="sale-date padding-2" style={{ marginBottom: '1em' }}>
          Join the early sale!
        </h2>
        {!doneLoading && (
          <div>
            <div className="ldr">Loading...</div>
          </div>
        )}
        {doneLoading && (
          <ProgressBar percentage={percentage} label={`${togo} minutes left`} />
        )}
        {doneLoading && this.numberTable()}
        <div className="modal-instance">
          <a
            className="btn btn-lg type--uppercase btn--primary modal-trigger"
            style={{ fontWeight: 'bold', fontSize: '20px' }}
          >
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
              How to participate in the early sale
            </a>
          </div>
          <div style={{ marginTop: '15px' }}>
            <a
              href="mailto:hello@databrokerdao.com"
              style={{ textDecoration: 'underline' }}
            >
              Contact us for extra volume discounts.
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
        <h2 className="sale-date">The early token sale is concluded!</h2>
        <hr />
        <p className="sale-date unmarg--bottom">Thank you for your support!</p>
        <hr />
        <div style={{ marginTop: '15px' }}>
          <a
            href="mailto:hello@databrokerdao.com"
            style={{ textDecoration: 'underline' }}
          >
            We are still accepting larger volume purchases at reduced rates.<br />{' '}
            Get in touch to discuss.
          </a>
        </div>
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
            </tbody>
          </table>
        </div>
        <div className="col-sm-6 padding-only-left">
          <table>
            <tbody>
              <tr>
                <td style={{ textAlign: 'left' }}>ETH collected:</td>
                <td style={{ textAlign: 'right' }} className="type--bold">
                  Ξ {parseInt(eth, 10).toFixed(0)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  render() {
    const { tokens, eth, percentage } = this.state;

    let upcoming = process.env.REACT_APP_SALE_UPCOMING === 'true';
    let done = process.env.REACT_APP_SALE_DONE === 'true';
    let active = process.env.REACT_APP_SALE_ACTIVE === 'true';

    // if (startFundingTime && endFundingTime) {
    //   upcoming = startFundingTime.isAfter(moment());
    //   active =
    //     startFundingTime.isBefore(moment()) && endFundingTime.isAfter(moment());
    //   done = endFundingTime.isBefore(moment());
    // }

    const doneLoading = percentage >= 0 && eth >= 0 && tokens >= 0;

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
