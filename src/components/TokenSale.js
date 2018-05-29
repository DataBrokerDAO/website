import React, { Component } from 'react'
import LazyLoad from 'react-lazyload'
import { setTimeout } from 'timers'
import RingLoader from 'react-spinners/dist/spinners/RingLoader'
import { IntlProvider, addLocaleData, FormattedMessage } from 'react-intl'
import loadScript from 'load-script'

import { getWeb3 } from '../utils/getWeb3'
import vendor from '../vendor'
import ProgressBar from './ProgressBar'

import RegisterForm from './LazyRegisterForm'
import WorldSVG from '../assets/world.svg'
import WidgetSVG from '../assets/3028.widget.svg'
import TelegramLogo from '../assets/telegram.png'
import VideoSection from './sections/video'
import MidSection from './MidSection'
import BottomSection from './BottomSection'
import { getIntl } from './intl'
import enTranslations from '../i18n/en.json'

const languages = {
  en: 'English',
  ar: 'عربى',
  tr: 'Türk',
  es: 'Español',
  ru: 'русский',
  pt: 'Português',
  ko: '한국어',
  ja: '日本語',
  it: 'italiano',
  de: 'Deutsche',
  fr: 'français',
  zh: '中文',
}

class TokenSale extends Component {
  constructor(props) {
    super(props)
    this.language = 'en' // default
    this.enTranslations = enTranslations
    this.state = {
      web3: null,
    }
  }

  componentWillMount() {
    this.setMessages(this.language)
  }

  componentDidMount() {
    if (process.env.REACT_APP_SALE_ACTIVE === 'true') {
      getWeb3()
        .then(results => {
          this.setState({
            ...results,
          })
          this.instantiateContract()
            .then(() => {
              this.polling = true
              this.longPoller()
              return true
            })
            .catch(error => {
              console.log('longPoller error', error)
            })
          return true
        })
        .catch(e => {
          console.log('Error finding web3.', e)
        })
    }

    if (!localStorage.getItem('dbdaolang')) {
      const language =
        (navigator.languages && navigator.languages[0]) ||
        navigator.language ||
        navigator.userLanguage
      let languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0]
      localStorage.setItem('dbdaolang', languageWithoutRegionCode)
    }
    const language = localStorage.getItem('dbdaolang')
    if (Object.keys(languages).includes(language)) {
      this.language = language
    }

    this.setMessages(this.language)
  }

  loadFromCdnOnce() {
    if (this.cdnLoadinitiated) return
    this.cdnLoadinitiated = true
    this.jqueryPromise = new Promise((resolve, reject) => {
      loadScript(process.env.REACT_APP_JQUERY_CDN, (err) => {
        if (err) reject(err)

        resolve(window.$)
      })
    })
  }

  refershExternalScripts() {
    this.loadFromCdnOnce()

    this.jqueryPromise.then((jquery) => {
      vendor.load()
        .then(() => {
          setTimeout(() => {
            mr.documentReady(jquery) //eslint-disable-line
          }, 250)
        })
    })
  }

  componentWillUpdate() {
    this.refershExternalScripts()
  }

  componentDidUpdate() {
    this.refershExternalScripts()
  }

  async getTranslations() {
    if (this.translationsReady) return

    const translations = await getIntl()
    Object.assign(this, translations)
    const { en, ar, tr, es, ru, pt, ko, ja, it, de, fr, zh } = translations
    addLocaleData([
      ...en,
      ...ar,
      ...tr,
      ...es,
      ...ru,
      ...pt,
      ...ko,
      ...ja,
      ...it,
      ...de,
      ...fr,
      ...zh,
    ])

    this.translationsReady = true
  }

  async setMessages(language = 'en') {
    let messages

    if (language !== 'en') {
      const translations = await this.getTranslations()
      Object.assign(this, translations)
    }

    messages = this[`${language}Translations`]

    this.setState({ language, messages })
  }

  toggleChangeLanguage(newlang) {
    this.setMessages(newlang)
    localStorage.setItem('dbdaolang', newlang)
  }

  longPoller() {
    setTimeout(() => {
      this.instantiateContract(true).then(() => {
        if (this.polling) {
          this.longPoller()
        }
      })
    }, 10000)
  }

  componentWillUnmount() {
    this.polling = false
  }

  async instantiateContract(update = false) {
    try {
      const momentPromise = import('moment')
      const { sale } = this.state
      const DeployedSale = await sale.deployed()

      const totalIssued = await DeployedSale.totalIssued()
      const totalIssuedEarlySale = await DeployedSale.totalIssuedEarlySale()
      let ethprice
      try {
        const response = await fetch(
          'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD',
        )
        const json = await response.json()
        ethprice = json.USD
      } catch (error) {
        console.log(error)
        ethprice = 700
      }

      let total = totalIssued.plus(totalIssuedEarlySale).div(10 ** 18)
      let totalUSD = totalIssued
        .div(4000)
        .plus(totalIssuedEarlySale.div(6000))
        .times(ethprice)
        .div(10 ** 18)
      if (total.gte(108000000)) {
        total = totalIssued.div(10 ** 18)
        totalUSD = totalIssued
          .div(6000)
          .times(ethprice)
          .div(10 ** 18)
      }

      const totalPhase2 = total.mul(2)

      // OLD percentage: the percentage of tokens sold
      // const percentage = total.div(108000000).times(100)
      const moment = await momentPromise
      const endTime = moment('2018-06-30')
      const startTime = moment('2018-04-26')
      const totalTime = endTime.diff(startTime, 'days')
      const timeLeft = endTime.diff(moment(), 'days')
      const percentage = (1 - timeLeft / totalTime) * 100

      const newState = {
        total: totalPhase2.toFormat(0),
        usd: totalUSD.toFormat(0),
        percentage,
        timeLeft,
        // timeLeft: moment().diff(moment('2018-03-27 15:59:59+01:00'), 'days'),
      }
      this.setState(newState)
    } catch (error) {
      console.log(error)
    }
  }

  enableRegisteration() {
    this.setState(() => ({
      registrationEnabled: true,
    }))
  }

