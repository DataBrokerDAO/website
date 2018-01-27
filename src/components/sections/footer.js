import React, { PureComponent } from 'react';

class Footer extends PureComponent {
  render() {
    return (
      <footer
        className="footer-6 cover imagebg space--xs bg--dark"
        data-gradient-bg="#EB274C,#7E347E,#2E3192"
        style={{ paddingTop: '50px' }}
      >
        <div className="background-image-holder">
          <img alt="background" src="./img/world.svg" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-7">
              <ul className="list-inline list--hover">
                <li>
                  <a href="#databroker">
                    <span>What is DataBroker DAO?</span>
                  </a>
                </li>

                <li>
                  <a
                    href="/whitepaper/WHITEPAPER_DataBrokerDAO_ENG.pdf"
                    target="_blank"
                  >
                    <span>Whitepaper</span>
                  </a>
                </li>
                <li>
                  <a href="#alliance">
                    <span>Alliance</span>
                  </a>
                </li>
                <li>
                  <a href="#team">
                    <span>Team</span>
                  </a>
                </li>
                <li>
                  <a href="#jobs">
                    <span>Jobs</span>
                  </a>
                </li>
                <li>
                  <a href="https://medium.com/DataBrokerDAO" target="_blank">
                    Updates
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
                      />Press Kit
                    </span>
                  </a>
                </li>
              </ul>
              <a
                href="mailto:hello@databrokerdao.com"
                className="btn type--uppercase"
              >
                <span className="btn__text">Contact Us</span>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <img alt="Image" className="logo" src="./img/white-logo.svg" />
            </div>
            <div className="col-sm-6 text-right text-center-xs">
              <span className="type--fine-print">
                &copy;
                <span className="update-year">2017</span> DataBrokerDAO — All
                Rights Reserved
              </span>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
