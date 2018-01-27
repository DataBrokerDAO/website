import React, { PureComponent } from 'react';

class BenefitsSection extends PureComponent {
  render() {
    return (
      <section id="benefits" className="bg--secondary text-center">
        <div className="container">
          <div className="row">
            <div className="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
              <span className="type--uppercase type--bold">The benefits</span>
              <div className="typed-headline text-left">
                <span className="h2 inline-block">You can</span>
                <span
                  className="h2 inline-block typed-text typed-text--cursor color--primary"
                  data-typed-strings="monetize your data, recoup sensor costs, gain access to thousands of sensors, turn expenses into investments"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <div className="feature feature-3 boxed boxed--lg boxed--border">
                <i className="fa fa-podcast fa-5x color--primary" />
                <h4 className="color--primary">Sensor owners</h4>
                <p>
                  Are able to monetize their data and turn a sunk cost into a
                  potential money maker and at least the opportunity to recoup
                  some of their investments in IoT sensors.
                </p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="feature feature-3 boxed boxed--lg boxed--border">
                <i className="fa fa-wifi fa-5x color--primary" />
                <h4 className="color--primary">Network operators</h4>
                <p>
                  Gain scale and speed in the adoption of their network as
                  connected telcos can present a win-back to their enterprise
                  accounts, a clear USP.
                </p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="feature feature-3 boxed boxed--lg boxed--border">
                <i className="fa fa-industry fa-5x color--primary" />
                <h4 className="color--primary">Sensor manufacturers</h4>
                <p>
                  Can stop the"race to the bottom” for production and pull
                  resources and capital out of manufacturing and allocate these
                  to profitable SaaS offerings.{' '}
                </p>
              </div>
            </div>

            <div className="clearfix visible-xs-block" />

            <div className="col-sm-4">
              <div className="feature feature-3 boxed boxed--lg boxed--border">
                <i className="fa fa-building-o fa-5x color--primary" />
                <h4 className="color--primary">Smart city initiatives</h4>
                <p>
                  Can limit the upfront cost of populating the town with
                  sufficient sensors and turn the expense into an investment
                  with a 2-3 year payback period and a continuous income stream
                  after that.
                </p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="feature feature-3 boxed boxed--lg boxed--border">
                <i className="fa fa-pagelines fa-5x color--primary" />
                <h4 className="color--primary">Agricultural sector</h4>
                <p>
                  In the Agricultural sector in Belgium today, 10% of farmers
                  are"techie". They deploy sensors include for wind,
                  temperature, barometric pressure, humidity, PH level in the
                  soil. The platform will provide the possibility to recoup some
                  of this cost.
                </p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="feature feature-3 boxed boxed--lg boxed--border">
                <i className="fa fa-graduation-cap fa-5x color--primary" />
                <h4 className="color--primary">Academics</h4>
                <p>
                  Can get access to thousands of sensors and can buy data
                  directly and more cheap on the marketplace, cutting out
                  established data providers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default BenefitsSection;
