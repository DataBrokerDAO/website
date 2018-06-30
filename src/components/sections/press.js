import React, { PureComponent } from 'react'
import { FormattedMessage } from 'react-intl'

class PressSection extends PureComponent {
  render() {
    return (
      <section id="news" className="bg--secondary text-center">
        <div className="container">
          <div className="row">
            <div className="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
              <h2 style={{ marginBottom: '5px' }}>
                <FormattedMessage id="press_title" />
              </h2>
              <p
                className="type--uppercase type--bold"
                style={{ marginBottom: '20px' }}
              >
                <FormattedMessage id="press_subtitle" />
              </p>
              <p>
                <FormattedMessage id="press_text" />
              </p>
            </div>
          </div>
          <div className="row align-center" style={{ marginTop: '50px' }}>
            {/*<div className="col-sm-2 zooming-logo">
              <a
                style={{ cursor: 'pointer' }}
                target="_blank"
                rel="noopener noreferrer"
                href="http://www.the-blockchain.com/2017/09/08/databroker-dao-decentralized-marketplace-iot-sensor-data-announces-beta-upcoming-token-sale/"
              >
                <img
                  alt="Blockchain News"
                  src="./img/Logos media/logo-BlockchainNews.png"
                />
              </a>
            </div> */}
            <div className="col-sm-2 zooming-logo">
              <a
                style={{ cursor: 'pointer' }}
                target="_blank"
                rel="noopener noreferrer"
                href="http://www.standaard.be/cnt/dmf20170914_03072983"
              >
                <img
                  alt="De Standaard"
                  src="./img/Logos media/Logo_de-standaard.png"
                />
              </a>
            </div>
            <div className="col-sm-2 zooming-logo">
              <a
                style={{ cursor: 'pointer' }}
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.demorgen.be/economie/geld-ophalen-was-nog-nooit-zo-makkelijk-maar-is-het-ook-veilig-b4b9bc32/"
              >
                <img
                  alt="De Morgen"
                  src="./img/Logos media/logo_demorgen.png"
                />
              </a>
            </div>
            <div className="col-sm-2 zooming-logo">
              <a
                style={{ cursor: 'pointer' }}
                target="_blank"
                rel="noopener noreferrer"
                href="https://cdn2.hubspot.net/hubfs/459645/IDM-DatabrokerDAO-CaseStudy.pdf?t=1505774771437
            "
              >
                <img
                  alt="IdentityMind Global"
                  src="./img/Logos media/logo_identitymindglobal.png"
                />
              </a>
            </div>
            <div className="col-sm-2 zooming-logo">
              <a
                style={{ cursor: 'pointer' }}
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.gitexfuturestars.com/exhibitor-press-releases/settlemint-announces-the-token-sale-for-databroker-dao"
              >
                <img
                  alt="Gitex"
                  src="./img/Logos media/Logo_GITEX-FUTURE-STARS_FINAL-OUTLINE-02.crop.resize-261x180.png"
                />
              </a>
            </div>
            <div className="col-sm-2 zooming-logo">
              <a
                style={{ cursor: 'pointer' }}
                target="_blank"
                rel="noopener noreferrer"
                href="https://medium.com/databrokerdao/is-databroker-dao-taking-on-iota-342dc1481812"
              >
                <img alt="Medium" src="./img/Logos media/logo_Medium.png" />
              </a>
            </div>
            <div className="col-sm-2 zooming-logo">
              <a
                style={{ cursor: 'pointer' }}
                href="https://www.marketwatch.com/story/medici-ventures-portfolio-company-settlemint-announces-token-sale-for-databroker-dao-beginning-september-18-2017-2017-08-31?utm_content=buffer6ac38&amp;utm_medium=social&amp;utm_source=twitter.com&amp;utm_campaign=buffer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt="Marketwatch"
                  src="./img/Logos media/marketwatch_logo.png"
                />
              </a>
            </div>
          </div>
          <div className="row align-center">
            <div className="col-sm-2 zooming-logo">
              <a
                style={{ cursor: 'pointer' }}
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.prnewswire.com/news-releases/databroker-dao-decentralized-iot-data-marketplace-opens-token-sale-on-september-18-2017-300522572.html"
              >
                <img
                  alt="PR Newswire"
                  src="./img/Logos media/logo_CISION_PR_Newswire.png"
                />
              </a>
            </div>

            <div className="col-sm-2 zooming-logo">
              <a
                style={{ cursor: 'pointer' }}
                target="_blank"
                rel="noopener noreferrer"
                href="http://www.newsbtc.com/2017/09/25/databroker-dao-launches-token-sale/"
              >
                <img alt="NewsBTC" src="./img/Logos media/logo_newsBTC.png" />
              </a>
            </div>
            <div className="col-sm-2 zooming-logo">
              <a
                style={{ cursor: 'pointer' }}
                target="_blank"
                rel="noopener noreferrer"
                href="http://www.the-blockchain.com/2017/10/14/announcing-first-members-databrokerdao-alliance/"
              >
                <img
                  alt="Blockchain News"
                  src="./img/Logos media/logo-BlockchainNews.png"
                />
              </a>
            </div>

            <div className="col-sm-2 zooming-logo">
              <a
                style={{ cursor: 'pointer' }}
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.verifiedicos.com/ico/databroker-dao"
              >
                <img
                  alt="Verified ICOs"
                  src="./img/Logos media/logo_Verified_ICOs.png"
                />
              </a>
            </div>
            <div className="col-sm-2 zooming-logo">
              <a
                style={{ cursor: 'pointer' }}
                target="_blank"
                rel="noopener noreferrer"
                href="http://www.mediciventures.com/news/2017/9/12/medici-ventures-portfolio-company-settlemint-announces-token-sale-for-databroker-dao-beginning-september-18-2017"
              >
                <img
                  alt="Medici Ventures"
                  src="./img/Logos media/logo_medici_ventures.png"
                />
              </a>
            </div>
            <div className="col-sm-2 zooming-logo">
              <a
                style={{ cursor: 'pointer' }}
                target="_blank"
                rel="noopener noreferrer"
                href="https://globenewswire.com/news-release/2017/08/31/1106159/0/en/Medici-Ventures-Portfolio-Company-SettleMint-Announces-Token-Sale-for-DataBroker-DAO-Beginning-September-18-2017.html"
              >
                <img
                  alt="Globe Newswire"
                  src="./img/Logos media/logo_globenewswire.png"
                />
              </a>
            </div>
          </div>

          <div className="row align-center">
            {/* <div className="col-sm-1" /> */}
            <div className="col-sm-2 zooming-logo">
              <a
                style={{ cursor: 'pointer' }}
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.gitexfuturestars.com/pitch-competition/databroker-dao-a-peer-to-peer-marketplace-for-iot-sensor-data"
              >
                <img
                  alt="Gitex"
                  src="./img/Logos media/Logo_GITEX-FUTURE-STARS_FINAL-OUTLINE-02.crop.resize-261x180.png"
                />
              </a>
            </div>
            <div className="col-sm-2 zooming-logo">
              <a
                style={{ cursor: 'pointer' }}
                target="_blank"
                rel="noopener noreferrer"
                href="https://coinspectator.com/news/63814/the-inner-workings-of-the-databroker-dao-data-token-and-early-token-sale-contract"
              >
                <img
                  alt="Coinspectator"
                  src="./img/Logos media/logo_coinspectator_orig.png"
                />
              </a>
            </div>

            <div className="col-sm-2 zooming-logo">
              <a
                style={{ cursor: 'pointer' }}
                target="_blank"
                rel="noopener noreferrer"
                href="https://smartbelgium.belfius.be/deelnemers/databroker-dao-is-eerste-marktplaats-iot-data/"
              >
                <img
                  alt="Smart Belgium"
                  src="./img/Logos media/logo_smartbelgium.png"
                />
              </a>
            </div>

            <div className="col-sm-2 zooming-logo">
              <a
                style={{ cursor: 'pointer' }}
                target="_blank"
                rel="noopener noreferrer"
                href="http://bitcoinnewsindo.com/databroker-dao-desentralisasi-pasar-data-iot-membuka-penjualan-token-pada-tanggal-18-september-2017/"
              >
                <img
                  alt="News Indo"
                  src="./img/Logos media/Bitcoin-News-Indo-Logo-negatief.png"
                />
              </a>
            </div>
            <div className="col-sm-2 zooming-logo">
              <a
                style={{ cursor: 'pointer' }}
                target="_blank"
                rel="noopener noreferrer"
                href="http://www.jinse.com/news/blockchain/116602.html"
              >
                <img alt="Jinse" src="./img/Logos media/logo-jinse.png" />
              </a>
            </div>

            <div className="col-sm-2 zooming-logo">
              <a
                style={{ cursor: 'pointer' }}
                target="_blank"
                rel="noopener noreferrer"
                href="https://hacked.com/ico-analysis-databroker-dao/
                "
              >
                <img alt="Hacked" src="./img/Logos media/logo-hacked.png" />
              </a>
            </div>
          </div>
          <div className="row align-center">
            <div className="col-sm-2 zooming-logo">
              <a
                style={{ cursor: 'pointer' }}
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.inc.com/darren-heitner/the-internet-of-things-doesnt-have-to-be-confusing-heres-how-your-business-can-get-in-on-600-billion-market.html"
              >
                <img alt="Inc." src="./img/Logos media/logo_inc.png" />
              </a>
            </div>
            <div className="col-sm-2 zooming-logo">
              <a
                style={{ cursor: 'pointer' }}
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.momenta.partners/edge/unlocking-the-value-of-sensor-data-through-the-marketplace-part-1"
              >
                <img
                  alt="Momenta"
                  src="./img/Logos media/logo-momenta_transp.png"
                />
              </a>
            </div>

            <div className="col-sm-2 zooming-logo">
              <a
                style={{ cursor: 'pointer' }}
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.reuters.com/brandfeatures/venture-capital/article?id=32112"
              >
                <img alt="reuters" src="./img/Logos media/Reuterslogo.png" />
              </a>
            </div>

            <div className="col-sm-2 zooming-logo">
              <a
                style={{ cursor: 'pointer' }}
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.tijd.be/dossier/blockchain/leuvenaars-halen-virtuele-miljoenen-op-voor-handel-in-sensordata/10012926.html"
              >
                <img alt="detijd" src="./img/Logos media/detijdlogo.png" />
              </a>
            </div>

            <div className="col-sm-2 zooming-logo">
              <a
                style={{ cursor: 'pointer' }}
                target="_blank"
                rel="noopener noreferrer"
                href="https://goo.gl/e1Bpa3"
              >
                <img
                  alt="criptonotcias"
                  src="./img/Logos media/criptonotciaslogo.png"
                />
              </a>
            </div>

            <div className="col-sm-2 zooming-logo">
              <a
                style={{ cursor: 'pointer' }}
                target="_blank"
                rel="noopener noreferrer"
                href="https://goo.gl/JFp1GW"
              >
                <img alt="ePRNews" src="./img/Logos media/logo-ePRNews.png" />
              </a>
            </div>
          </div>

          <div className="row align-center">
            <div className="col-sm-2 zooming-logo" />
            <div className="col-sm-2 zooming-logo">
              <a
                style={{ cursor: 'pointer' }}
                target="_blank"
                rel="noopener noreferrer"
                href="https://cryptoworldbynca.wordpress.com/2018/06/18/databroker-dao-distrupts-1-2-trillion-us-dollar-market/"
              >
                <img
                  alt="Iceoexpert"
                  src="./img/Logos media/icoexpertslogo.png"
                />
              </a>
            </div>

            <div className="col-sm-2 zooming-logo">
              <a
                style={{ cursor: 'pointer' }}
                target="_blank"
                rel="noopener noreferrer"
                href="https://bitcoinprbuzz.com/databroker-dao-announced-chinese/"
              >
                <img
                  alt="bitcoinprbuzz"
                  src="./img/Logos media/bitcoinprbuzzlogo.jpg"
                />
              </a>
            </div>

            <div className="col-sm-2 zooming-logo">
              <a
                style={{ cursor: 'pointer' }}
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.techbullion.com/interview-with-matthew-van-niekerk-founder-of-databroker-dao-on-databroker-dao-token-sale/"
              >
                <img
                  alt="techbullion"
                  src="./img/Logos media/TechBullionLogo-3.png"
                />
              </a>
            </div>

            <div className="col-sm-2 zooming-logo">
              <a
                style={{ cursor: 'pointer' }}
                target="_blank"
                rel="noopener noreferrer"
                href="https://eprnews.com/databroker-dao-announced-chinese-roadshow-dates-doubles-token-sale-rewards-until-june-30th-348157/"
              >
                <img alt="ePRNews" src="./img/Logos media/logo-ePRNews.png" />
              </a>
            </div>

            <div className="col-sm-2 zooming-logo" />
          </div>

          <div className="row align-center" style={{ marginTop: '50px' }}>
            <a
              id="press-inquiries-btn"
              className="btn btn-lg btn--secondary"
              href="mailto:hello@databrokerdao.com"
              style={{ display: 'block', margin: '0 auto' }}
            >
              <FormattedMessage
                id="press_inquiries"
                className="btn__text type--uppercase"
              />
            </a>
          </div>
        </div>
      </section>
    )
  }
}

export default PressSection
