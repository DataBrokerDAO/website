import React, { Component } from 'react';
import { getWeb3 } from '../utils/getWeb3';
import moment from 'moment';
import ProgressBar from './ProgressBar';
// import PreRegisterForm from './PreRegisterForm';
import RegisterForm from './RegisterForm';
import WorldSVG from '../assets/world.svg';
import VideoSection from './sections/video';
import ChallengeSection from './sections/challenge';
import JobsSection from './sections/jobs';
import ChannelsSection from './sections/channels';
import Footer from './sections/footer';
import CTASection from './sections/cta';
import SolutionSection from './sections/solutions';
import TeamSection from './sections/team';
import PressSection from './sections/press';
import EventsSection from './sections/events';
import AllianceSection from './sections/alliance';
import BenefitsSection from './sections/benefits';
import BetaSection from './sections/beta';
import { IntlProvider, addLocaleData, FormattedMessage } from 'react-intl';
import en from 'react-intl/locale-data/en';
import ar from 'react-intl/locale-data/ar';
import tr from 'react-intl/locale-data/tr';
import es from 'react-intl/locale-data/es';
import ru from 'react-intl/locale-data/ru';
import pt from 'react-intl/locale-data/pt';
import ko from 'react-intl/locale-data/ko';
import ja from 'react-intl/locale-data/ja';
import it from 'react-intl/locale-data/it';
import de from 'react-intl/locale-data/de';
import fr from 'react-intl/locale-data/fr';
import zh from 'react-intl/locale-data/zh';
import enTranslations from '../i18n/en.json';
import arTranslations from '../i18n/ar.json';
import trTranslations from '../i18n/tr.json';
import esTranslations from '../i18n/es.json';
import ruTranslations from '../i18n/ru.json';
import ptTranslations from '../i18n/pt.json';
import koTranslations from '../i18n/ko.json';
import jaTranslations from '../i18n/ja.json';
import itTranslations from '../i18n/it.json';
import deTranslations from '../i18n/de.json';
import frTranslations from '../i18n/fr.json';
import zhTranslations from '../i18n/zh.json';
import { setTimeout } from 'timers';
import TokenSaleSection from '../components/sections/tokensale';
import RoadmapSection from '../components/sections/roadmap';

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
  zh: '中文'
};

class TokenSale extends Component {
  constructor(props) {
    super(props);
    this.state = {
      web3: null,
      sale: null,
      percentage: 0,
      tokens: 0,
      eth: 0,
      MAX_ETH: 9375,
      MAX_ETH_OVER: 28125,
      // MAX_ETH: 1,
      // MAX_ETH_OVER: 3,
      startFundingTime: moment.unix(1505746800),
      endFundingTime: moment.unix(1508166000)
    };
  }

