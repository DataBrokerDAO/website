import React, { PureComponent } from 'react';

class ChallengeSection extends PureComponent {
  render() {
    return (
      <section id=" challenge" className="switchable bg--secondary height-auto">
        <div className="container pos-vertical-center">
          <div className="row text-center">
            <h2 style={{ marginBottom: '5px' }}>The Challenge</h2>
            <p
              className="type--uppercase type--bold"
              style={{ marginBottom: '10px' }}
            >
              Unlocking the potential &amp; monetization of IoT sensor data
            </p>
          </div>
          <div className="row">
            <div className="col-md-2" />
            <div className="col-md-4">
              <img
                srcSet=" ./img/problem/problem.png 1x, ./img/problem/problem@2x.png 2x, ./img/problem/problem@3x.png 3x,
                ./img/problem/problem@4x.png 4x"
                className="app-translate-5"
                style={{ marginTop: '20px' }}
                alt="The challenge"
              />
            </div>
            <div className="col-md-4">
              <div className="switchable__text">
                <p className="lead">
                  Individuals, companies, researchers &amp; governments are
                  spending hundreds of billions each year on buying and
                  maintaining IoT sensors. The growth of the investment and
                  applications in IoT is truly staggering, and yet, all data
                  captured by these devices is locked up in silos and walled
                  gardens.
                </p>
              </div>
            </div>
            <div className="col-md-2" />
          </div>
        </div>
      </section>
    );
  }
}

export default ChallengeSection;
