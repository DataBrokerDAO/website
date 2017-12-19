import React, { Component } from 'react';

class SuccessResponse extends Component {
  render() {
    const { address, uuid, upcoming } = this.props;
    fbq('track', 'CompleteRegistration'); // eslint-disable-line
    window.ga('send', {
      hitType: 'event',
      eventCategory: 'Funnel',
      eventAction: 'Success',
      eventLabel: 'EarlyTokenSale'
    });
    return (
      <div>
        <h2>You've been preregistered! </h2>
        <hr className="short" />
        {!upcoming && (
          <div style={{ fontWeight: 'bold' }}>
            <i className="fa fa-exclamation-triangle" aria-hidden="true" /> Do
            not send Ether from an exchange, you will lose your tokens and
            funds!<br />
          </div>
        )}
        {upcoming ? (
          <p className="lead">
            Thank you for preregistering for the main token sale, once the token
            sale starts, you will be the first to know. We will send you an
            email with all the necessary information.
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
              <label className="type--uppercase ">Token sale address</label>
              <input
                className="text-center"
                type="text"
                value={`${address}`}
                style={{ fontSize: '16px' }}
                readOnly
              />
            </div>
            <div className="form-group">
              <label className="type--uppercase ">Gas</label>
              <input
                className="text-center"
                type="text"
                value="200000"
                style={{ fontSize: '16px' }}
                readOnly
              />
            </div>
            <div className="form-group">
              <label className="type--uppercase ">Maximum Gas Price</label>
              <input
                className="text-center"
                type="text"
                value="50 Gwei"
                style={{ fontSize: '16px' }}
                readOnly
              />
            </div>
          </div>
        )}
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
          Guide on how to participate
        </a>
        <hr className="short" />
        <div className="modal_channels">
          <h3>Earn 5% via your referral link!</h3>
          <input
            className="text-center"
            type="text"
            value={`https://databrokerdao.com/?referrer=${uuid}`}
            style={{ fontSize: '16px', marginBottom: '1em' }}
            readOnly
          />
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

export default SuccessResponse;
