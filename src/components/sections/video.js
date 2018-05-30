import React, { PureComponent } from 'react'
import { FormattedMessage } from 'react-intl'
import LazyLoad from 'react-lazyload'

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
                style={{ background: 'white', height: '300px' }}
              >
                {/*<div className="background-image-holder">
                  <img alt="DataBrokerDAO" src="img/video-cover3.jpg" />
                </div>
    <div className="video-play-icon" />*/}

                <LazyLoad height={300} offset={30}>
                  <Video id="rx3mgu8hb2" />
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

export class Video extends React.Component {
  componentWillMount() {
    if (typeof document !== 'undefined') {
      const script1 = document.createElement('script')
      const script2 = document.createElement('script')

      script1.src = 'https://fast.wistia.com/embed/medias/videolink.jsonp'
      script1.defer = true

      script2.src = 'https://fast.wistia.com/assets/external/E-v1.js'
      script2.defer = true

      document.body.appendChild(script1)
      document.body.appendChild(script2)
    }
  }

  render() {
    return (
      <div>
        <div
          className={`wistia_embed wistia_async_${
            this.props.id
          } videoFoam=true playerColor=ff4f4f`}
        />
      </div>
    )
  }
}

export default VideoSection
