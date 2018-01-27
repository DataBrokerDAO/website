import React, { PureComponent } from 'react';

class BetaSection extends PureComponent {
  render() {
    return (
      <section
        id="beta"
        className="cover feature-large imagebg"
        data-gradient-bg="#EB274C,#7E347E,#2E3192"
      >
        <div className="background-image-holder">
          <img alt="background" src="./img/world.svg" />
        </div>
        <div className="container">
          <div className="row align-center">
            <div className="col-md-5 col-sm-6 mb--3">
              <h2 style={{ marginBottom: '5px' }}>Beta Platform</h2>
              <p
                className="type--uppercase type--bold"
                style={{ marginBottom: '20px' }}
              >
                We have a fully functioning platform for you to try
              </p>
              <hr className="short" />
              <p className="lead">
                Want to know how selling or buying IoT sensor data would work on
                Databroker? Check out the BETA version of the platform.
              </p>
              <a
                className="btn btn-lg btn--primary"
                href="https://beta.databrokerdao.com"
                target="_blank"
              >
                <span className="btn__text type--uppercase">
                  Try our marketplace
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
    );
  }
}

export default BetaSection;