saleUpcoming = doneLoading => {
  const { percentage, timeLeft } = this.state
  return (
    <div>
      <h2
        className="sale-date type--uppercase"
        style={{ fontWeight: 'bold' }}
      >
        DTX PUBLIC SALE LIVE NOW!
      </h2>
      <div style={{
        minHeight: '200px',
      }}
      >
        {
          !doneLoading && (<div style={{
            margin: 'auto',
            height: '100px',
            width: '100px',
            padding: '50px 0',
          }}>
            <RingLoader
              color={'#E53368'}
              loading={!doneLoading}
              size={100}
            />
          </div>)
        }

        {doneLoading && (
          <ProgressBar
            percentage={percentage}
            label={`${timeLeft} DAY${timeLeft > 1 ? 'S' : ''} LEFT`}
          />
        )}
      </div>
      <div style={{minHeight: '78px'}}>
        {doneLoading && this.numberTable()}
      </div>
      <div className="modal-instance">
        <a
          name="preregister_button"
          onMouseEnter={this.enableRegisteration.bind(this)}
          onClick={this.enableRegisteration.bind(this)}
          id="preregister_button"
          className="btn btn-lg type--uppercase btn--primary modal-trigger"
          style={{
            fontSize: '18pt',
            fontWeight: 'bold',
            color: '#77A356',
            marginBottom: '15px',
          }}
        >
          <span>BUY DTX RIGHT NOW!</span>
        </a>

        <div style={{ marginTop: '15px' }}>
          <a
            name="databrokerdao"
            href="https://t.me/databrokerdao"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: 'none',
              fontWeight: 'bold',
              color: '#0088cc',
              fontSize: '1.2em',
            }}
          >
            <img style={{
              height: '35px',
              width: '35px',
              position: 'relative',
              top: '-2px'
            }} src={TelegramLogo} alt="TelegramLogo"/>
            Join us on Telegram
          </a>
        </div>
        <div className="modal-container">
          <div className="modal-content">
            <div className="boxed boxed--lg">
              { this.state.registrationEnabled && <RegisterForm upcoming={true} language={this.state.language}/> }
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: '15px' }}>
        <a
          name="participate"
          href="/how-to-participate.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-info-circle" aria-hidden="true" /> How to buy
          the DTX token
        </a>
      </div>
    </div>
  )
}

