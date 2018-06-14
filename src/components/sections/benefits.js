import React, { PureComponent } from 'react'
import { FormattedMessage, injectIntl } from 'react-intl'

class BenefitsSection extends PureComponent {
  render() {
    return (
      <section id="benefits" className="bg--secondary text-center">
        <div className="container">
          <div className="row">
            <div className="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
              <span className="type--uppercase type--bold">
                <FormattedMessage id="benefits_title" />
              </span>
              <div className="typed-headline text-left">
                <span className="h2 inline-block">
                  <FormattedMessage id="benefits_pretitle" />
                </span>
                <span
                  className="h2 inline-block typed-text typed-text--cursor color--primary"
                  data-typed-strings={this.props.intl.formatMessage({
                    id: 'benefits_ticker',
                  })}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <div className="feature feature-3 boxed boxed--lg boxed--border">
                <i className="fa fa-podcast fa-5x color--primary" />
                <h4 className="color--primary">
                  <FormattedMessage id="benefits_sensor_title" />
                </h4>
                <p>
                  <FormattedMessage id="benefits_sensor_text" />
                </p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="feature feature-3 boxed boxed--lg boxed--border">
                <i className="fa fa-wifi fa-5x color--primary" />
                <h4 className="color--primary">
                  <FormattedMessage id="benefits_network_title" />
                </h4>
                <p>
                  <FormattedMessage id="benefits_network_text" />
                </p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="feature feature-3 boxed boxed--lg boxed--border">
                <i className="fa fa-industry fa-5x color--primary" />
                <h4 className="color--primary">
                  <FormattedMessage id="benefits_manufacturers_title" />
                </h4>
                <p>
                  <FormattedMessage id="benefits_manufacturers_text" />
                </p>
              </div>
            </div>

            <div className="clearfix visible-xs-block" />

            <div className="col-sm-4">
              <div className="feature feature-3 boxed boxed--lg boxed--border">
                <i className="fa fa-building-o fa-5x color--primary" />
                <h4 className="color--primary">
                  <FormattedMessage id="benefits_smartcity_title" />
                </h4>
                <p>
                  <FormattedMessage id="benefits_smartcity_text" />
                </p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="feature feature-3 boxed boxed--lg boxed--border">
                <i className="fa fa-pagelines fa-5x color--primary" />
                <h4 className="color--primary">
                  <FormattedMessage id="benefits_agriculture_title" />
                </h4>
                <p>
                  <FormattedMessage id="benefits_agriculture_text" />
                </p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="feature feature-3 boxed boxed--lg boxed--border">
                <i className="fa fa-graduation-cap fa-5x color--primary" />
                <h4 className="color--primary">
                  <FormattedMessage id="benefits_academics_title" />
                </h4>
                <p>
                  <FormattedMessage id="benefits_academics_text" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default injectIntl(BenefitsSection)
