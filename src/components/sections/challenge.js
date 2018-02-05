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
                  <FormattedMessage id="challenge_text" />
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
