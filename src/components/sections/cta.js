import React, { PureComponent } from 'react';
import WorldSVG from '../../assets/world.svg';
import { FormattedMessage } from 'react-intl';

class CTASection extends PureComponent {
  render() {
    return (
      <section
        id="advisors"
        className="cover height-10 imagebg text-center"
        data-gradient-bg="#EB274C,#7E347E,#2E3192"
      >
        <div className="background-image-holder low-opacity">
          <img alt="background" src={WorldSVG} />
        </div>
        <div className="container" style={{ bottom: '15px' }}>
          <div className="row align-center">
            <a
              className="btn btn-lg btn--primary"
              href="#start"
              style={{ display: 'block', margin: '0 auto' }}
            >
              <span
                className="btn__text type--uppercase"
                style={{ color: 'white' }}
              >
                {localStorage.getItem('ref') === 'cryptoclub' && (
                  <span>Join the private sale for Crypto Club members</span>
                )}
                {localStorage.getItem('ref') === 'mattsyndicate' && (
                  <span>Join the private sale for MattSyndicate members</span>
                )}
                {localStorage.getItem('ref') !== 'cryptoclub' &&
                  localStorage.getItem('ref') !== 'mattsyndicate' && (
                    <FormattedMessage id="cta" />
                  )}
              </span>
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default CTASection;
