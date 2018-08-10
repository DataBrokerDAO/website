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
                        <td className="type--bold">July 7th, 2018</td>
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
                            href="https://coinfalcon.com/?ref=CFJSEHBJCACT"
                            style={{ color: '#666' }}
                          >
                            CoinFalcon
                          </a>
                          <br />
                          -{' '}
                          <a
                            href="https://bitforex.com/b_DTX"
                            style={{ color: '#666' }}
                          >
                            BitForex
                          </a>
                          <br />
                          -{' '}
                          <a
                            href="https://tokenjar.io/DTX"
                            style={{ color: '#666' }}
                          >
                            TokenJar
                          </a>
                          <br />
                          - ...
                        </td>
                      </tr>
                      <tr height="10" />
                      <tr>
                        <td valign="top" className="force-black">
                          <span>Listing sites</span>:
                        </td>
                        <td className="type--bold">
                          -{' '}
                          <a
                            href="https://coinmarketcap.com/currencies/data-exchange/"
                            style={{ color: '#666' }}
                          >
                            CoinMarketCap
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
