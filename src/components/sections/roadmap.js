import React, { PureComponent } from 'react';
import { FormattedMessage } from 'react-intl';

class RoadmapSection extends PureComponent {
  render() {
    return (
      <section id="roadmap" className="bg--secondary text-center ">
        <div className="container ">
          <div className="row ">
            <div className="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 ">
              <h2>
                <FormattedMessage id="roadmap_title" />
              </h2>
            </div>
          </div>
          <div className="row ">
            <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-2 text-left ">
              <div className="process-1 ">
                <div className="process__item ">
                  <span className="type--uppercase type--bold ">
                    March, 19th 2018 4PM CET
                  </span>
                  <h4 className="color--primary type--uppercase">
                    <FormattedMessage id="roadmap_presale" />
                  </h4>
                  <p style={{ marginBottom: 0 }}>
                    <FormattedMessage id="roadmap_presale_text" />
                  </p>
                </div>
                <div className="process__item ">
                  <span className="type--uppercase type--bold ">
                    March, 26th 2018 4PM CET
                  </span>
                  <h4 className="color--primary  type--uppercase">
                    <FormattedMessage id="roadmap_tokensale" />
                  </h4>
                  <p>
                    <FormattedMessage id="roadmap_tokensale_text" />
                  </p>
                </div>
                <div className="process__item ">
                  <span className="type--uppercase type--bold ">
                    April 30th 2018
                  </span>
                  <h4 className="color--primary  type--uppercase">
                    <FormattedMessage id="roadmap_trading" />
                  </h4>
                  <p style={{ marginBottom: 0 }}>
                    <FormattedMessage id="roadmap_trading_text" />
                  </p>
                </div>
                <div className="process__item ">
                  <span className="type--uppercase type--bold ">Q2 2018</span>
                  <h4 className="color--primary type--uppercase">
                    <FormattedMessage id="roadmap_mainnet" />
                  </h4>
                  <p style={{ marginBottom: 0 }}>
                    <FormattedMessage id="roadmap_mainnet_text" />
                  </p>
                </div>
                <div className="process__item ">
                  <span className="type--uppercase type--bold ">Q2 2018</span>
                  <h4 className="color--primary type--uppercase">
                    <FormattedMessage id="roadmap_extendedteam" />
                  </h4>
                  <p style={{ marginBottom: 0 }}>
                    <FormattedMessage id="roadmap_extendedteam_text" />
                  </p>
                </div>
                <div className="process__item ">
                  <span className="type--uppercase type--bold ">Q2 2018</span>
                  <h4 className="color--primary type--uppercase">
                    <FormattedMessage id="roadmap_gateway" />
                  </h4>
                  <p style={{ marginBottom: 0 }}>
                    <FormattedMessage id="roadmap_gateway_text" />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 ">
              <h2>
                Want to know what else we planned?<br />Check out the whitepaper
                around page 24!
              </h2>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default RoadmapSection;
