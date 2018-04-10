import React, { PureComponent } from 'react'
import { FormattedMessage } from 'react-intl'
// import LogoBrusselsSmartCity from '../../assets/alliance/Logo_BrusselsSmartCity.png'
import LogoYuktix from '../../assets/alliance/logo_Yuktix.png'
import LogoSigfox from '../../assets/alliance/logo_sigfox.png'
import LogoDesideDatum from '../../assets/alliance/logo_desideDatum.png'
import LogoIquadrat from '../../assets/alliance/logo_iquadrat.png'
import LogoSkylark from '../../assets/alliance/logo_Skylark.png'
import LogoTechnilog from '../../assets/alliance/Logo_Technilog.png'
import LogoIdentitymindglobal from '../../assets/alliance/logo_identitymindglobal.png'
import LogoPanasonic from '../../assets/alliance/logo_panasonic.png'
import LogoSket from '../../assets/alliance/logo_sket.png'
import LogoApinf from '../../assets/alliance/logo_apinf.png'
import LogoEsoptra from '../../assets/alliance/logo_esoptra.png'
import LogoDigitaltown from '../../assets/alliance/logo_digitaltown.png'
import LogoDspvalley from '../../assets/alliance/logo_dspvalley.png'
import LogoIkusi from '../../assets/alliance/logo_ikusi.png'
import LogoThingsplay from '../../assets/alliance/logo_thingsplay.png'
import LogoBreezometer from '../../assets/alliance/logo_breezometer.png'
import LogoArinti from '../../assets/alliance/logo_arinti.png'
// import LogoAioti from '../../assets/alliance/logo_aioti.png'
import LogoAllthingstalk from '../../assets/alliance/logo_allthingstalk.png'
import LogoCityseeders from '../../assets/alliance/logo_cityseeders.png'
import LogoIntellegant from '../../assets/alliance/logo_intellegant.png'
import LogoActility from '../../assets/alliance/logo_actility.png'
import LogoLumo from '../../assets/alliance/logo_lumo.png'
import LogoOption from '../../assets/alliance/logo_option.png'
import LogoTurck from '../../assets/alliance/logo_turck.png'
import LogoVerses from '../../assets/alliance/logo_verses.png'
import LogoXterconnect from '../../assets/alliance/logo_xterconnect.png'

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
            {/*<div className="col-sm-2 modal-instance zooming-logo">
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
    </div>*/}
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
              <img src={LogoEsoptra} alt="Esoptra" />
            </div>
            <div className="col-sm-2 zooming-logo">
              <img src={LogoDigitaltown} alt="Digital Town" />
            </div>
            <div className="col-sm-2 zooming-logo">
              <img src={LogoThingsplay} alt="Thingplay" />
            </div>
            <div className="col-sm-2 zooming-logo">
              <img src={LogoDspvalley} alt="DSP Valley" />
            </div>
            <div className="col-sm-1" />
          </div>
          <div className="row align-center">
            <div className="col-sm-1" />
            <div className="col-sm-2 zooming-logo">
              <img src={LogoTechnilog} alt="Technilog" />
            </div>
            <div className="col-sm-2 zooming-logo">
              <img src={LogoIdentitymindglobal} alt="IdentityMind Global" />
            </div>
            <div className="col-sm-2 zooming-logo">
              <img src={LogoPanasonic} alt="Panasonic" />
            </div>
            <div className="col-sm-2 zooming-logo">
              <img src={LogoIkusi} alt="Ikusi" />
            </div>
            <div className="col-sm-2 zooming-logo">
              <img src={LogoApinf} alt="APINF" />
            </div>
            <div className="col-sm-1" />
          </div>
          <div className="row align-center">
            <div className="col-sm-1" />
            <div className="col-sm-2 zooming-logo">
              <img src={LogoDesideDatum} alt="desideDatum" />
            </div>
            <div className="col-sm-2 zooming-logo">
              <img src={LogoIquadrat} alt="Iquadrat" />
            </div>
            <div className="col-sm-2 zooming-logo">
              <img src={LogoSigfox} alt="Sigfox" />
            </div>
            <div className="col-sm-2 zooming-logo">
              <img src={LogoSket} alt="Sket" />
            </div>
            <div className="col-sm-2 zooming-logo">
              <img src={LogoSkylark} alt="Skylark" />
            </div>
            <div className="col-sm-1" />
          </div>
          <div className="row align-center">
            <div className="col-sm-1" />
            <div className="col-sm-2 zooming-logo">
              <img src={LogoBreezometer} alt="Breezometer" />
            </div>
            <div className="col-sm-2 zooming-logo">
              <img src={LogoArinti} alt="Arinti" />
            </div>
            <div className="col-sm-2 zooming-logo">
              <img src={LogoIntellegant} alt="Intellegant" />
            </div>
            <div className="col-sm-2 zooming-logo">
              <img src={LogoAllthingstalk} alt="All Things Talk" />
            </div>
            <div className="col-sm-2 zooming-logo">
              <img src={LogoCityseeders} alt="City Seeders" />
            </div>
            <div className="col-sm-1" />
          </div>
          <div className="row align-center">
            <div className="col-sm-1" />
            <div className="col-sm-2 zooming-logo">
              <img src={LogoActility} alt="Actility" />
            </div>

            <div className="col-sm-2 zooming-logo">
              <img src={LogoTurck} alt="Turck" />
            </div>
            <div className="col-sm-2 zooming-logo">
              <img src={LogoVerses} alt="Verses" />
            </div>
            <div className="col-sm-2 zooming-logo">
              <img src={LogoOption} alt="Option" />
            </div>
            <div className="col-sm-2 zooming-logo">
              <img src={LogoXterconnect} alt="XterConnect" />
            </div>
          </div>
          <div className="row align-center">
            <div className="col-sm-2 zooming-logo">
              <img src={LogoLumo} alt="Lumo" />
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
