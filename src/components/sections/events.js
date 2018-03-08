import React, { PureComponent } from 'react';
import { FormattedMessage } from 'react-intl';

const events = [
  {
    date: 'March 8',
    title: 'FINTECH Belgium - MeetUp on ICOs',
    location: 'Brussels, Belgium'
  },
  {
    date: 'March 13',
    title: 'Blockchain Summit Belgium',
    location: 'Ghent, Belgium'
  },
  {
    date: 'March 21-23',
    title: 'Go Global Mission Kenya',
    location: 'Kenya'
  },
  {
    date: 'March 28-29',
    title: 'STEP Money',
    location: 'Dubai, UAE'
  },
  {
    date: 'March 26-28',
    title: 'KNOW Identity Conference',
    location: 'Washington, USA'
  },
  {
    date: 'April 4-5',
    title: 'Sido - The IoT Showroom',
    location: 'Lyon, France'
  },
  {
    date: 'April 17-19',
    title: 'EventHorizon',
    location: 'Berlin, Germany'
  },
  {
    date: 'April 19',
    title: 'Zero-In',
    location: 'Amsterdam, Netherlands'
  },
  {
    date: 'May 2-3',
    title: 'Future Blockchain Summit',
    location: 'Dubai, UAE'
  },
  {
    date: 'June 11-14',
    title: 'MoneyConf',
    location: 'Dublin, Ireland'
  }
];

class EventsSection extends PureComponent {
  render() {
    return (
      <section id="events" className="bg--secondary">
        <div className="container">
          <div className="row">
            <div className="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 text-center">
              <h2 style={{ marginBottom: '5px' }}>
                <FormattedMessage id="events_title" />
              </h2>
              <p
                className="type--uppercase type--bold"
                style={{ marginBottom: '5px' }}
              >
                <FormattedMessage id="events_subtitle" />
              </p>
            </div>
          </div>
          <div className="row events" style={{ margin: '30px 0' }}>
            {events.map((event, index) => (
              <div key={index} className="col-sm-4">
                <div className="event feature feature-1 boxed boxed--border">
                  <p className="color--primary">{event.date}</p>
                  <h4>{event.title}</h4>
                  <p>{event.location}</p>
                </div>
              </div>
            ))}

            <div className="col-sm-4">
              <div className="event feature feature-1 boxed boxed--border">
                <h4>
                  <FormattedMessage id="events_webinar" />
                </h4>
                <a
                  className="btn btn-lg btn--primary"
                  href="https://register.gotowebinar.com/rt/3131333637637198083"
                  style={{ display: 'block', marginTop: '40px' }}
                >
                  <span className="btn__text type--uppercase">
                    <FormattedMessage id="events_webinar_button" />
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="row" style={{ marginBottom: '30px' }}>
            <div className="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 text-center">
              <p
                className="type--uppercase type--bold"
                style={{ marginBottom: '5px' }}
              >
                <FormattedMessage id="events_subtitle_two" />
              </p>
            </div>
          </div>

          <div className="row" style={{ margin: '30px 0' }}>
            <div className="col-sm-4">
              <div
                className="event feature feature-1 boxed boxed--border"
                onClick={() =>
                  window.open(
                    'https://www.meetup.com/Bitcoin-CryptoCurrency-Invest-ICO-by-Cryptario-Stockholm/events/246383446/'
                  )
                }
              >
                <p className="color--primary">January 16</p>
                <h4>
                  Bitcoin, Blockchain, CryptoCurrency, Invest &amp; ICO 2018
                  Kick-off Meetup
                </h4>
                <p>Stockholm</p>
              </div>
            </div>
            <div className="col-sm-4">
              <div
                className="event feature feature-1 boxed boxed--border"
                onClick={() =>
                  window.open('https://www.unlock-bc.com/events/unlock/2018')
                }
              >
                <p className="color--primary">January 14 - 15</p>
                <h4>UNLOCK</h4>
                <p>Dubai, United Arab Emirates</p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="event feature feature-1 boxed boxed--border">
                <p className="color--primary">November 14 - 16</p>
                <h4>Smart City Expo</h4>
                <p>Barcelona</p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="event feature feature-1 boxed boxed--border">
                <p className="color--primary">November 6 - 9</p>
                <h4>Web Summit</h4>
                <p>Lisbon</p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="event feature feature-1 boxed boxed--border">
                <p className="color--primary">October 24 - 25</p>
                <h4>World Blockchain Summit</h4>
                <p>Dubai</p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="event feature feature-1 boxed boxed--border">
                <p className="color--primary">October 16 - 19</p>
                <h4>Sibos</h4>
                <p>Toronto</p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="event feature feature-1 boxed boxed--border">
                <p className="color--primary">October 8 - 12</p>
                <h4>Gitex</h4>
                <p>Dubai</p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="event feature feature-1 boxed boxed--border">
                <p className="color--primary">October 2 - 4</p>
                <h4>TechXLR8</h4>
                <p>Singapore</p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="event feature feature-1 boxed boxed--border">
                <p className="color--primary">September 25 - 26</p>
                <h4>World Blockchain Forum</h4>
                <p>London</p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="event feature feature-1 boxed boxed--border">
                <p className="color--primary">September 25 - 26</p>
                <h4>Sigfox World IoT Expo</h4>
                <p>Prague</p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="event feature feature-1 boxed boxed--border">
                <p className="color--primary">September 14 - 16</p>
                <h4>Wanxiang Blockchain Labs</h4>
                <p>Shanghai</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default EventsSection;
