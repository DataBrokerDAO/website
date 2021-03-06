import React, { PureComponent } from 'react'
import WorldSVG from '../../assets/world.svg'
import TelegramLogo from '../../assets/telegram.png'

// import { FormattedMessage } from 'react-intl'

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
              style={{
                display: 'block',
                margin: '0 auto',
                backgroundColor: '#fff',
                border: 'none',
              }}
            >
              <span
                className="btn__text type--uppercase"
                style={{ color: '#0088cc' }}
              >
                <img
                  style={{
                    height: '30px',
                    width: '30px',
                    position: 'relative',
                    top: '-2px',
                    left: '-5px',
                  }}
                  src={TelegramLogo}
                  alt="TelegramLogo"
                />
                Join us on Telegram
              </span>
            </a>
          </div>
        </div>
      </section>
    )
  }
}

export default CTASection
