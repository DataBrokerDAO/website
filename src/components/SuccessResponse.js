import React, { Component } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';

class SuccessResponse extends Component {
  render() {
    const { address, uuid, upcoming, btcAddress } = this.props;
    fbq('track', 'CompleteRegistration'); // eslint-disable-line
    window.ga('send', {
      hitType: 'event',
      eventCategory: 'Funnel',
      eventAction: 'Success',
      eventLabel: 'PreSale'
    });
    return (
      <div>
        <h2>
          <FormattedMessage id="form_success_title" />
        </h2>
        <hr className="short" />
        {!upcoming && (
          <div style={{ fontWeight: 'bold' }}>
            <i className="fa fa-exclamation-triangle" aria-hidden="true" />{' '}
            <FormattedMessage id="form_success_exchangewarning" />
            <br />
          </div>
        )}
        {upcoming ? (
          <p className="lead">
            <FormattedMessage id="form_success_upcoming_thanks" />
          </p>
        ) : (
          // <div className="form-group" style={{ marginTop: '1em' }}>
          //   <label className="type--uppercase ">
          //     Do <b>not</b> send ETH to the tokensale address before:
          //   </label>
          //   <input
          //     className="text-center"
          //     type="text"
          //     value={`18 SEPTEMBER 2017 - 5PM CET`}
          //     style={{ fontSize: '16px' }}
          //     readOnly
          //   />
          // </div>

          <div>
            <div className="form-group" style={{ marginTop: '1em' }}>
              <label className="type--uppercase ">
                <FormattedMessage id="form_success_ethaddress" />
              </label>
              <input
                className="text-center"
                type="text"
                value={`${address}`}
                style={{ fontSize: '16px' }}
                readOnly
              />
            </div>
            <div className="form-group">
              <label className="type--uppercase ">
                <FormattedMessage id="form_success_gas" />
              </label>
              <input
                className="text-center"
                type="text"
                value="200000"
                style={{ fontSize: '16px' }}
                readOnly
              />
            </div>
            <hr />
            <div className="form-group" style={{ marginTop: '1em' }}>
              <label className="type--uppercase ">
                <FormattedMessage id="form_success_btc" />
              </label>
              <input
                className="text-center"
                type="text"
                value={`${btcAddress}`}
                style={{ fontSize: '16px' }}
                readOnly
              />
            </div>
          </div>
        )}
        {/*<a
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
          Guide on how to participate
      </a>*/}
        <hr className="short" />
        <div className="modal_channels">
          <h3>
            <FormattedMessage id="form_success_referral_title" />
          </h3>
          <input
            className="text-center"
            type="text"
            value={`https://databrokerdao.com/?referrer=${uuid}`}
            style={{ fontSize: '16px', marginBottom: '1em' }}
            readOnly
          />
          <span>
            <a
              href={`https://t.me/databrokerdao`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-telegram fa-1x" />Telegram
            </a>
          </span>
          <span>
            <a
              href={`https://twitter.com/intent/tweet?text=Check%20out%20DataBrokerDAO%20-%20A%20decentralized%20marketplace%20for%20IoT%20Sensor%20data.%20https%3A%2F%2Fdatabrokerdao.com%3Freferrer%3D${uuid}%20%23IoT%20%23tokensale`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-twitter fa-1x" />Twitter
            </a>
          </span>
          <span>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=https%3A//databrokerdao.com/?referrer=${uuid}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-facebook fa-1x" />Facebook
            </a>
          </span>
          <span>
            <a
              href={`https://www.linkedin.com/shareArticle?mini=true&url=https%3A//databrokerdao.com/?referrer=${uuid}&title=DataBrokerDAO%20-%20A%20Decentralized%20marketplace%20for%20IoT%20sensor%20Data`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-linkedin fa-1x" />Linkedin
            </a>
          </span>
        </div>
      </div>
    );
  }
}

export default injectIntl(SuccessResponse);
