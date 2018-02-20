import React, { PureComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import WorldSVG from '../../assets/world.svg';

class Footer extends PureComponent {
  render() {
    return (
      <footer
        className="footer-6 cover imagebg space--xs"
        data-gradient-bg="#EB274C,#7E347E,#2E3192"
        style={{ paddingTop: '50px' }}
      >
        <div className="background-image-holder low-opacity">
          <img alt="background" src={WorldSVG} />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-7">
              <ul className="list-inline list--hover">
                <li>
                  <a href="#databroker">
                    <FormattedMessage id="footer_whatis" />
                  </a>
                </li>
                <li>
                  <a
                    href="/whitepaper/WHITEPAPER_DataBrokerDAO_ENG.pdf"
                    target="_blank"
                  >
                    <FormattedMessage id="footer_whitepaper" />
                  </a>
                </li>
                <li>
                  <a href="#alliance">
                    <FormattedMessage id="footer_alliance" />
                  </a>
                </li>
                <li>
                  <a href="#team">
                    <FormattedMessage id="footer_team" />
                  </a>
                </li>
                <li>
                  <a href="#jobs">
                    <FormattedMessage id="footer_jobs" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://medium.com/DataBrokerDAO"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FormattedMessage id="footer_updates" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-5 text-right text-center-xs height-auto">
              <ul className="social-list list-inline list--hover">
                <li>
                  <a href="/whitepaper/presskit.zip">
                    <span>
                      <i
                        className="fa fa-download mr--3"
                        style={{ marginRight: '5px' }}
                      />
                      <FormattedMessage id="footer_presskit" />
                    </span>
                  </a>
                </li>
              </ul>
              <a
                href="mailto:hello@databrokerdao.com"
                className="btn type--uppercase"
              >
                <span className="btn__text">
                  <FormattedMessage id="footer_contactus" />
                </span>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <img
                alt="DataBrokerDAO"
                className="logo"
                src="./img/white-logo.svg"
              />
            </div>
            <div className="col-sm-6 text-right text-center-xs">
              <span className="type--fine-print">
                &copy;
                <span className="update-year">2017</span>{' '}
                <FormattedMessage id="copyright" />
              </span>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