numberTable = () => {
  const { total, usd } = this.state

  return (
    <div>
      <div className="col-sm-6 padding-0">
        <table>
          <tbody>
          <tr>
            <td style={{ textAlign: 'left' }}>Tokens sold:</td>
            <td style={{ textAlign: 'right' }} className="type--bold">
              {total}
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <div className="col-sm-6 padding-only-left">
        <table>
          <tbody>
          <tr>
            <td style={{ textAlign: 'left' }}>USD:</td>
            <td style={{ textAlign: 'right' }} className="type--bold">
              ${usd}
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

render() {
  const { percentage } = this.state
  const { language, messages } = this.state

  const doneLoading = percentage >= 0

  return (
    <IntlProvider key={language} locale={language} messages={messages}>
      <div style={{ position: 'relative' }}>
        <div
          style={{
            position: 'absolute',
            display: 'block',
            width: '100%',
            height: '100%', // don't ask
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            background:
              'linear-gradient(to right, #EB274C, #7E347E, #2E3192)',
            zIndex: '-1',
          }}
          // id="canvas-basic"
        />
        <div className="nav-container">
          <div className="bar bar--md visible-xs">
            <div className="container">
              <div className="row">
                <div className="col-xs-8 col-sm-2">
                  <a  name="logo" href="/">
                    <img
                      className="logo logo-dark"
                      alt="logo"
                      src="./img/gradient-logo.svg"
                    />
                    <img
                      className="logo logo-light"
                      alt="logo"
                      src="./img/white-logo.svg"
                    />
                  </a>
                </div>
                <div className="col-xs-4 col-sm-10 text-right">
                  <a
                    name="hamburger"
                    href="#"
                    className="hamburger-toggle"
                    data-toggle-class="#menu1;hidden-xs"
                  >
                    <i className="icon icon--sm stack-interface stack-menu" title="hamburger" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <nav
            id="menu1"
            className="bar bar--md bar-1 bar--absolute bar--transparent pos-vertical-align-columns hidden-xs"
          >
            <div className="container">
              <div className="row">
                <div className="col-md-3 col-sm-4 hidden-xs">
                  <div className="bar__module">
                    <a  name="logo-dark" href="/">
                      <img
                        className="logo logo-dark"
                        alt="logo"
                        src="./img/gradient-logo.svg"
                      />
                      <img
                        className="logo logo-light"
                        alt="logo"
                        src="./img/white-logo.svg"
                      />
                    </a>
                  </div>
                </div>
                <div
                  className="col-md-9 col-sm-8 text-right text-left-xs text-left-sm"
                  style={{ marginTop: '10px' }}
                >
                  <div className="bar__module col-sm-7">
                    <ul className="menu-horizontal text-left">
                      <li>
                        <a
                          name="WHITEPAPER_DataBrokerDAO"
                          href={`/whitepaper/WHITEPAPER_DataBrokerDAO_${language}.pdf`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FormattedMessage id="navigation_whitepaper" />
                        </a>
                      </li>
                      <li>
                        <a name="alliance" href="#alliance">
                          <FormattedMessage id="navigation_alliance" />
                        </a>
                      </li>
                      <li>
                        <a name="team" href="#team">
                          <FormattedMessage id="navigation_team" />
                        </a>
                      </li>
                      <li>
                        <a
                          name="medium"
                          href="https://medium.com/DataBrokerDAO"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FormattedMessage id="navigation_updates" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="bar__module col-sm-2"
                    style={{ marginLeft: '5px' }}
                  >
                    <div className="dropdown">
                        <span className="dropdown__trigger type--uppercase">
                          {languages[language]}{' '}
                          <i className="fa fa-angle-down" />
                        </span>
                      <div className="dropdown__container text-left">
                        <div className="container">
                          <div className="row">
                            <div className="col-sm-2 col-md-2 dropdown__content">
                              <ul className="menu-vertical">
                                <li
                                  onClick={() =>
                                    this.toggleChangeLanguage('en')
                                  }
                                >
                                  English
                                </li>
                                <li
                                  onClick={() =>
                                    this.toggleChangeLanguage('ar')
                                  }
                                >
                                  عربى
                                </li>
                                <li
                                  onClick={() =>
                                    this.toggleChangeLanguage('tr')
                                  }
                                >
                                  Türk
                                </li>
                                <li
                                  onClick={() =>
                                    this.toggleChangeLanguage('es')
                                  }
                                >
                                  Español
                                </li>
                                <li
                                  onClick={() =>
                                    this.toggleChangeLanguage('ru')
                                  }
                                >
                                  русский
                                </li>
                                <li
                                  onClick={() =>
                                    this.toggleChangeLanguage('pt')
                                  }
                                >
                                  Português
                                </li>
                                <li
                                  onClick={() =>
                                    this.toggleChangeLanguage('ko')
                                  }
                                >
                                  한국어
                                </li>
                                <li
                                  onClick={() =>
                                    this.toggleChangeLanguage('ja')
                                  }
                                >
                                  日本語
                                </li>
                                <li
                                  onClick={() =>
                                    this.toggleChangeLanguage('it')
                                  }
                                >
                                  italiano
                                </li>
                                <li
                                  onClick={() =>
                                    this.toggleChangeLanguage('de')
                                  }
                                >
                                  Deutsche
                                </li>
                                <li
                                  onClick={() =>
                                    this.toggleChangeLanguage('fr')
                                  }
                                >
                                  français
                                </li>
                                <li
                                  onClick={() =>
                                    this.toggleChangeLanguage('zh')
                                  }
                                >
                                  中文
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="bar__module col-sm-2"
                    style={{ marginLeft: '5px' }}
                  >
                    <a
                      name="dapp"
                      className="btn btn--sm btn--secondary type--uppercase"
                      href="https://dapp.databrokerdao.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                        <span className="btn__text" style={{ color: '#333' }}>
                          <FormattedMessage id="navigation_beta" />
                        </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className="main-container">
          <section
            className="cover imagebg"
            data-gradient-bg="#EB274C,#7E347E,#2E3192"
          >
            <div className="background-image-holder low-opacity">
              <img alt="background" src={WorldSVG} />
            </div>
            <div className="container" style={{ marginTop: '20px' }}>
              <div className="row">
                <div className="col-md-5 col-sm-5 col-xs-12">
                  <div className="header-intro">
                    <h1 style={{ lineHeight: '40pt' }}>
                      <FormattedMessage
                        id="splash_globalmarket"
                        defaultMessage=" "
                      />
                      <br />{' '}
                      <FormattedMessage
                        id="splash_forlocaldata"
                        defaultMessage=" "
                      />
                    </h1>
                    <p
                      style={{
                        fontSize: '13pt',
                        lineHeight: '22pt',
                        marginTop: '10px',
                      }}
                    >
                      <b style={{ fontWeight: 'bold' }}>
                        <FormattedMessage
                          id="splash_boldintro"
                          defaultMessage=" "
                        />
                      </b>{' '}
                      <FormattedMessage
                        id="splash_intro"
                        defaultMessage=" "
                      />
                    </p>

                    <div
                      className="col-md-12"
                      style={{
                        marginBottom: '10px',
                        paddingRight: '5px',
                        paddingLeft: '5px',
                      }}
                    >
                      <a
                        name="WHITEPAPER_DataBrokerDAO"
                        href={`/whitepaper/WHITEPAPER_DataBrokerDAO_${language}.pdf`}
                        className="btn btn-lg btn--secondary force-black"
                        target="_blank"
                        style={{
                          width: '100%',
                          color: 'black',
                          fontWeight: 'bold',
                        }}
                      >
                        <FormattedMessage
                          id="splash_readwhitepaper"
                          style={{
                            color: 'black',
                            fontWeight: 'bold',
                          }}
                        />
                      </a>
                    </div>
                    <div
                      className="col-md-12"
                      style={{
                        marginBottom: '10px',
                        paddingRight: '5px',
                        paddingLeft: '5px',
                      }}
                    >
                      <a
                        name="whitepaper"
                        href={`/whitepaper/ONEPAGER_DataBrokerDAO_${language}.pdf`}
                        className="btn btn-lg btn--secondary force-black"
                        target="_blank"
                        style={{
                          width: '100%',
                          color: 'black',
                          fontWeight: 'bold',
                        }}
                      >
                        <FormattedMessage
                          id="splash_readonepaper"
                          style={{
                            color: 'black',
                            fontWeight: 'bold',
                          }}
                        />
                      </a>
                    </div>
                    <div
                      className="col-xs-3"
                      style={{
                        marginBottom: '10px',
                        paddingRight: '5px',
                        paddingLeft: '5px',
                        textAlign: 'center',
                      }}
                    >
                      <a
                        name="trackico"
                        href="https://www.trackico.io/ico/databrokerdao/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="DatabrokerDAO on TrackICO"
                      >
                        <img
                          border="0"
                          src="https://www.trackico.io/widget/square/databrokerdao/90.png"
                          alt="DatabrokerDAO TrackICO rating"
                          style={{
                            borderRadius: '5px',
                            width: '100%',
                            maxWidth: '100px',
                          }}
                        />
                      </a>
                    </div>
                    <div
                      className="col-xs-3"
                      style={{
                        marginBottom: '10px',
                        paddingRight: '5px',
                        paddingLeft: '5px',
                        textAlign: 'center',
                      }}
                    >
                      <a
                        name="databroker12"
                        href="https://icobench.com/ico/databrokerdao"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="DatabrokerDAO on ICObench"
                      >
                        <img
                          border="0"
                          src="https://icobench.com/rated/databrokerdao?shape=square&size=s"
                          alt="DatabrokerDAO ICO rating"
                          style={{
                            borderRadius: '5px',
                            width: '100%',
                            maxWidth: '100px',
                          }}
                        />
                      </a>
                    </div>
                    <div
                      className="col-xs-3"
                      style={{
                        marginBottom: '10px',
                        paddingRight: '5px',
                        paddingLeft: '5px',
                        textAlign: 'center',
                      }}
                    >
                      <a
                        name="DAO"
                        href="https://icomarks.com/ico/databrokerdao"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="DatabrokerDAO"
                      >
                        <img
                          border="0"
                          src="https://icomarks.com/widget/d/databrokerdao/square.svg"
                          alt="DatabrokerDAO ICO rating"
                          style={{
                            borderRadius: '5px',
                            width: '100%',
                            maxWidth: '100px',
                          }}
                        />
                      </a>
                    </div>
                    <div
                      className="col-xs-3"
                      style={{
                        marginBottom: '10px',
                        paddingRight: '5px',
                        paddingLeft: '5px',
                        textAlign: 'center',
                      }}
                    >
                      <a
                        name="DAO3028"
                        href="https://icoholder.com/en/databrokerdao-3028"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="DatabrokerDAO"
                      >
                        <img
                          border="0"
                          src={WidgetSVG}
                          alt="DatabrokerDAO ICO rating"
                          style={{
                            borderRadius: '5px',
                            width: '100%',
                            maxWidth: '100px',
                          }}
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-7 col-xs-12 text-center col-md-offset-1">
                  <div
                    className="boxed boxed--lg border--round box-shadow-wide bg--white token-sale"
                    style={{ marginTop: 0 }}
                  >
                    {this.saleUpcoming(doneLoading)}
                  </div>
                </div>
              </div>
            </div>
            <div className="container pos-absolute pos-bottom">
              <div className="row">
                <div className="col-sm-12 text-center">
                  <div className="channels">
                      <span>
                        <a
                          name="telegram"
                          style={{ textDecoration: 'none' }}
                          href="https://t.me/databrokerdao"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa fa-telegram fa-2x" title="telegram" />
                        </a>
                      </span>
                    <span>
                        <a
                          name="facebook"
                          style={{ textDecoration: 'none' }}
                          href="https://www.facebook.com/DataBrokerDAO/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa fa-facebook fa-2x" title="facebook"/>
                        </a>
                      </span>
                    <span>
                        <a
                          name="twitter"
                          style={{ textDecoration: 'none' }}
                          href="https://twitter.com/DataBrokerDAO"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa fa-twitter fa-2x" title="twitter"/>
                        </a>
                      </span>
                    <span>
                        <a
                          name="medium"
                          style={{ textDecoration: 'none' }}
                          href="https://medium.com/DataBrokerDAO"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa fa-medium fa-2x" title="meduim"/>
                        </a>
                      </span>
                    <span>
                        <a
                          name="youtube"
                          href="https://www.youtube.com/channel/UCUmxSlaliIuF0Z3yNw8y_uA"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa fa-youtube fa-2x" title="youtube"/>
                        </a>
                      </span>
                    <span>
                        <a
                          name="btc"
                          style={{ textDecoration: 'none' }}
                          href="https://bitcointalk.org/index.php?topic=2113309.0"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa fa-btc fa-2x" title="btc" title="btc"/>
                        </a>
                      </span>
                    <span>
                        <a
                          name="github"
                          style={{ textDecoration: 'none' }}
                          href="https://github.com/DataBrokerDAO"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa fa-github fa-2x" title="github"/>
                        </a>
                      </span>
                    <span>
                        <a
                          name="reddit"
                          style={{ textDecoration: 'none' }}
                          href="https://www.reddit.com/r/DatabrokerDAO/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa fa-reddit fa-2x" title="reddit"/>
                        </a>
                      </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <VideoSection/>
          <LazyLoad height={300} offset={200} once>
            <MidSection/>
          </LazyLoad>
          <LazyLoad height={300} offset={300} once>
            <BottomSection/>
          </LazyLoad>
        </div>
      </div>
    </IntlProvider>
  )
}
}

export default TokenSale
