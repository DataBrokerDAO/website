import React, { PureComponent } from 'react';

class AllianceSection extends PureComponent {
  render() {
    return (
      <section id="alliance" className="bg--secondary text-center">
        <div className="container">
          <div className="row">
            <div className="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
              <h2 style={{ marginBottom: '5px' }}>
                The DataBroker DAO Alliance
              </h2>
              <p
                className="type--uppercase type--bold"
                style={{ marginBottom: '20px' }}
              >
                The list is growing
              </p>
              <p>
                Building a platform and business like DataBroker DAO requires
                real sellers and buyers of IoT sensor data. Over the past couple
                of months we have been hard at work integrating these parties
                into an alliance. A few months ago, we already announced the
                first two official members of this DataBroker DAO alliance,
                YUKTIX and SENTHUS. Today we are proud to announce DESIDEDATUM,
                IQUADRAT, SKYLARK and TECHNILOG have joined.
              </p>
              <p>
                <span style={{ fontStyle: 'italic' }}>
                  "We are happy to cross paths with SettleMint and to engage
                  with blockchain technology over DataBroker DAO. The
                  integration was smooth and successful due to technical
                  excellence. In a next step on our roadmap we intend to include
                  a DataBrokerDAO “sell my data” option into our portfolio, as
                  we realise this is a new monetisation opportunity for both
                  sensor owners, data consumers and vendors"
                </span>, said mr. Rajeev Jha - CEO of Yuktix
              </p>
            </div>
          </div>
          <div className="row align-center" style={{ marginTop: '50px' }}>
            <div className="col-sm-1" />
            <div className="col-sm-2 modal-instance zooming-logo">
              <a className="modal-trigger" style={{ cursor: 'pointer' }}>
                <img src="./img/logos alliance partners/Logo_BrusselsSmartCity.png" />
              </a>
              <div className="modal-container">
                <div className="modal-content">
                  <div className="boxed boxed--border">
                    <h2>Senthus</h2>
                    <p>
                      On the buyer side of things we find the SENTHUS consortium
                      from our homeland Belgium. The SENTHUS consortium is,
                      supported by the Brussels regions minister of economy,
                      working to make the capital city of Brussels (both of the
                      country and of the entire European Union) a smarter city.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-2 modal-instance zooming-logo">
              <a className="modal-trigger" style={{ cursor: 'pointer' }}>
                <img src="./img/logos alliance partners/logo_Yuktix.png" />
              </a>
              <div className="modal-container">
                <div className="modal-content">
                  <div className="boxed boxed--border">
                    <h2>Yuktix</h2>
                    <p>
                      YUKTIX is an IoT sensor manufacturer, based in Bangalore,
                      India. The company creates next generation information
                      systems for agriculture and environmental Monitoring.
                      YUKTIX solutions can be used by farmers, growers,
                      cooperatives and contractors or in Smart Cities to drive
                      best practices, conserve resources and improve operation
                      efficiency. YUKTIX provides a complete end-to- end
                      solution. Meaning, just turn “ON” the sensor nodes and
                      collect data on the YUKTIX SensorDB. Data distribution is
                      also made possible via webhooks and REST API’s.
                      <br />
                      <br /> Which is how they tie in to the DataBroker DAO
                      marketplace, offering their customers an easy path to
                      recoup some or even all of the costs of their purchases.
                      <br />
                      <br />
                      <span style={{ fontStyle: 'italic' }}>
                        "We are happy to cross paths with SettleMint and to
                        engage with blockchain technology over DataBroker DAO.
                        The integration was smooth and successful due to
                        technical excellence. In a next step on our roadmap we
                        intend to include a DataBrokerDAO “sell my data” option
                        into our portfolio, as we realise this is a new
                        monetisation opportunity for both sensor owners, data
                        consumers and vendors"
                      </span>, said mr. Rajeev Jha - CEO of Yuktix
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
