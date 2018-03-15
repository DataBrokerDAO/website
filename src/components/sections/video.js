import React, { PureComponent } from 'react'
import { FormattedMessage } from 'react-intl'

class VideoSection extends PureComponent {
  render() {
    return (
      <section
        id="databroker"
        className="feature-large switchable space--sm"
        style={{ backgroundColor: 'white' }}
      >
        <div className="container">
          <div className="row align-center">
            <div className="col-md-5  col-sm-6">
              <h2>
                <FormattedMessage id="video_title" />
              </h2>
              <hr className="short" />
              <p className="lead">
                <FormattedMessage id="video_lead" />
              </p>
            </div>
            <div className="col-md-6 col-sm-6 col-md-offset-1">
              <div
                className="video-cover border--round"
                style={{ background: 'white' }}
              >
                <div className="background-image-holder">
                  <img alt="DataBrokerDAO" src="img/video-cover3.jpg" />
                </div>
                <div className="video-play-icon" />

                <iframe
                  style={{ background: 'white' }}
                  title="DataBrokerDAO"
                  data-src="https://player.vimeo.com/video/260074443?autoplay=1"
                  allowFullScreen
                  frameBorder={0}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default VideoSection
