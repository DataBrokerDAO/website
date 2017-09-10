import React, { Component } from 'react';

class SuccessResponse extends Component {
  render() {
    const { address, uuid } = this.props;

    return (
      <div>
        <h2>Registration successful! </h2>
        <hr className="short" />
        <div style={{ fontWeight: 'bold' }}>
          <i className="fa fa-exclamation-triangle" aria-hidden="true" /> Do not
          share this address on social media or websites!<br />
          <i className="fa fa-exclamation-triangle" aria-hidden="true" /> Do not
          send Ether from an exchange, you will lose your tokens and funds!<br />
          <i className="fa fa-exclamation-triangle" aria-hidden="true" /> Never
          click a link to wallets or exchanges, keep safe!<br />
        </div>
        <div className="form-group" style={{ marginTop: '1em' }}>
          <label className="type--uppercase ">TokenSale address</label>
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
        <a
          href="https://blckc.hn/databrokerdao-myetherwallet"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-info-circle" aria-hidden="true" />
        </a>
        <a
          href="https://blckc.hn/databrokerdao-sale"
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
