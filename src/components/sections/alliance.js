import React, { PureComponent } from 'react'
import { FormattedMessage } from 'react-intl'
import LogoBrusselsSmartCity from '../../assets/alliance/Logo_BrusselsSmartCity.png'
import LogoYuktix from '../../assets/alliance/logo_Yuktix.png'
import LogoDesideDatum from '../../assets/alliance/logo_desideDatum.png'
import LogoIquadrat from '../../assets/alliance/logo_iquadrat.png'
import LogoSkylark from '../../assets/alliance/logo_Skylark.png'
import LogoTechnilog from '../../assets/alliance/Logo_Technilog.png'
import LogoIdentitymindglobal from '../../assets/alliance/logo_identitymindglobal.png'

class AllianceSection extends PureComponent {
  render() {
    return (
      <section id="alliance" className="bg--secondary text-center">
        <div className="container">
          <div className="row">
            <div className="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
              <h2 style={{ marginBottom: '20px' }}>
                <FormattedMessage id="alliance_title" />
              </h2>
              <p>
                <FormattedMessage id="alliance_intro" />
              </p>
              <p style={{ fontStyle: 'italic' }}>
                <FormattedMessage id="alliance_quote" />
              </p>
            </div>
          </div>
          <div className="row align-center" style={{ marginTop: '50px' }}>
            <div className="col-sm-1" />
            <div className="col-sm-2 modal-instance zooming-logo">
              <a className="modal-trigger" style={{ cursor: 'pointer' }}>
                <img alt="Senthus" src={LogoBrusselsSmartCity} />
              </a>
              <div className="modal-container">
                <div className="modal-content">
                  <div className="boxed boxed--border">
                    <h2>Senthus</h2>
                    <p />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-2 modal-instance zooming-logo">
              <a className="modal-trigger" style={{ cursor: 'pointer' }}>
                <img alt="Yuktix" src={LogoYuktix} />
              </a>
              <div className="modal-container">
                <div className="modal-content">
                  <div className="boxed boxed--border">
                    <h2>Yuktix</h2>
                    <p>
                      <FormattedMessage id="alliance_yuktix" />
                      <br />
                      <br />
                      <span style={{ fontStyle: 'italic' }}>
                        <FormattedMessage id="alliance_quote" />
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-2 zooming-logo">
              <img src={LogoDesideDatum} alt="desideDatum" />
            </div>
            <div className="col-sm-2 zooming-logo">
              <img src={LogoIquadrat} alt="Iquadrat" />
            </div>
            <div className="col-sm-2 zooming-logo">
              <img src={LogoSkylark} alt="Skylark" />
            </div>
            <div className="col-sm-1" />
          </div>
          <div className="row align-center">
            <div className="col-sm-2" />
            <div className="col-sm-2" />
            <div className="col-sm-2 zooming-logo">
              <img src={LogoTechnilog} alt="Technilog" />
            </div>
            <div className="col-sm-2 zooming-logo">
              <img src={LogoIdentitymindglobal} alt="IdentityMind Global" />
            </div>
          </div>
          <div className="row align-center" style={{ marginTop: '50px' }}>
            <a
              id="join-alliance-btn"
              className="btn btn-lg btn--secondary "
              href="mailto:hello@databrokerdao.com"
              style={{ display: 'block', margin: '0 auto' }}
            >
              <FormattedMessage
                id="alliance_join"
                className="btn__text type--uppercase"
              />
            </a>
          </div>
        </div>
      </section>
    )
  }
}

export default AllianceSection
