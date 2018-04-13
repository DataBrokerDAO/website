import React, { Component } from 'react'
import { FormattedMessage, injectIntl } from 'react-intl'

class SuccessResponse extends Component {
  render() {
    const { address, uuid /*btcAddress*/ } = this.props
    fbq('track', 'CompleteRegistration') // eslint-disable-line
    twttr.conversion.trackPid('nzbus', { tw_sale_amount: 0, tw_order_quantity: 0 }); // eslint-disable-line
    window.ga('send', {
      hitType: 'event',
      eventCategory: 'Funnel',
      eventAction: 'Success',
      eventLabel: 'PreSale',
    })
    gtag('event', 'conversion', {
      send_to: 'AW-871172050/4K_ACMTF5H4Q0o-0nwM',
    })

    return (
      <div>
        <h2>
          <span>You have completed the KYC procedure successfully!</span>
        </h2>
        <hr className="short" />
        <div>
          <div>
            <div className="form-group" style={{ marginTop: '1em' }}>
              <label className="type--uppercase ">
                Buy tokens by sending ETH to the following address
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
            <div className="form-group">
              <label className="type--uppercase ">Minimum amount</label>
              <input
                className="text-center"
                type="text"
                value="10 ETH"
                style={{ fontSize: '16px' }}
                readOnly
              />
            </div>
            {/*
              <hr />
              <div className="form-group" style={{ marginTop: '1em' }}>
                <label className="type--uppercase ">
                  Or participate by sending Bitcoin to the following address
                </label>
                <input
                  className="text-center"
                  type="text"
                  value={`${btcAddress}`}
                  style={{ fontSize: '16px' }}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label className="type--uppercase ">Minimum amount</label>
                <input
                  className="text-center"
                  type="text"
                  value="1 BTC"
                  style={{ fontSize: '16px' }}
                  readOnly
                />
              </div>*/}
          </div>
        </div>

        <hr className="short" />
        {localStorage.getItem('ref') !== 'cryptoclub' &&
          localStorage.getItem('ref') !== 'mattsyndicate' && (
            <div>
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
          )}
      </div>
    )
  }
}

export default injectIntl(SuccessResponse)
