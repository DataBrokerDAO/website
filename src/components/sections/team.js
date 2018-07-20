import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

const LinkedInAction = ({ url }) => {
  return (
    <div className="card__action">
      <a
        name="fa-linkedin"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="color--primary fa fa-linkedin fa-2x" title="linkedin" />
      </a>
    </div>
  )
}

const TwitterAction = ({ url }) => {
  return (
    <div className="card__action">
      <a name="fa-twitter" href={url} target="_blank" rel="noopener noreferrer">
        <i className="color--primary fa fa-twitter fa-2x" title="linkedin" />
      </a>
    </div>
  )
}

const TeamCard = ({
  firstName,
  lastName,
  jobTitle,
  jobDescription,
  jobRegion,
  linkedIn,
  twitter,
  imgUrl,
}) => {
  const fullName = `${firstName} ${lastName}`

  return (
    <div className="col-xs-6 col-sm-3 masonry__item modal-instance">
      <div className="card card-2 text-center">
        <div className="card__top modal-trigger">
          <img
            alt={firstName}
            src={imgUrl || `./img/${firstName.toLowerCase()}.jpg`}
            style={{ filter: 'grayscale(100%)' }}
          />
        </div>
        <div className="card__body modal-trigger">
          <h4 className="color--primary">{fullName}</h4>
          <span className="type--fade">{jobTitle}</span>
          <div className="type--fade">{jobRegion || '\u00a0'}</div>
        </div>
        <div className="card__bottom text-center">
          {linkedIn && <LinkedInAction url={linkedIn} />}
          {twitter && <TwitterAction url={twitter} />}
        </div>
      </div>

      <div className="modal-container">
        <div className="modal-content">
          <div className="boxed card card-1">
            <div className="card__body">
              <h4 className="color--primary">{fullName}</h4>
              <span className="type--fade">{jobTitle}</span>
            </div>
            <div className="card__bottom">
              <p>{jobDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

TeamCard.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  jobTitle: PropTypes.string.isRequired,
  jobDescription: PropTypes.string.isRequired,
  linkedIn: PropTypes.string,
  imgUrl: PropTypes.string, // optional, defaults to firstname lowercase if not provided
}

class TeamSection extends PureComponent {
  render() {
    return (
      <div>
        <section
          id="team"
          className="text-center space--xs"
          style={{ backgroundColor: 'white' }}
        >
          <div className="container">
            <div className="row">
              <div className="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
                <h2>
                  <FormattedMessage id="team_title" />
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="masonry">
                <div className="masonry__container masonry--active">
                  <TeamCard
                    firstName="Matthew"
                    lastName="Van Niekerk"
                    jobTitle="Co-Founder &amp; CEO"
                    jobDescription="Founded and exited two companies in Japan, then
                    got his MBA in Belgium, after which he joined a
                    large financial institution, performing a variety
                    of roles ranging from COO of the consumer finance
                    business line to head of platform innovation for
                    the brokerage and crowdfunding platform. In 2016,
                    he left the bank and co-founded SettleMint."
                    linkedIn="https://www.linkedin.com/in/mattvanniekerk/"
                    twitter="https://twitter.com/matt_vn"
                  />

                  <TeamCard
                    firstName="Roderik"
                    lastName="van der Veer"
                    jobTitle="Co-Founder &amp; CTO"
                    jobDescription="After Roderik built one of the largest ecommerce
                    computer store sites in Belgium in 1999, he worked
                    in the IT development sector and as CTO grew a
                    traditional marcom agency into a digital
                    powerhouse. He exited this business to focus on
                    blockchain technologies when he co-founded
                    SettleMint in 2016."
                    linkedIn="https://www.linkedin.com/in/roderik/"
                    twitter="https://twitter.com/r0derik"
                  />

                  <TeamCard
                    firstName="Frank"
                    lastName="Segers"
                    jobTitle="Head Of Sales"
                    jobRegion="EUROPE and APAC"
                    jobDescription="Seasoned sales leader with 25+ years experience in boosting sales of disruptive technologies on the global markets. Worked in senior management positions for American and European based technology companies such as Transmode Systems, TE Connectivity (CommScope) and Spike Broadband Systems. Energetic and sales oriented entrepreneur, strong networker, polyglot, MSc in Electro-mechanical engineering Mechatronics from University of Leuven and MBA from University of Louvain-la-Neuve."
                    linkedIn="https://www.linkedin.com/in/frank-segers-6a30ba30"
                  />

                  <TeamCard
                    firstName="Veronica"
                    lastName="Murguia"
                    jobTitle="Investment Advisor"
                    jobDescription="Experienced Venture Development Consultant with a
                    demonstrated history and track record of working
                    in the early stage investment services and
                    entrepreneurship industry. Veronica is an active
                    connector, skilled business developer, known for
                    strong people skills, resilience, energy, drive to
                    pursue growth opportunities for blockchain and
                    positively contribute to the MENA entrepreneurship
                    ecosystem."
                    linkedIn="https://www.linkedin.com/in/veronicamurguia/"
                    imgUrl="./img/Veronica.png"
                  />

                  <TeamCard
                    firstName="Charles"
                    lastName="de Bergeyck"
                    jobTitle="CFO"
                    jobDescription="Finance professional with a  20 years demonstrated experience and track record of working in small companies to large corporations in the US and Sweden, along with with entrepreneurial start-up experience."
                    linkedIn="https://www.linkedin.com/in/charles-e-de-bergeyck-3521a411/"
                  />

                  <TeamCard
                    firstName="Frank"
                    lastName="Van Geertruyden"
                    jobTitle="MarCom Director"
                    jobDescription="As a marketing and communication professional with
                    almost 20 years experience in advertising,
                    publishing, sales, automotive, FMCG and ICT, Frank
                    worked on both agency and advertising site before
                    getting on-board at DataBroker DAO."
                    linkedIn="https://www.linkedin.com/in/frankvangeertuyden/"
                    twitter="https://twitter.com/FrankVanGee"
                    imgUrl="./img/frankk.jpg"
                  />

                  <TeamCard
                    firstName="Els"
                    lastName="Meyvaert"
                    jobTitle="Project Manager"
                    jobDescription="Els worked as account manager in various financial
                    institutions until she moved back to her first
                    love, communication. As account director, she
                    handled communication for the largest FMCG group
                    in Belgium before joining SettleMint."
                    linkedIn="https://www.linkedin.com/in/elsmeyvaert"
                    twitter="https://twitter.com/els_meyvaert"
                    imgUrl="./img/els.jpg"
                  />

                  <TeamCard
                    firstName="Bart"
                    lastName="Bettens"
                    jobTitle="Copywriter"
                    jobDescription="After several years in the media, working for a newspaper and various magazines, Bart decided in 2016 that it was time to start working for himself. Now he’s part-time copywriter, part-time translator and part-time editor, but 100% dedicated to his job at DataBroker DAO."
                    linkedIn="https://www.linkedin.com/in/bart-bettens-056a015/"
                  />

                  <TeamCard
                    firstName="Sebastian"
                    lastName="Wijkhuizen"
                    jobTitle="Blockchain Developer"
                    jobDescription="Sebastian started his career as equities and derivatives trader, became passionate about technology and ventured into the world of software development. Over the years, he has acquired experience in the development of trading algorithms, web and mobile applications, AI-powered chatbots, before joining the SettleMint developer team."
                    linkedIn="https://www.linkedin.com/in/sebastianwijkhuizen/"
                  />

                  <TeamCard
                    firstName="Silke"
                    lastName="Van den Broeck"
                    jobTitle="Blockchain Developer"
                    jobDescription="After working with cutting edge web and mobile
                    technologies in multiple Belgian startups, Silke
                    decided to use her experience as a full-stack
                    developer to help lift the SettleMint tech to a
                    higher level."
                    linkedIn="https://www.linkedin.com/in/silkevdb/"
                  />

                  <TeamCard
                    firstName="Peter-Jan"
                    lastName="Brone"
                    jobTitle="Blockchain Developer"
                    jobDescription="Passionate coder, with an emphasis on queueing, caching and performance of distributed systems"
                    linkedIn="https://www.linkedin.com/in/peterjanbrone/"
                  />

                  <TeamCard
                    firstName="Astrid"
                    lastName="Janssens"
                    jobTitle="Management Assistant"
                    jobDescription="Always seeking to find the best administrative solution and on a mission to get things organised. Passionate problem solver and always willing to lend a hand or give support."
                    linkedIn="https://www.linkedin.com/in/astrid-janssens-6599b29/"
                  />

                  <TeamCard
                    firstName="Cassandre"
                    lastName="Vandeputte"
                    jobTitle="Solution Analyst"
                    jobDescription="Cassandre has earned her stripes in the blockchain
                    innovation labs at Accenture before joining
                    SettleMint this year.."
                    linkedIn="https://www.linkedin.com/in/cassandrevandeputte/"
                    twitter="https://twitter.com/cassvdp"
                  />

                  <TeamCard
                    firstName="Tom"
                    lastName="De Block"
                    jobTitle="Solution Architect"
                    jobDescription="A serial entrepreneur with active companies in
                    Belgium, Spain and eastern Europe and a strong
                    background in quality assurance in large financial
                    institutions across Europe."
                    linkedIn="https://www.linkedin.com/in/navigio/"
                  />

                  {/*<TeamCard
                    firstName="Ridah"
                    lastName="El Awad"
                    jobTitle="Blockchain Consultant"
                    jobDescription="People management experience, synthesizing conflicting information quickly, and pivoting with new learnings. 12 years across multiple industries and cross functional experience in the technology deployment and commercialization for MENA, focused on (blockchain, fintech, smart cities) and consultative & strategic commercial growth."
                  linkedIn="" />*/}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
                <h2>
                  <FormattedMessage id="team_title_two" />
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="masonry">
                <div className="masonry__container masonry--active">
                  <div className="col-xs-6 col-sm-3 masonry__item modal-instance">
                    <div className="card card-2 text-center">
                      <div className="card__top modal-trigger">
                        <img
                          alt="Jonathan"
                          src="./img/jonathan_johnson.png"
                          style={{ filter: 'grayscale(100%)' }}
                        />
                      </div>
                      <div className="card__body modal-trigger">
                        <h4 className="color--primary">Jonathan Johnson</h4>
                        <span className="type--fade">Advisor</span>
                      </div>
                      <div className="card__bottom text-center">
                        <div className="card__action">
                          <a
                            name="jonathanjohnson3"
                            href="https://www.linkedin.com/in/jonathanjohnson3/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="color--primary fa fa-linkedin fa-2x" />
                          </a>
                        </div>
                        <div className="card__action">
                          <a
                            name="jjohnsonnow"
                            href="https://twitter.com/jjohnsonnow/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="color--primary fa fa-twitter fa-2x" />
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="modal-container">
                      <div className="modal-content">
                        <div className="boxed card card-1">
                          <div className="card__body">
                            <h4 className="color--primary">Jonathan Johnson</h4>
                            <span className="type--fade">Advisor</span>
                          </div>
                          <div className="card__bottom">
                            <p>President, Medici Ventures, Inc.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xs-6 col-sm-3 masonry__item modal-instance">
                    <div className="card card-2 text-center">
                      <div className="card__top modal-trigger">
                        <img
                          alt="Richard"
                          src="./img/richard_kastelein.png"
                          style={{ filter: 'grayscale(100%)' }}
                        />
                      </div>
                      <div className="card__body modal-trigger">
                        <h4 className="color--primary">Richard Kastelein</h4>
                        <span className="type--fade">Advisor</span>
                      </div>
                      <div className="card__bottom text-center">
                        <div className="card__action">
                          <a
                            name="expathos"
                            href="https://www.linkedin.com/in/expathos/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="color--primary fa fa-linkedin fa-2x" />
                          </a>
                        </div>
                        <div className="card__action">
                          <a
                            name="expathos"
                            href="https://twitter.com/expathos"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="color--primary fa fa-twitter fa-2x" />
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="modal-container">
                      <div className="modal-content">
                        <div className="boxed card card-1">
                          <div className="card__body">
                            <h4 className="color--primary">
                              Richard Kastelein
                            </h4>
                            <span className="type--fade">Advisor</span>
                          </div>
                          <div className="card__bottom">
                            <p>
                              Blockchain News Publisher Partner Cryptoassets
                              Design Group
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xs-6 col-sm-3 masonry__item modal-instance">
                    <div className="card card-2 text-center">
                      <div className="card__top modal-trigger">
                        <img
                          alt="Patrick"
                          src="./img/patrick_byrne.png"
                          style={{ filter: 'grayscale(100%)' }}
                        />
                      </div>
                      <div className="card__body modal-trigger">
                        <h4 className="color--primary">Patrick Byrne</h4>
                        <span className="type--fade">Advisor</span>
                      </div>
                      <div className="card__bottom text-center">
                        <div className="card__action">
                          <a
                            name="OverstockCEO"
                            href="https://twitter.com/OverstockCEO"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="color--primary fa fa-twitter fa-2x" />
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="modal-container">
                      <div className="modal-content">
                        <div className="boxed card card-1">
                          <div className="card__body">
                            <h4 className="color--primary">Patrick Byrne</h4>
                            <span className="type--fade">Advisor</span>
                          </div>
                          <div className="card__bottom">
                            <p>CEO, Overstock.com</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xs-6 col-sm-3 masonry__item modal-instance">
                    <div className="card card-2 text-center">
                      <div className="card__top modal-trigger">
                        <img
                          alt="Julien"
                          src="./img/julien_marlair.png"
                          style={{ filter: 'grayscale(100%)' }}
                        />
                      </div>
                      <div className="card__body modal-trigger">
                        <h4 className="color--primary">Julien Marlair</h4>
                        <span className="type--fade">Advisor</span>
                      </div>
                      <div className="card__bottom text-center">
                        <div className="card__action">
                          <a
                            name="julienmarlair"
                            href="https://www.linkedin.com/in/julienmarlair/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="color--primary fa fa-linkedin fa-2x" />
                          </a>
                        </div>
                        <div className="card__action">
                          <a
                            name="jmarlair"
                            href="https://twitter.com/jmarlair/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="color--primary fa fa-twitter fa-2x" />
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="modal-container">
                      <div className="modal-content">
                        <div className="boxed card card-1">
                          <div className="card__body">
                            <h4 className="color--primary">Julien Marlair</h4>
                            <span className="type--fade">Advisor</span>
                          </div>
                          <div className="card__bottom">
                            <p>
                              Business Development and Innovation manager at
                              Proximus
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xs-6 col-sm-3 masonry__item modal-instance">
                    <div className="card card-2 text-center">
                      <div className="card__top modal-trigger">
                        <img
                          alt="Yehoshua"
                          src="./img/Yehoshua.jpg"
                          style={{ filter: 'grayscale(100%)' }}
                        />
                      </div>
                      <div className="card__body modal-trigger">
                        <h4 className="color--primary">Yehoshua Westover</h4>
                        <span className="type--fade">Advisor</span>
                      </div>
                      <div className="card__bottom text-center">
                        <div className="card__action">
                          <a
                            name="OverstockCEO"
                            href="https://twitter.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="color--primary fa fa-twitter fa-2x" />
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="modal-container">
                      <div className="modal-content">
                        <div className="boxed card card-1">
                          <div className="card__body">
                            <h4 className="color--primary">
                              Yehoshua Westover
                            </h4>
                            <span className="type--fade">Advisor</span>
                          </div>
                          <div className="card__bottom">
                            <p>
                              China Strategist and Venture Capitalist; Chairman,
                              October Investment Management; Co-founder, 1st
                              Prestige Wealth Management; COO, China Israel
                              Science and Technology Innovation Center
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
                <h2>
                  <FormattedMessage id="team_title_three" />
                </h2>
              </div>
            </div>

            <div className="row align-center" style={{ marginTop: '50px' }}>
              <div className="col-sm-2" />
              <div className="col-sm-3 zooming-logo">
                <a
                  name="settlemint"
                  style={{ cursor: 'pointer' }}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.settlemint.com"
                >
                  <img
                    alt="SettleMint"
                    src="./img/Logos partners/logo-settlemint.png"
                  />
                </a>
              </div>
              <div className="col-sm-3 zooming-logo">
                <a
                  name="amazix"
                  style={{ cursor: 'pointer' }}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.amazix.com"
                >
                  <img
                    alt="Amazix"
                    src="./img/Logos partners/logo-amazix.png"
                  />
                </a>
              </div>
              <div className="col-sm-3 zooming-logo">
                <a
                  name="entethalliance"
                  style={{ cursor: 'pointer' }}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://entethalliance.org/"
                >
                  <img
                    alt="Ethereum Enterprice Alliance"
                    src="./img/Logos partners/eea-logo.png"
                  />
                </a>
              </div>
              <div className="col-sm-1" />
              {/*<div className="col-sm-3 zooming-logo">
                <a
                  style={{ cursor: 'pointer' }}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.sigfox.com"
                >
                  <img
                    alt="Sigfox"
                    src="./img/Logos partners/Sigfox_Logo.png"
                  />
                </a>
    </div>*/}
            </div>

            <div className="row align-center" style={{ marginTop: '50px' }}>
              <div className="col-sm-2" />
              <div className="col-sm-3 zooming-logo">
                <a
                  style={{ cursor: 'pointer' }}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://bitcoinprbuzz.com/"
                >
                  <img
                    alt="BitCoinPRBuzz"
                    src="./img/Logos partners/logo-bitcoinprbuzz.png"
                  />
                </a>
              </div>
              <div className="col-sm-3 zooming-logo">
                <a
                  style={{ cursor: 'pointer' }}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.polymath.network/"
                >
                  <img
                    alt="Polymath"
                    src="./img/Logos partners/logo-polymath.png"
                  />
                </a>
              </div>
              <div className="col-sm-3 zooming-logo">
                <a
                  style={{ cursor: 'pointer' }}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.renownedandco.com/"
                >
                  <img
                    alt="Renowned & Co"
                    src="./img/Logos partners/logo-renowned.png"
                  />
                </a>
              </div>
              <div className="col-sm-1" />
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default TeamSection
