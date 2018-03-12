import React, { PureComponent } from 'react';
import { FormattedMessage } from 'react-intl';

class ChallengeSection extends PureComponent {
  render() {
    return (
      <section id=" challenge" className="switchable bg--secondary height-auto">
        <div className="container pos-vertical-center">
          <div className="row text-center">
            <h2 style={{ marginBottom: '5px' }}>
              <FormattedMessage id="challenge_title" />
            </h2>
            <p
              className="type--uppercase type--bold"
              style={{ marginBottom: '10px' }}
            >
              <FormattedMessage id="challenge_intro" />
            </p>
          </div>
          <div className="row">
            <div className="col-md-8">
              <img
                src="/img/DATABROKER_INFOGRAPHIC_07-01.png"
                className="app-translate-5"
                style={{ marginTop: '20px' }}
                alt="The challenge"
              />
            </div>
            <div className="col-md-4">
              <div className="switchable__text">
                <p>
                  <strong>
                    Individuals, companies, researchers & governments are
                    spending hundreds of billions each year on buying and
                    maintaining IoT sensors.
                  </strong>
                  The growth of the investment and applications in IoT is truly
                  staggering, and yet,{' '}
                  <strong>
                    all data captured by these devices is locked up in silos and
                    walled gardens.
                  </strong>
                </p>
                <p>
                  On its path from sensor to silo, all{' '}
                  <strong>this data flows over gateway operators</strong> like
                  telecom companies, networks and even the control panels of the
                  sensor manufacturers.
                </p>
                <p>
                  These sensor owners usually have{' '}
                  <strong>a two year business case</strong> for their placement
                  and the data they generate.{' '}
                  <strong>The primary market</strong>
                  for these sensors is expected to reach{' '}
                  <strong>1.2 trillion USD in 2019</strong>, and estimating that
                  at least{' '}
                  <strong>
                    10% of the data generated is sought for others
                  </strong>{' '}
                  (1-3 times), the{' '}
                  <strong>
                    value of data locked away will reach 120 billion
                  </strong>{' '}
                  next year!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ChallengeSection;
