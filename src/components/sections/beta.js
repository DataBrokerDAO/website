import React, { PureComponent } from 'react'
import WorldSVG from '../../assets/world.svg'
import { FormattedMessage } from 'react-intl'

class BetaSection extends PureComponent {
  render() {
    return (
      <section
        id="beta"
        className="cover feature-large imagebg"
        data-gradient-bg="#EB274C,#7E347E,#2E3192"
      >
        <div className="background-image-holder low-opacity">
          <img alt="background" src={WorldSVG} />
        </div>
        <div className="container">
          <div className="row align-center">
            <div className="col-md-5 col-sm-6 mb--3">
              <h2 style={{ marginBottom: '5px' }}>
                <FormattedMessage id="beta_title" />
              </h2>
              <p
                className="type--uppercase type--bold"
                style={{ marginBottom: '20px' }}
              >
                <FormattedMessage id="beta_intro" />
              </p>
              <hr className="short" />
              <p className="lead">
                <FormattedMessage id="beta_text" />
              </p>
              <a
                className="btn btn-lg btn--primary"
                href="https://beta.databrokerdao.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="btn__text type--uppercase">
                  <FormattedMessage id="beta_button" />
                </span>
              </a>
            </div>
            <div className="col-md-6 col-md-offset-1 col-sm-6">
              <img
                alt="Databroker"
                src="./img/imac_databroker.png"
                style={{ marginBottom: '-5px' }}
              />
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default BetaSection
