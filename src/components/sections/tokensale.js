import React, { PureComponent } from 'react';
import { FormattedMessage } from 'react-intl';

class TokenSaleSection extends PureComponent {
  render() {
    return (
      <section
        id="tokensale"
        className="imagebg space--sm"
        data-gradient-bg="#EB274C,#7E347E,#2E3192"
      >
        <div className="background-image-holder">
          <img alt="background" src="./img/world.svg" />
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
                <h3
                  className="force-black type--bold unmarg--bottom type--uppercase"
                  style={{ color: 'black' }}
                >
                  <FormattedMessage id="tokensale_presale" />
                </h3>
                <hr className="short" />
                <div className="col-sm-6 padding-0">
                  <table>
                    <tbody>
                      <tr>
                        <td valign="top" className="force-black">
                          <FormattedMessage id="tokensale_start" />:
                        </td>
                        <td className="type--bold">March 5th, 2018 4PM CET</td>
                      </tr>
                      <tr>
                        <td valign="top" className="force-black">
                          <FormattedMessage id="tokensale_rate" />:
                        </td>
                        <td className="type--bold">1 ETH = 6000 DTX</td>
                      </tr>
                      <tr>
                        <td valign="top" className="force-black">
                          <FormattedMessage id="tokensale_minimum" />:
                        </td>
                        <td className="type--bold">25 ETH / 2 BTC</td>
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
                        <td className="type--bold">March 11th, 2018 4PM CET</td>
                      </tr>
                      <tr>
                        <td valign="top" className="force-black">
                          <FormattedMessage id="tokensale_bonus" />:
                        </td>
                        <td className="type--bold">50% bonus</td>
                      </tr>

                      <tr>
                        <td valign="top" className="force-black">
                          <FormattedMessage id="tokensale_inquiries" />:
                        </td>
                        <td className="type--bold">
                          <a
                            href="mailto:hello@databrokerdao.com"
                            style={{ color: '#666' }}
                            className="type--bold"
                          >
                            hello@databrokerdao.com
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
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
                        <td className="type--bold">March 12th, 2018 4PM CET</td>
                      </tr>
                      <tr>
                        <td valign="top" className="force-black">
                          <FormattedMessage id="tokensale_rate" />:
                        </td>
                        <td className="type--bold">
                          Week 1: 1ETH = 5200 DTX
                          <br />Week 2: 1ETH = 4800 DTX
                          <br />Week 3: 1ETH = 4400 DTX
                          <br />Week 4: 1ETH = 4000 DTX
                        </td>
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
                        <td className="type--bold">April 8th, 2018 4PM CET</td>
                      </tr>
                      <tr>
                        <td valign="top" className="force-black">
                          <FormattedMessage id="tokensale_bonus" />:
                        </td>
                        <td className="type--bold">
                          Week 1: 30% bonus
                          <br />Week 2: 20% bonus
                          <br />Week 3: 10% bonus
                          <br />Week 4: 0% bonus
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
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
                        <td className="type--bold">April 16th, 2018</td>
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
                          <a
                            href="https://chankura.com/"
                            style={{ color: '#666' }}
                          >
                            Chankura.com
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row align-center">
          <a
            className="btn btn-lg btn--primary"
            href="#start"
            style={{ display: 'block', margin: '0 auto' }}
          >
            <span
              className="btn__text type--uppercase"
              style={{ color: 'white' }}
            >
              <FormattedMessage id="cta" />
            </span>
          </a>
        </div>
      </section>
    );
  }
}

export default TokenSaleSection;
