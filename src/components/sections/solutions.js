import React, { PureComponent } from 'react';
import { FormattedMessage } from 'react-intl';

class SolutionSection extends PureComponent {
  render() {
    return (
      <section id="solution" className="text-center" style={{ backgroundColor: 'white' }}>
        <div className="container">
          <div className="row">
            <div className="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
              <h2 style={{ marginBottom: '5px' }}>
                <FormattedMessage id="solution_title" />
              </h2>
              <p
                className="type--uppercase type--bold"
                style={{ marginBottom: '40px' }}
              >
                <FormattedMessage id="solution_subtitle" />
              </p>
            </div>
            <div className="col-sm-12 col-md-10 col-md-offset-1">
              <img
                alt="the solution"
                srcSet=" ./img/solution/solution.png 1x, ./img/solution/solution@2x.png 2x, ./img/solution/solution@3x.png
              3x, ./img/solution/solution@4x.png 4x"
                className="app-translate-5"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SolutionSection;
