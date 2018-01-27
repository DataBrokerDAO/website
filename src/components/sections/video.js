import React, { PureComponent } from 'react';

class VideoSection extends PureComponent {
  render() {
    return (
      <section id="databroker" className="feature-large switchable space--sm">
        <div className="container">
          <div className="row align-center">
            <div className="col-md-5  col-sm-6">
              <h2>Databroker DAO in 30 seconds</h2>
              <hr className="short" />
              <p className="lead">
                Today companies make use of sensor data to optimize and monitor
                their operations. The result is a single purpose data landscape.
                DataBroker DAO drives the evolution towards truly ‘smart living’
                by making this data easily accessible to cities, organizations
                and entrepreneurs at an affordable price. Check out our video to
                learn more.
              </p>
            </div>
            <div className="col-md-6 col-sm-6 col-md-offset-1">
              <div className="video-cover border--round box-shadow-wide">
                <div className="background-image-holder">
                  <img
                    alt="DatabrokerDAO explainer video"
                    src="./img/video-cover2.png"
                  />
                </div>
                <div className="video-play-icon" />
                <iframe
                  title="DataBrokerDAO video"
                  data-src="https://www.youtube.com/embed/hZLr5O7y71c?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1"
                  frameBorder="0"
                  allowFullScreen="allowfullscreen"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default VideoSection;