  componentWillMount() {
    if (process.env.REACT_APP_SALE_ACTIVE === 'true') {
      getWeb3
        .then(results => {
          this.setState({
            ...results
          });
          this.instantiateContract()
            .then(() => {
              this.polling = true;
              this.longPoller();
            })
            .catch(error => {
              console.log('longPoller error', error);
            });
        })
        .catch(e => {
          console.log('Error finding web3.', e);
        });
    } else {
      this.setState({
        startFundingTime: moment.unix(1505746800),
        endFundingTime: moment.unix(1508166000),
        eth: 0,
        tokens: 0,
        percentage: 0
      });
    }
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
      ...zh
    ]);
    let language = 'en';
    if (!localStorage.getItem('dbdaolang')) {
      const language =
        (navigator.languages && navigator.languages[0]) ||
        navigator.language ||
        navigator.userLanguage;
      let languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];
      localStorage.setItem('dbdaolang', languageWithoutRegionCode);
    }
    language = localStorage.getItem('dbdaolang');
    if (!Object.keys(languages).includes(language)) {
      language = 'en';
    }
    this.setMessages(language);
  }

  componentDidMount() {
    setTimeout(() => {
      mr.documentReady(jQuery); //eslint-disable-line
    }, 250);

    // let colours = '#EB274C,#7E347E,#2E3192'
    // let pairs = []
    // let tempPair = []
    //
    // const passes = /^(#[0-9|a-f|A-F]{6}){1}([ ]*,[ ]*#[0-9|a-f|A-F]{6})*$/.test(colours);
    //
    // if (passes === true) {
    //   colours = colours.replace(' ', '');
    //   colours = colours.split(',');
    //   const count = colours.length;
    //   // If number of colours is odd - duplicate last colour to make even array
    //   if (count % 2 !== 0) {
    //     colours.push(colours[count - 1]);
    //   }
    //   for (let i = 0; i < count / 2; i++) {
    //     let tempPair = [];
    //     tempPair.push(colours.shift());
    //     tempPair.push(colours.shift());
    //     pairs.push(tempPair);
    //   }
    // }
    //
    // this.granimInstance = new Granim({
    //   element: '#canvas-basic',
    //   name: 'basic-gradient',
    //   direction: 'left-right', // 'diagonal', 'top-bottom', 'radial'
    //   opacity: [1, 1],
    //   isPausedWhenNotInView: true,
    //   states : {
    //     "default-state": {
    //       gradients: pairs
    //     }
    //   }
    // });
  }

  componentDidUpdate() {
    setTimeout(() => {
      mr.documentReady(jQuery); //eslint-disable-line
    }, 250);
  }

  setMessages(language) {
    let messages;
    switch (language) {
      case 'ar':
        messages = arTranslations;
        break;
      case 'tr':
        messages = trTranslations;
        break;
      case 'es':
        messages = esTranslations;
        break;
      case 'ru':
        messages = ruTranslations;
        break;
      case 'pt':
        messages = ptTranslations;
        break;
      case 'ko':
        messages = koTranslations;
        break;
      case 'ja':
        messages = jaTranslations;
        break;
      case 'it':
        messages = itTranslations;
        break;
      case 'de':
        messages = deTranslations;
        break;
      case 'fr':
        messages = frTranslations;
        break;
      case 'zh':
        messages = zhTranslations;
        break;
      default:
        messages = enTranslations;
        break;
    }
    this.setState({ language, messages });
  }

  toggleChangeLanguage(newlang) {
    this.setMessages(newlang);
    localStorage.setItem('dbdaolang', newlang);
    // mr.documentReady(jQuery); //eslint-disable-line
    // mr.windowLoad(jQuery); //eslint-disable-line
  }

  longPoller() {
    setTimeout(() => {
      this.instantiateContract(true).then(() => {
        if (this.polling) {
          this.longPoller();
        }
      });
    }, 10000);
  }

  componentWillUnmount() {
    this.polling = false;
  }

  async instantiateContract(update = false) {
    try {
      const { sale, MAX_ETH, MAX_ETH_OVER } = this.state;
      const DeployedSale = await sale.deployed();

      const totalCollected = await DeployedSale.totalCollected();
      const eth = totalCollected.toNumber() / 10 ** 18;
      let totalSupply = MAX_ETH;

      if (eth >= MAX_ETH) {
        totalSupply = MAX_ETH_OVER;
      }

      const newState = {
        eth,
        tokens: eth * 1200,
        percentage: eth / totalSupply * 100
      };
      // console.log(newState);
      this.setState(newState);
    } catch (error) {
      console.log(error);
    }
  }

  saleUpcoming = () => {
    return (
      <div>
        <h2
          className="sale-date type--uppercase"
          style={{ fontWeight: 'bold' }}
        >
          <FormattedMessage id="sale_title" />
        </h2>
        {/*<p className="sale-date unmarg--bottom">
          The date of the main token sale will be announced shortly.
        </p>
    <hr />*/}
        <hr style={{ border: 0 }} />
        {localStorage.getItem('ref') === 'moonsyndicate' && (
          <div style={{ marginBottom: '2em' }}>
            <span style={{ textTransform: 'uppercase' }}>
              A special offer for our friends at the Moon Syndicate
            </span>
            <p className="sale-date">Join the private sale now!</p>
          </div>
        )}

        <FormattedMessage id="sale_presalestarts" />
        <p className="sale-date">MARCH 19TH, 2018 - 4PM CET</p>
        <FormattedMessage id="sale_salestarts" />
        <p className="sale-date">MARCH 26TH, 2018 - 4PM CET</p>
        <hr style={{ border: 0 }} />

        {/*<p className="sale-date unmarg--bottom">
          The date of the main token sale will be announced shortly.
          <br />
          You’ll hear from us soon.
        </p>
    <hr />*/}
        <div className="modal-instance">
          <a
            id="preregister_button"
            className="btn btn-lg type--uppercase btn--primary modal-trigger"
            style={{ fontSize: '18pt', fontWeight: 'bold', color: 'white' }}
          >
            {localStorage.getItem('ref') === 'moonsyndicate' && (
              <span>Join the private sale</span>
            )}
            {localStorage.getItem('ref') !== 'moonsyndicate' && (
              <FormattedMessage id="sale_button" />
            )}
          </a>
          <div style={{ marginTop: '15px' }}>
            {/*<a
              href="/how-to-participate.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-info-circle" aria-hidden="true" />
            </a>{' '}*/}
            {localStorage.getItem('ref') === 'moonsyndicate' && (
              <strong>
                only for our friends of the Moon Syndicate<br />
              </strong>
            )}
            {localStorage.getItem('ref') !== 'moonsyndicate' && (
              <a
                href="https://t.me/databrokerdao"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'underline' }}
              >
                Join us on Telegram
              </a>
            )}
          </div>
          <div className="modal-container">
            <div className="modal-content">
              <div className="boxed boxed--lg">
                <RegisterForm upcoming={true} language={this.state.language} />
              </div>
            </div>
          </div>
        </div>
        {/*<div style={{ marginTop: '15px' }}>
          <p>
            In the meanwhile we are still accepting larger volume purchases at
            reduced rates.<br />{' '}
            <a
              href="mailto:hello@databrokerdao.com"
              style={{ textDecoration: 'underline' }}
            >
              Get in touch to discuss.
            </a>
          </p>
          </div>*/}
      </div>
    );
    // OLD
    // return (
    //   <div>
    //     <h2 className="sale-date">Early Token Sale starts:</h2>
    //     <p className="sale-date unmarg--bottom">18 SEPTEMBER 2017 - 5PM CET</p>
    //     <hr />
    //     <h3 className="unmarg--bottom">
    //       Register now to access the sale address before the start!
    //     </h3>
    //     <br />
    //     <p className="lead">
    //       You will also receive a unique referral link that earns you 5% of
    //       every contribution you refer
    //     </p>
    //     <div className="modal-instance">
    //       <a className="btn btn-lg type--uppercase btn--primary modal-trigger">
    //         Register now for the early sale
    //       </a>
    //       <div style={{ marginTop: '15px' }}>
    //         <a
    //           href="/how-to-participate.pdf"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           <i className="fa fa-info-circle" aria-hidden="true" />
    //         </a>{' '}
    //         <a
    //           href="/how-to-participate.pdf"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           style={{ textDecoration: 'underline' }}
    //         >
    //           How to participate in the early sale
    //         </a>
    //       </div>
    //       <div className="modal-container">
    //         <div className="modal-content">
    //           <div className="boxed boxed--lg">
    //             <RegisterForm upcoming={true} />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // )
  };

  saleRunning = doneLoading => {
    const { endFundingTime, startFundingTime } = this.state;
    const togo = endFundingTime.diff(moment(), 'minutes');
    const total = endFundingTime.diff(startFundingTime, 'minutes');
    const percentage = 100 - togo / total * 100;
    return (
      <div>
        <h2 className="sale-date padding-2" style={{ marginBottom: '1em' }}>
          Join the early sale!
        </h2>
        {!doneLoading && (
          <div>
            <div className="ldr">Loading...</div>
          </div>
        )}
        {doneLoading && (
          <ProgressBar percentage={percentage} label={`${togo} minutes left`} />
        )}
        {doneLoading && this.numberTable()}
        <div className="modal-instance">
          <a
            className="btn btn-lg type--uppercase btn--primary modal-trigger"
            style={{ fontWeight: 'bold', fontSize: '20px' }}
          >
            Buy your DATA tokens now!
          </a>
          <div style={{ marginTop: '15px' }}>
            <a
              href="/how-to-participate.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-info-circle" aria-hidden="true" />
            </a>{' '}
            <a
              href="/how-to-participate.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'underline' }}
            >
              How to participate in the early sale
            </a>
          </div>
          <div style={{ marginTop: '15px' }}>
            <a
              href="mailto:hello@databrokerdao.com"
              style={{ textDecoration: 'underline' }}
            >
              Contact us for extra volume discounts.
            </a>
          </div>
          <div className="modal-container">
            <div className="modal-content">
              <div className="boxed boxed--lg">
                <RegisterForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  saleDone = () => {
    // const { percentage } = this.state;
    return (
      <div>
        <h2 className="sale-date">The early token sale is concluded!</h2>
        <hr />
        <p className="sale-date unmarg--bottom">Thank you for your support!</p>
        <hr />
        <div style={{ marginTop: '15px' }}>
          <a
            href="mailto:hello@databrokerdao.com"
            style={{ textDecoration: 'underline' }}
          >
            We are still accepting larger volume purchases at reduced rates.<br />{' '}
            Get in touch to discuss.
          </a>
        </div>
      </div>
    );
  };

  numberTable = () => {
    const { tokens, eth } = this.state;

    return (
      <div>
        <div className="col-sm-6 padding-0">
          <table>
            <tbody>
              <tr>
                <td style={{ textAlign: 'left' }}>Tokens sold:</td>
                <td style={{ textAlign: 'right' }} className="type--bold">
                  {parseInt(tokens, 10).toFixed(0)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-sm-6 padding-only-left">
          <table>
            <tbody>
              <tr>
                <td style={{ textAlign: 'left' }}>ETH collected:</td>
                <td style={{ textAlign: 'right' }} className="type--bold">
                  Ξ {parseInt(eth, 10).toFixed(0)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  render() {
    const { tokens, eth, percentage } = this.state;
    const { language, messages } = this.state;

    let upcoming = process.env.REACT_APP_SALE_UPCOMING === 'true';
    let done = process.env.REACT_APP_SALE_DONE === 'true';
    let active = process.env.REACT_APP_SALE_ACTIVE === 'true';

    // if (startFundingTime && endFundingTime) {
    //   upcoming = startFundingTime.isAfter(moment());
    //   active =
    //     startFundingTime.isBefore(moment()) && endFundingTime.isAfter(moment());
    //   done = endFundingTime.isBefore(moment());
    // }

    const doneLoading = percentage >= 0 && eth >= 0 && tokens >= 0;

    // setTimeout(() => window.modals(jQuery, window, document), 1000); //eslint-disable-line

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
              zIndex: '-1'
            }}
            // id="canvas-basic"
          />
          <div className="nav-container">
            <div
              className="bar bar--md visible-xs bar--mobile-sticky"
              data-scroll-class="250px:pos-fixed"
            >
              <div className="container">
                <div className="row">
                  <div className="col-xs-3 col-sm-2">
                    <a href="/">
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
                  <div className="col-xs-9 col-sm-10 text-right">
                    <a
                      href="#"
                      className="hamburger-toggle"
                      data-toggle-class="#menu1;hidden-xs"
                    >
                      <i className="icon icon--sm stack-interface stack-menu" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <nav
              id="menu1"
              className="bar bar--md bar-1 bar--absolute bar--transparent pos-vertical-align-columns"
              data-scroll-class="250px:pos-fixed"
            >
              <div className="container">
                <div className="row">
                  <div className="col-md-3 col-sm-2 hidden-xs">
                    <div className="bar__module">
                      <a href="/">
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
                    className="col-md-9 col-sm-12 text-right text-left-xs text-left-sm"
                    style={{ marginTop: '10px' }}
                  >
                    <div className="bar__module">
                      <ul className="menu-horizontal text-left">
                        <li>
                          <a
                            href={`/whitepaper/WHITEPAPER_DataBrokerDAO_${language}.pdf`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FormattedMessage id="navigation_whitepaper" />
                          </a>
                        </li>
                        <li>
                          <a href="#alliance">
                            <FormattedMessage id="navigation_alliance" />
                          </a>
                        </li>
                        <li>
                          <a href="#team">
                            <FormattedMessage id="navigation_team" />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://medium.com/DataBrokerDAO"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FormattedMessage id="navigation_updates" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="bar__module" style={{ marginLeft: '5px' }}>
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
                    <div className="bar__module" style={{ marginLeft: '5px' }}>
                      <a
                        className="btn btn--sm btn--secondary type--uppercase"
                        href="https://beta.databrokerdao.com/"
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
                          marginTop: '10px'
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
                      <div className="modal-instance header-video block">
                        <div
                          className="video-play-icon video-play-icon--xs modal-trigger bg--primary"
                          data-modal-index="0"
                        />
                        <span>
                          <strong>
                            <FormattedMessage id="splash_videolink" />
                          </strong>
                        </span>
                        <div className="modal-container">
                          <div
                            className="modal-content bg-dark"
                            data-width="55%"
                            data-height="60%"
                          >
                            <iframe
                              title="DataBrokerDAO movie"
                              data-src="https://www.youtube.com/embed/hZLr5O7y71c?autoplay=1&amp;rel=0"
                              allowFullScreen="allowfullscreen"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-md-12"
                        style={{
                          marginBottom: '10px',
                          paddingRight: '5px',
                          paddingLeft: '5px'
                        }}
                      >
                        <a
                          href={`/whitepaper/WHITEPAPER_DataBrokerDAO_${language}.pdf`}
                          className="btn btn-lg btn--secondary force-black"
                          target="_blank"
                          style={{
                            width: '100%',
                            color: 'black',
                            fontWeight: 'bold'
                          }}
                        >
                          <FormattedMessage
                            id="splash_readwhitepaper"
                            style={{
                              color: 'black',
                              fontWeight: 'bold'
                            }}
                          />
                        </a>
                      </div>
                      <div
                        className="col-md-12"
                        style={{
                          marginBottom: '10px',
                          paddingRight: '5px',
                          paddingLeft: '5px'
                        }}
                      >
                        <a
                          href={`/whitepaper/ONEPAGER_DataBrokerDAO_${language}.pdf`}
                          className="btn btn-lg btn--secondary force-black"
                          target="_blank"
                          style={{
                            width: '100%',
                            color: 'black',
                            fontWeight: 'bold'
                          }}
                        >
                          <FormattedMessage
                            id="splash_readonepaper"
                            style={{
                              color: 'black',
                              fontWeight: 'bold'
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
                      {doneLoading && upcoming && this.saleUpcoming()}
                      {active && this.saleRunning(doneLoading)}
                      {doneLoading && done && this.saleDone()}
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
                          style={{ textDecoration: 'none' }}
                          href="https://t.me/databrokerdao"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa fa-telegram fa-2x" />
                        </a>
                      </span>
                      <span>
                        <a
                          style={{ textDecoration: 'none' }}
                          href="https://www.facebook.com/DataBrokerDAO/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa fa-facebook fa-2x" />
                        </a>
                      </span>
                      <span>
                        <a
                          style={{ textDecoration: 'none' }}
                          href="https://twitter.com/DataBrokerDAO"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa fa-twitter fa-2x" />
                        </a>
                      </span>
                      <span>
                        <a
                          style={{ textDecoration: 'none' }}
                          href="https://medium.com/DataBrokerDAO"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa fa-medium fa-2x" />
                        </a>
                      </span>
                      <span>
                        <a
                          href="https://www.youtube.com/channel/UCUmxSlaliIuF0Z3yNw8y_uA"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa fa-youtube fa-2x" />
                        </a>
                      </span>
                      <span>
                        <a
                          style={{ textDecoration: 'none' }}
                          href="https://bitcointalk.org/index.php?topic=2113309.0"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa fa-btc fa-2x" />
                        </a>
                      </span>
                      <span>
                        <a
                          style={{ textDecoration: 'none' }}
                          href="https://github.com/DataBrokerDAO"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa fa-github fa-2x" />
                        </a>
                      </span>
                      <span>
                        <a
                          style={{ textDecoration: 'none' }}
                          href="https://www.reddit.com/r/DatabrokerDAO/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa fa-reddit fa-2x" />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <VideoSection />
            <TokenSaleSection />
            <ChallengeSection />
            <CTASection />
            <SolutionSection />
            <BetaSection />
            <BenefitsSection />
            <CTASection />
            <AllianceSection />
            <CTASection />
            <RoadmapSection />
            <CTASection />
            <EventsSection />
            <CTASection />
            <PressSection />
            <CTASection />
            <TeamSection />
            <CTASection />
            <JobsSection />
            <ChannelsSection />
            <Footer />
          </div>
        </div>
      </IntlProvider>
    );
  }
}

export default TokenSale;
