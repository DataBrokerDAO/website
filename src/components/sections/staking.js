import React, { PureComponent } from 'react'
// import { FormattedMessage } from 'react-intl'
import LazyLoad from 'react-lazyload'

import { Video } from './video'

class StakingSection extends PureComponent {
  render() {
    return (
      <section
        id="staking"
        className="feature-large switchable space--sm"
        style={{ backgroundColor: 'white' }}
      >
        <div className="container">
          <div className="row align-center">
            <div className="col-md-5  col-sm-6">
              <h2>
                How can you be sure of the sensor & data quality on the
                DataBroker DAO marketplace?
              </h2>
              <hr className="short" />
              <p className="lead">
                Discover here how DataBroker DAO guarantees the quality of data
                sold on the marketplace, a decentralized market for IoT sensor
                data.
              </p>
            </div>
            <div className="col-md-6 col-sm-6 col-md-offset-1">
              <div
                className="video-cover border--round"
                style={{ background: 'white', height: '300px' }}
              >
                {/*<div className="background-image-holder">
                  <img alt="DataBrokerDAO" src="img/video-cover3.jpg" />
                </div>
    <div className="video-play-icon" />*/}
                <LazyLoad height={300} offset={30}>
                  <Video id="ihihcv188i"/>
                </LazyLoad>
                {/*<iframe
                  style={{ background: 'white' }}
                  title="DataBrokerDAO"
                  data-src="https://player.vimeo.com/video/260074443?autoplay=1"
                  allowFullScreen
                  frameBorder={0}
                />*/}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default StakingSection
