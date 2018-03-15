import React, { PureComponent } from 'react'

class ChannelsSection extends PureComponent {
  render() {
    return (
      <section id="channels" className="space--xxs bg--secondary">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <div className="footer-channels">
                <span>
                  <a
                    className="color--primary"
                    style={{ textDecoration: 'none' }}
                    href="https://t.me/databrokerdao"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-telegram fa-3x" />
                  </a>
                </span>
                <span>
                  <a
                    className="color--primary"
                    style={{ textDecoration: 'none' }}
                    href="https://www.facebook.com/DataBrokerDAO/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-facebook fa-3x" />
                  </a>
                </span>
                <span>
                  <a
                    className="color--primary"
                    style={{ textDecoration: 'none' }}
                    href="https://twitter.com/DataBrokerDAO"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-twitter fa-3x" />
                  </a>
                </span>
                <span>
                  <a
                    className="color--primary"
                    style={{ textDecoration: 'none' }}
                    href="https://medium.com/DataBrokerDAO"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-medium fa-3x" />
                  </a>
                </span>
                <span>
                  <a
                    className="color--primary"
                    style={{ textDecoration: 'none' }}
                    href="https://bitcointalk.org/index.php?topic=2113309.0"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-btc fa-3x" />
                  </a>
                </span>
                <span>
                  <a
                    className="color--primary"
                    style={{ textDecoration: 'none' }}
                    href="https://github.com/DataBrokerDAO"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-github fa-3x" />
                  </a>
                </span>
                <span>
                  <a
                    className="color--primary"
                    style={{ textDecoration: 'none' }}
                    href="https://www.reddit.com/r/DatabrokerDAO/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-reddit fa-3x" />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default ChannelsSection
