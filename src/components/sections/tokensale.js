import React, { PureComponent } from 'react'
import { FormattedMessage } from 'react-intl'
import WorldSVG from '../../assets/world.svg'

class TokenSaleSection extends PureComponent {
  render() {
    return (
      <section
        id="tokensale"
        className="imagebg space--sm"
        data-gradient-bg="#EB274C,#7E347E,#2E3192"
      >
        <div className="background-image-holder low-opacity">
          <img alt="background" src={WorldSVG} />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 text-center">
              <h2>
                <FormattedMessage id="tokensale_title" />
              </h2>
            </div>
            <div className="col-sm-12 col-md-10 col-md-offset-1">
              <div className="boxed boxed--lg box-shadow-wide bg--secondary token-box">
                <h3 className="force-black type--bold unmarg--bottom">
                  <FormattedMessage id="tokensale_sale" />
                </h3>
                <hr className="short" />
                <div className="col-sm-6 padding-0">
                  <table>
                    <tbody>
                      <tr>
                        <td valign="top" className="force-black">
                          <FormattedMessage id="tokensale_start" />:
                        </td>
                        <td className="type--bold">April 26th, 2018 4PM CET</td>
                      </tr>
                      <tr>
                        <td valign="top" className="force-black">
                          <FormattedMessage id="tokensale_rate" />:
                        </td>
                        <td className="type--bold">1ETH = 4000 DTX</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col-sm-6 padding-only-left">
                  <table>
                    <tbody>
                      <tr>
                        <td valign="top" className="force-black">
                          <FormattedMessage id="tokensale_end" />:
                        </td>
                        <td className="type--bold">May 26th, 2018 4PM CET</td>
                      </tr>
                      <tr>
                        <td valign="top" className="force-black">
                          <FormattedMessage id="tokensale_bonus" />:
                        </td>
                        <td className="type--bold">Day 1: 10% bonus</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <hr className="short" />
                <p style={{ color: '333' }} className="force-black">
                  <FormattedMessage id="tokensale_referral" />
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-10 col-md-offset-1">
              <div className="boxed boxed--lg box-shadow-wide bg--secondary token-box">
                <h3 className="force-black type--bold unmarg--bottom">
                  <FormattedMessage id="tokensale_trading" />
                </h3>
                <hr className="short" />
                <div className="col-sm-6 padding-0">
                  <table>
                    <tbody>
                      <tr>
                        <td valign="top" className="force-black">
                          <FormattedMessage id="tokensale_start" />:
                        </td>
                        <td className="type--bold">May 30th, 2018</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col-sm-6 padding-only-left">
                  <table>
                    <tbody>
                      <tr>
                        <td valign="top" className="force-black">
                          <FormattedMessage id="tokensale_exchanges" />:
                        </td>
                        <td className="type--bold">
                          -{' '}
                          <a
                            href="https://coinfalcon.com/?ref=CFJSEHBJCACT                            "
                            style={{ color: '#666' }}
                          >
                            CoinFalcon
                          </a>
                          <br />
                          - ...
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default TokenSaleSection
