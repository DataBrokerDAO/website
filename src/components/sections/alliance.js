import React, { PureComponent } from 'react';
import { FormattedMessage } from 'react-intl';

class AllianceSection extends PureComponent {
  render() {
    return (
      <section id="alliance" className="bg--secondary text-center">
        <div className="container">
          <div className="row">
            <div className="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
              <h2 style={{ marginBottom: '5px' }}>
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
                <img
                  alt="Senthus"
                  src="./img/logos alliance partners/Logo_BrusselsSmartCity.png"
                />
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
                <img
                  alt="Yuktix"
                  src="./img/logos alliance partners/logo_Yuktix.png"
                />
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
              <img src="./img/logos alliance partners/logo_desideDatum.png" />
            </div>
            <div className="col-sm-2 zooming-logo">
              <img src="./img/logos alliance partners/logo_iquadrat.png" />
            </div>
            <div className="col-sm-2 zooming-logo">
              <img src="./img/logos alliance partners/logo_Skylark.png" />
            </div>
            <div className="col-sm-1" />
          </div>
          <div className="row align-center">
            <div className="col-sm-2" />
            <div className="col-sm-2" />
            <div className="col-sm-2 zooming-logo">
              <img src="./img/logos alliance partners/Logo_Technilog.png" />
            </div>
            <div className="col-sm-2 zooming-logo">
              <img src="./img/Logos media/logo_identitymindglobal.png" />
            </div>
          </div>
          <div className="row align-center" style={{ marginTop: '50px' }}>
            <a
              className="btn btn-lg btn--secondary"
              href="mailto:hello@databrokerdao.com"
              style={{ display: 'block', margin: '0 auto' }}
            >
              <span className="btn__text type--uppercase">
                join the alliance
              </span>
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default AllianceSection;
