import React, { PureComponent } from 'react'
import { FormattedMessage } from 'react-intl'

class JobsSection extends PureComponent {
  render() {
    return (
      <div>
        <section id="jobs" className="bg--secondary">
          <div className="container">
            <div className="row">
              <div className="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 text-center">
                <h2 style={{ marginBottom: '5px' }}>
                  <FormattedMessage id="jobs_title" />
                </h2>
                <p
                  className="type--uppercase type--bold"
                  style={{ marginBottom: '5px' }}
                >
                  <FormattedMessage id="jobs_subtitle" />
                </p>
                <p style={{ marginBottom: '20px' }}>
                  <FormattedMessage id="jobs_intro" />
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-4 modal-instance">
                <div className="job feature feature-1 boxed boxed--border modal-trigger">
                  <h4>Full Stack Javascript Developer</h4>
                  <p>
                    DataBroker DAO is looking for a full stack frontend engineer
                    to help us build the smoothest distributed applications.
                  </p>
                  <a>View &amp; Apply</a>
                </div>
                <div className="modal-container">
                  <div className="modal-content">
                    <section className="imageblock feature-large bg--site border--round">
                      <div className="container">
                        <div className="row">
                          <h2 style={{ marginLeft: '50px' }}>
                            Full Stack Javascript Developer
                          </h2>
                          <div
                            className="col-md-7 col-sm-12"
                            style={{ marginLeft: '40px' }}
                          >
                            <h4>We need a decentralized tinkerer</h4>
                            <p>
                              SettleMint bridges the gap between enterprise and
                              blockchain technologies. We provide both end-user
                              products and a suite of developer tools to enable
                              organisations to grow their blockchain
                              capabilities rapidly. Our mission is to empower
                              governments, enterprises and individuals with
                              access to blockchain technologies to develop new
                              economic, social and political operating models to
                              improve the planet.
                            </p>
                            <p>
                              Blockchain technologies are foundational and as
                              such, are not confined to any one industry. Our
                              core solution ‘Mint’ is being used to build
                              solutions that reinvent e-commerce, identity
                              management, financial markets, security, land
                              registration and IoT data management to name a
                              few.
                            </p>
                            <p>
                              And to push these products to the next level, we
                              need you! This job would allow you to immerse
                              yourself in the cutting edge of a rapidly evolving
                              technology, work in a fast-growing company and
                              hopefully make a dent in some global issues along
                              the way. If this sounds like the ultimate job for
                              you and you are self-directed, client-focused and
                              results-oriented, we would love to welcome you to
                              our team.
                            </p>

                            <h2>Sound like the job for you?</h2>
                            <p className="lead">
                              Got what it takes to work with us? Great! Send us
                              a link to your resumé or portfolio to become part
                              of our team.
                            </p>
                            <a
                              className="btn btn--primary type--uppercase"
                              href="mailto:hello@databrokerdao.com"
                            >
                              <span className="btn__text">
                                Drop your resumé here
                              </span>
                            </a>
                          </div>
                          <div className="col-md-4 col-sm-12 col-md-push-1">
                            <p>
                              <b>Responsibilities</b>
                              <li> Develop in NodeJS and ReactJS</li>
                              <li> Collaborate with the team</li>
                              <li> Reporting to the CTO</li>
                              <li> Change the world</li>
                            </p>
                            <p>
                              <b>Skills</b>
                              <li> Javascript development</li>
                              <li> HTML/CSS markup skills</li>
                              <li> Passionate about innovation</li>
                              <li> 2 — 4 years experience in webdev</li>
                            </p>
                            <p>
                              <b>Employment Terms</b>
                              <li> Full time employee</li>
                              <li> On site in Leuven, BE</li>
                            </p>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>

              <div className="col-sm-4 modal-instance">
                <div className="job feature feature-1 boxed boxed--border modal-trigger">
                  <h4>Solidity Developer</h4>
                  <p>
                    Build out new business models, tokens, crowd sales and
                    applications using Solidity, and integrate them into our
                    products.
                  </p>
                  <a>View &amp; Apply</a>
                </div>
                <div className="modal-container">
                  <div className="modal-content">
                    <section className="imageblock feature-large bg--site border--round">
                      <div className="container">
                        <div className="row">
                          <h2 style={{ marginLeft: '50px' }}>
                            Solidty Developer
                          </h2>
                          <div
                            className="col-md-7 col-sm-12"
                            style={{ marginLeft: '40px' }}
                          >
                            <h4>We need a decentralized tinkerer</h4>
                            <p>
                              SettleMint bridges the gap between enterprise and
                              blockchain technologies. We provide both end-user
                              products and a suite of developer tools to enable
                              organisations to grow their blockchain
                              capabilities rapidly. Our mission is to empower
                              governments, enterprises and individuals with
                              access to blockchain technologies to develop new
                              economic, social and political operating models to
                              improve the planet.
                            </p>
                            <p>
                              Blockchain technologies are foundational and as
                              such, are not confined to any one industry. Our
                              core solution ‘Mint’ is being used to build
                              solutions that reinvent e-commerce, identity
                              management, financial markets, security, land
                              registration and IoT data management to name a
                              few.
                            </p>
                            <p>
                              And to push these products to the next level, we
                              need you! This job would allow you to immerse
                              yourself in the cutting edge of a rapidly evolving
                              technology, work in a fast-growing company and
                              hopefully make a dent in some global issues along
                              the way. If this sounds like the ultimate job for
                              you and you are self-directed, client-focused and
                              results-oriented, we would love to welcome you to
                              our team.
                            </p>

                            <h2>Sound like the job for you?</h2>
                            <p className="lead">
                              Got what it takes to work with us? Great! Send us
                              a link to your resumé or portfolio to become part
                              of our team.
                            </p>
                            <a
                              className="btn btn--primary type--uppercase"
                              href="mailto:hello@databrokerdao.com"
                            >
                              <span className="btn__text">
                                Drop your resumé here
                              </span>
                            </a>
                          </div>
                          <div className="col-md-4 col-sm-12 col-md-push-1">
                            <p>
                              <b>Responsibilities</b>
                              <li> Develop Solidity smart contracts</li>
                              <li> Build Solidity libraries</li>
                              <li> Collaborate with the team</li>
                              <li> Reporting to the CTO</li>
                              <li> Change the world</li>
                            </p>
                            <p>
                              <b>Skills</b>
                              <li> Solidity development</li>
                              <li> Javascript & web3.js development</li>
                              <li>Passionate about innovation</li>
                              <li> 2 — 4 years experience in webdev</li>
                            </p>
                            <p>
                              <b>Employment Terms</b>
                              <li> Full time employee</li>
                              <li> On site in Leuven, BE</li>
                            </p>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>

              <div className="col-sm-4 modal-instance">
                <div className="job feature feature-1 boxed boxed--border modal-trigger">
                  <h4>Business Developer with experience in IOT</h4>
                  <p>
                    DataBroker DAO is looking for a Business Developer with a
                    passion for and experience in IOT.
                  </p>
                  <a>View &amp; Apply</a>
                </div>
                <div className="modal-container">
                  <div className="modal-content">
                    <section className="imageblock feature-large bg--site border--round">
                      <div className="container">
                        <div className="row">
                          <h2 style={{ marginLeft: '50px' }}>
                            Business Developer with experience in IOT
                          </h2>
                          <div
                            className="col-md-5 col-sm-12"
                            style={{ marginLeft: '40px' }}
                          >
                            <p>
                              <b>
                                As a Business developer at DataBroker DAO, you
                                are great at:
                              </b>
                              <li>Building an understanding of client needs</li>
                              <li> Guiding workshops with clients</li>
                              <li>
                                Analyzing processes to identify improvement
                                opportunities
                              </li>
                              <li>
                                Mapping processes and solution architecture
                              </li>
                              <li>
                                Translating needs into functional requirements
                                and user stories
                              </li>
                              <li>
                                Organizing yourself effectively so you can work
                                quickly under pressure to meet deadlines
                              </li>
                              <li>
                                Rolling up your sleeves to do what it takes in
                                the team to get the job done
                              </li>
                              <li> Sharing your knowledge in the team</li>
                            </p>

                            <h2>Sound like the job for you?</h2>
                            <p className="lead">
                              Got what it takes to work with us? Great! Send us
                              a link to your resumé or portfolio to become part
                              of our team.
                            </p>
                            <a
                              className="btn btn--primary type--uppercase"
                              href="mailto:hello@databrokerdao.com"
                            >
                              <span className="btn__text">
                                Drop your resumé here
                              </span>
                            </a>
                          </div>
                          <div className="col-md-5 col-sm-12 col-md-push-1">
                            <p>
                              <b>Skills</b>
                              <li>
                                Software development project management skills
                              </li>
                              <li>
                                Client facing experience as a consultant,
                                analyst or in a sales role
                              </li>
                              <li>
                                75 Proven track record of successful delivery
                              </li>
                              <li>
                                Strong communication skills both in spoken and
                                written forms
                              </li>
                              <li> Knowledge of blockchain technologies</li>
                            </p>
                            <p>
                              <b>Responsibilities</b>
                              <li>
                                Planning and defining scope for engagements
                              </li>
                              <li>
                                Creating delivery timelines including resource,
                                cost and time estimates
                              </li>
                              <li>
                                Monitoring and reporting on progress vs. plan
                              </li>
                              <li>Joining client sales meetings and events</li>
                              <li>
                                Scalability, Interoperability and Portability
                                Analysis
                              </li>
                              <li> Learning, growing and developing </li>
                            </p>
                            <p>
                              <b>Our offer</b>
                              <li>
                                A beautiful working spot in our Leuven offices
                              </li>
                              <li>
                                A salary and benefits competitive in the market
                              </li>
                              <li>
                                A lot of autonomy and a flexible way of working
                              </li>
                              <li>
                                An international team where you can make your
                                mark
                              </li>
                            </p>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="text-center" style={{ backgroundColor: 'white' }}>
          <div className="container">
            <div className="row">
              <div className="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div className="cta">
                  <h2>
                    <FormattedMessage id="jobs_title_two" />
                  </h2>
                  <p>
                    <FormattedMessage id="jobs_text_two" />
                  </p>
                  <a
                    className="btn btn--primary type--uppercase"
                    href="mailto:hello@databrokerdao.com"
                  >
                    <span className="btn__text">
                      <FormattedMessage id="jobs_button" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default JobsSection
