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

                <div className="process__item ">
                  <span className="type--uppercase type--bold ">Q3 2018</span>
                  <h4 className="color--primary type--uppercase">
                    IMPROVING THE (WHITE LABELED) FRONTEND INTERFACE
                  </h4>
                  <p style={{ marginBottom: 0 }}>
                    On the one hand is the focus of DataBroker DAO mostly on the
                    dAPI. This is where the data streams will flow over, and
                    combined with the smart contracts the core value of the
                    platform. We expect quite a few gateway operators to use the
                    dAPI to build a marketplace in their existing platforms.
                    There will however be quite a few that do not have an
                    integrated approach, or no existing systems to integrate
                    with. That is the reason we will build a DataBroker DAO
                    marketplace frontend and offer this frontend in a white
                    labeled form to gateway operators. When first launching the
                    platform this interface will be a basic one, and will
                    require a diverse set of skills (information architecture,
                    design, web and mobile development) over in the first two
                    years to build a tier one frontend. This will be a heavy
                    focus for Q3 of 2018 to reach the next guideline.
                  </p>
                </div>
                <div className="process__item ">
                  <span className="type--uppercase type--bold ">Q4 2018</span>
                  <h4 className="color--primary type--uppercase">
                    Private data sales and whitelisted buyers
                  </h4>
                  <p style={{ marginBottom: 0 }}>
                    Working with our alliance members has taught us a lot.
                    Including the fact that there is a large set of data in the
                    market that companies want to sell to either anyone except a
                    competitor, or to just a whitelisted group of companies. As
                    such this capability will be integrated in the smart
                    contracts from the start, and work in the frontend side will
                    continue into Q4 2018.
                  </p>
                </div>
                <div className="process__item ">
                  <span className="type--uppercase type--bold ">Q1 2019</span>
                  <h4 className="color--primary type--uppercase">
                    DATA ENHANCEMENT INTEGRATIONS
                  </h4>
                  <p style={{ marginBottom: 0 }}>
                    Having easy access to large amounts of data opens up a
                    wealth of options for many startups across the globe.
                    Enhancement and aggregation will provide even more valuable
                    data than the raw data itself. The team will look for, and
                    work with partners in the Alliance to provide valuable
                    services based on the raw data by providing libraries and
                    integrations for commonly used tools. Integration with AI
                    tools (like provided by the large cloud providers, or
                    Tensorflow) come to mind. Initial integrations will be made
                    with the dataprocessors in our Alliance in Q1 2019
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default RoadmapSection;
