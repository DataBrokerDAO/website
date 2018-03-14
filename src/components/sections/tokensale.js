import React, { PureComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import WorldSVG from '../../assets/world.svg';

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

            {localStorage.getItem('ref') === 'cryptoclub' && (
              <div className="col-sm-12 col-md-10 col-md-offset-1">
                <div className="boxed boxed--lg box-shadow-wide bg--secondary token-box">
                  <h3
                    className="force-black type--bold unmarg--bottom type--uppercase"
                    style={{ color: 'black' }}
                  >
                    Crypto Club Private Sale
                  </h3>
                  <hr className="short" />
                  <div className="col-sm-6 padding-0">
                    <table>
                      <tbody>
                        <tr>
                          <td valign="top" className="force-black">
                            <FormattedMessage id="tokensale_start" />:
                          </td>
                          <td className="type--bold">February 28th, 2018</td>
                        </tr>
                        <tr>
                          <td valign="top" className="force-black">
                            <FormattedMessage id="tokensale_rate" />:
                          </td>
                          <td className="type--bold">
                            1 ETH = 4000 DTX + 3400 bonus
                          </td>
                        </tr>
                        <tr>
                          <td valign="top" className="force-black">
                            <FormattedMessage id="tokensale_minimum" />:
                          </td>
                          <td className="type--bold">none</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="col-sm-6 padding-only-left">
                    <table>
                      <tbody>
                        <tr>
                          <td valign="top" className="force-black">
                            Ends:
                          </td>
                          <td className="type--bold">March 7th, 2018</td>
                        </tr>
                        <tr>
                          <td valign="top" className="force-black">
                            Bonus:
                          </td>
                          <td className="type--bold">85%</td>
                        </tr>
                        <tr>
                          <td valign="top" className="force-black">
                            Lockup:
                          </td>
                          <td className="type--bold">none</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="col-sm-12">
                    <a
                      className="btn btn-lg btn--primary"
                      href="#start"
                      style={{ display: 'block', margin: '0 auto' }}
                    >
                      <span
                        className="btn__text type--uppercase"
                        style={{ color: 'white' }}
                      >
                        {localStorage.getItem('ref') === 'cryptoclub' && (
                          <span>
                            Join the private sale for Crypto Club members
                          </span>
                        )}
                        {localStorage.getItem('ref') !== 'cryptoclub' && (
                          <FormattedMessage id="cta" />
                        )}
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            )}

            {localStorage.getItem('ref') === 'mattsyndicate' && (
              <div className="col-sm-12 col-md-10 col-md-offset-1">
                <div className="boxed boxed--lg box-shadow-wide bg--secondary token-box">
                  <h3
                    className="force-black type--bold unmarg--bottom type--uppercase"
                    style={{ color: 'black' }}
                  >
                    MattSyndicate Private Sale
                  </h3>
                  <hr className="short" />
                  <div className="col-sm-6 padding-0">
                    <table>
                      <tbody>
                        <tr>
                          <td valign="top" className="force-black">
                            <FormattedMessage id="tokensale_start" />:
                          </td>
                          <td className="type--bold">March 4th, 2018</td>
                        </tr>
                        <tr>
                          <td valign="top" className="force-black">
                            <FormattedMessage id="tokensale_rate" />:
                          </td>
                          <td className="type--bold">
                            1 ETH = 4000 DTX + 3400 bonus
                          </td>
                        </tr>
                        <tr>
                          <td valign="top" className="force-black">
                            <FormattedMessage id="tokensale_minimum" />:
                          </td>
                          <td className="type--bold">none</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="col-sm-6 padding-only-left">
                    <table>
                      <tbody>
                        <tr>
                          <td valign="top" className="force-black">
                            Ends:
                          </td>
                          <td className="type--bold">
                            March 8th, 2018 23:59 CET
                          </td>
                        </tr>
                        <tr>
                          <td valign="top" className="force-black">
                            Bonus:
                          </td>
                          <td className="type--bold">85%</td>
                        </tr>
                        <tr>
                          <td valign="top" className="force-black">
                            Lockup:
                          </td>
                          <td className="type--bold">none</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="col-sm-12">
                    <a
                      className="btn btn-lg btn--primary"
                      href="#start"
                      style={{ display: 'block', margin: '0 auto' }}
                    >
                      <span
                        className="btn__text type--uppercase"
                        style={{ color: 'white' }}
                      >
                        {localStorage.getItem('ref') === 'mattsyndicate' && (
                          <span>
                            Join the private sale for MattSyndicate members
                          </span>
                        )}
                        {localStorage.getItem('ref') !== 'cryptoclub' &&
                          localStorage.getItem('ref') !== 'mattsyndicate' && (
                            <FormattedMessage id="cta" />
                          )}
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            )}

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
                        <td className="type--bold">March 19th, 2018 4PM CET</td>
                      </tr>
                      <tr>
                        <td valign="top" className="force-black">
                          <FormattedMessage id="tokensale_rate" />:
                        </td>
                        <td className="type--bold">
                          1 ETH = 4000 DTX + 2000 bonus
                        </td>
                      </tr>
                      <tr>
                        <td valign="top" className="force-black">
                          <FormattedMessage id="tokensale_minimum" />:
                        </td>
                        <td className="type--bold">10 ETH</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col-sm-6 padding-only-left">
                  <table>
                    <tbody>
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
                        <td className="type--bold">March 26th, 2018 4PM CET</td>
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
                        <td className="type--bold">April 23rd, 2018 4PM CET</td>
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
                        <td className="type--bold">April 30th, 2018</td>
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
                            href="https://chankura.com/"
                            style={{ color: '#666' }}
                          >
                            Chankura.com
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
              {localStorage.getItem('ref') === 'cryptoclub' && (
                <span>Join the private sale for Crypto Club members</span>
              )}
              {localStorage.getItem('ref') === 'mattsyndicate' && (
                <span>Join the private sale for MattSyndicate members</span>
              )}
              {localStorage.getItem('ref') !== 'cryptoclub' &&
                localStorage.getItem('ref') === 'mattsyndicate' && (
                  <FormattedMessage id="cta" />
                )}
            </span>
          </a>
        </div>
      </section>
    );
  }
}

export default TokenSaleSection;
