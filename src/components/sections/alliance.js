import React, { PureComponent } from 'react'
import { FormattedMessage } from 'react-intl'
// import LogoBrusselsSmartCity from '../../assets/alliance/Logo_BrusselsSmartCity.png'
import LogoYuktix from '../../assets/alliance/logo_Yuktix.png'
// import LogoSigfox from '../../assets/alliance/logo_sigfox.png'
import LogoDesideDatum from '../../assets/alliance/logo_desideDatum.png'
import LogoIquadrat from '../../assets/alliance/logo_iquadrat.png'
import LogoSkylark from '../../assets/alliance/logo_Skylark.png'
import LogoTechnilog from '../../assets/alliance/Logo_Technilog.png'
import LogoIdentitymindglobal from '../../assets/alliance/logo_identitymindglobal.png'
import LogoPanasonic from '../../assets/alliance/logo_panasonic.png'
// import LogoSket from '../../assets/alliance/logo_sket.png'
import LogoApinf from '../../assets/alliance/logo_apinf.png'
import LogoEsoptra from '../../assets/alliance/logo_esoptra.png'
import LogoDigitaltown from '../../assets/alliance/logo_digitaltown.png'
// import LogoDspvalley from '../../assets/alliance/logo_dspvalley.png'
// import LogoIkusi from '../../assets/alliance/logo_ikusi.png'
import LogoThingsplay from '../../assets/alliance/logo_thingsplay.png'
// import LogoBreezometer from '../../assets/alliance/logo_breezometer.png'
// import LogoArinti from '../../assets/alliance/logo_arinti.png'
// import LogoAioti from '../../assets/alliance/logo_aioti.png'
import LogoAllthingstalk from '../../assets/alliance/logo_allthingstalk.png'
// import LogoCityseeders from '../../assets/alliance/logo_cityseeders.png'
// import LogoIntellegant from '../../assets/alliance/logo_intellegant.png'
import LogoActility from '../../assets/alliance/logo_actility.png'
import LogoLumo from '../../assets/alliance/logo_lumo.png'
import LogoOption from '../../assets/alliance/logo_option.png'
// import LogoTurck from '../../assets/alliance/logo_turck.png'
import LogoVerses from '../../assets/alliance/logo_verses.png'
// import LogoXterconnect from '../../assets/alliance/logo_xterconnect.png'
import LogoIungoo from '../../assets/alliance/logo_iungoo.png'
import Logoaerodyne from '../../assets/alliance/aerodyne-logo.png'
import Logodigitalworx from '../../assets/alliance/digitalworx.png'
import LogoReekoh from '../../assets/alliance/Reekoh_logo.png'

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
              <a
                name="Yuktix"
                className="modal-trigger"
                style={{ cursor: 'pointer' }}
              >
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
            <div className="col-sm-2 modal-instance zooming-logo">
              <a
                name="LogoEsoptra"
                className="modal-trigger"
                style={{ cursor: 'pointer' }}
              >
                <img src={LogoEsoptra} alt="Esoptra" />
              </a>
              <div className="modal-container">
                <div className="modal-content">
                  <div className="boxed boxed--border">
                    <h2>Esoptra</h2>
                    <p>
                      Belgium-based software company Esoptra delivers customized
                      information access and integration solutions as a service.
                      Their innovative IPaaS platform uses so called ‘pluglits’
                      to provide a new array of data access and migration
                      services. These pluglits are tiny data connectors
                      ‘scraping’ data from its sources, only when the
                      destination (data) file gets consulted. Thus eliminating
                      the need for intermediate storage and useless data
                      migration. At a fraction of the usual cost, deployed in
                      hours or days instead of weeks or months, deployed on
                      premise or in any cloud, and rendered on any mobile or
                      desktop device. By joining the DataBroker DAO alliance,
                      Esoptra gets access to a blockchain based layer to
                      monetize their services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-2 modal-instance zooming-logo">
              <a
                name="DigitalTown"
                className="modal-trigger"
                style={{ cursor: 'pointer' }}
              >
                <img src={LogoDigitaltown} alt="Digital Town" />
              </a>
              <div className="modal-container">
                <div className="modal-content">
                  <div className="boxed boxed--border">
                    <h2>Digital Town</h2>
                    <p>
                      DigitalTown helps people search, connect and buy local in
                      over 22,000 cities globally. Their innovative search
                      technology is branded with the identity of each city. They
                      create discoverable online communities where residents and
                      visitors take part in local economic success, and they do
                      this on a global scale. They work with city stakeholders,
                      provide local merchants a free online store front, and
                      share in the success with the citizens directly, all to
                      keep funds where they belong - local. They make civic
                      pride a call to action and inspire people to co-create
                      solutions together in communities across the globe.
                      DigitalTown's CityShare platform offers residents the
                      chance to own a stake in a city's success, through digital
                      shares in their local community. All while giving
                      stakeholders a passionate community in which to engage.
                      The shares rise in value with demand, and demand is tied
                      to active local support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-2 modal-instance zooming-logo">
              <a
                name="Thingplay"
                className="modal-trigger"
                style={{ cursor: 'pointer' }}
              >
                <img src={LogoThingsplay} alt="Thingplay" />
              </a>
              <div className="modal-container">
                <div className="modal-content">
                  <div className="boxed boxed--border">
                    <h2>ThingsPlay</h2>
                    <p>
                      Thingsplay is a start-up company created in July 2014 with
                      the aim to make agile and innovative technological tools
                      available to industries in the context of the Internet of
                      Things. From data acquisition to integration in your
                      applications, Thingsplay manages, transports, secures and
                      processes all your industrial data, offering solutions for
                      industries, public buildings as well as homes and enabling
                      track & trace solutions to be made available to business
                      companies. After a few years in research and development,
                      Thingsplay has developed technological solutions and a
                      connected devices computer management platform, based on
                      ‘real-time’ technologies and ‘big data’ databases. This
                      management platform integrates all monitoring and
                      management tools to your connected devices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-2 modal-instance zooming-logo">
              <a
                name="Option"
                className="modal-trigger"
                style={{ cursor: 'pointer' }}
              >
                <img src={LogoOption} alt="Option" />
              </a>
              <div className="modal-container">
                <div className="modal-content">
                  <div className="boxed boxed--border">
                    <h2>Option</h2>
                    <p>
                      Option, headquartered in Leuven, Belgium is a publicly
                      quoted tech company that specializes in wireless solutions
                      enabling Machine to Machine communication. With over 30
                      years of experience and many industry firsts, the company
                      offers efficient, reliable and secure solutions across a
                      variety of industries and applications. Recently the
                      company shifted focus from mobile and wireless chipsets to
                      devices to support communication between IoT sensors and
                      the internet. CloudGate, their complete machine to machine
                      communication platform, allows anyone to deploy IoT sensor
                      arrays in any environment, anywhere in the world.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-2 modal-instance zooming-logo">
              <a
                name="Verses"
                className="modal-trigger"
                style={{ cursor: 'pointer' }}
              >
                <img src={LogoVerses} alt="Verses" />
              </a>
              <div className="modal-container">
                <div className="modal-content">
                  <div className="boxed boxed--border">
                    <h2>VERSES</h2>
                    <p>
                      VERSES is an integrated blockchain-based virtual commerce
                      (vCommerce) enablement platform, built on highly scalable,
                      secure and robust blockchain and smart contract
                      technologies that manage the interaction policies by and
                      between virtual entities, elements, fiat and crypto
                      currencies and transactions within virtual immersive
                      experiences. VERSES’ mission is to empower designers,
                      developers, organizations and users to create, monetize
                      and experience the most dynamic, interactive and
                      meaningful immersive experiences imaginable. They
                      developed a whole new protocol to bring global positioning
                      and assets ‘location’ to blockchain, and they are a few
                      steps ahead of the pack when it comes to artificial
                      components used in gaming and industrial environments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-center">
            <div className="col-sm-2 modal-instance zooming-logo">
              <a
                name="Technilog"
                className="modal-trigger"
                style={{ cursor: 'pointer' }}
              >
                <img src={LogoTechnilog} alt="Technilog" />
              </a>
              <div className="modal-container">
                <div className="modal-content">
                  <div className="boxed boxed--border">
                    <h2>Technilog</h2>
                    <p>
                      French software publisher Technilog focuses on the
                      collection of IoT and industrial automation data. Their
                      cloud platform unifies, reproduces and distributes raw or
                      enhanced data coming from all kinds of sensors connected
                      to the LoRa and/or Sigfox operators (temperature,
                      humidity, soil acidification, noise pollution, energy
                      consumption index, geolocation, …) to other cloud
                      platforms and industry-specific applications. The company
                      wants to offer its products and technologies in various
                      forms: unlimited licence, SaaS, middleware and on-board
                      software, to serve and accompany its customers through
                      whatever strategic choices they make. “We specialize in
                      harnessing connected industrial objects to provide users
                      with the right data, in the right format, at the right
                      time and for the right purpose”, says Jean-François
                      Ducourtioux, director of Operations at Technilog.
                      “DataBroker DAO enables us to value the collected raw and
                      enhanced data and to make them accessible to user
                      communities.”
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-2 modal-instance zooming-logo">
              <a
                name="IdentityMind"
                className="modal-trigger"
                style={{ cursor: 'pointer' }}
              >
                <img src={LogoIdentitymindglobal} alt="IdentityMind Global" />
              </a>
              <div className="modal-container">
                <div className="modal-content">
                  <div className="boxed boxed--border">
                    <h2>Identity Mind</h2>
                    <p>
                      IdentityMind provides a cloud-based risk management and
                      compliance automation platform that adapts to the needs of
                      your business. Delivering real-time access to a global
                      database with hundreds of millions of trusted identities
                      and offering a comprehensive and fully integrated
                      ecosystem of 20 plus partners who provide data, services
                      and technology. The company’s mission is concise:
                      construct electronic identities and infuse integrity back
                      into the global market of digital commerce. Thus helping
                      retailers, financial institutions and virtual currency
                      businesses to mitigate risks and comply with federal and
                      state regulations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-2 modal-instance zooming-logo">
              <a
                name="Panasonic"
                className="modal-trigger"
                style={{ cursor: 'pointer' }}
              >
                <img src={LogoPanasonic} alt="Panasonic" />
              </a>
              <div className="modal-container">
                <div className="modal-content">
                  <div className="boxed boxed--border">
                    <h2>Panasonic</h2>
                    <p>
                      Panasonic Corporation is a Japanese multinational
                      electronics corporation, headquartered in Osaka, Japan.
                      The company was founded in 1918, 100 years ago, and has
                      since grown to become one of the largest Japanese
                      electronics producers, employing over 250,000 people
                      worldwide. Panasonic has put forward the brand slogan “A
                      Better Life, A Better World” to embody its founding
                      management philosophy “to contribute to the progress and
                      development of society through its business activities”.
                      Guided by this slogan, the company is endeavoring to offer
                      “A Better Life, A Better World” to each and every customer
                      around the world across its four core business areas:
                      Consumer Electronics, Housing, Automotive and B2B.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-2 modal-instance zooming-logo">
              <a
                name="APINF"
                className="modal-trigger"
                style={{ cursor: 'pointer' }}
              >
                <img src={LogoApinf} alt="APINF" />
              </a>
              <div className="modal-container">
                <div className="modal-content">
                  <div className="boxed boxed--border">
                    <h2>APInf</h2>
                    <p>
                      APIs are the building blocks of digitalization and have
                      become increasingly important over time. That is why
                      APInf, based in Tampere, Finland, has come up with a
                      comprehensive, yet easy to use API management tool,
                      providing a simplified workflow for API owners for API
                      management tasks and serving as a self-service tool for
                      API consumers for discovering APIs. The APInf platform is
                      scalable, flexible, auditable, features analytics tracking
                      and emphasizes a better developer experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-2 modal-instance zooming-logo">
              <a
                name="All Things Talk"
                className="modal-trigger"
                style={{ cursor: 'pointer' }}
              >
                <img src={LogoAllthingstalk} alt="All Things Talk" />
              </a>
              <div className="modal-container">
                <div className="modal-content">
                  <div className="boxed boxed--border">
                    <h2>AllThingsTalk</h2>
                    <p>
                      AllThingsTalk, headquartered in Ghent, provides a
                      ‘middleware’ platform that allows customers to aggregate
                      and process their IoT data. But the AllThingsTalk cloud is
                      more than just an IoT platform. It's an end-to-end
                      solution connecting any hardware or software platform,
                      allowing you to connect your devices – existing integrated
                      sensors or new ones – with web services, let them interact
                      using when-then rules, and store as well as visualize data
                      using mobile or web dashboards.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-2 modal-instance zooming-logo">
              <a
                name="desideDatum"
                className="modal-trigger"
                style={{ cursor: 'pointer' }}
              >
                <img src={LogoDesideDatum} alt="desideDatum" />
              </a>
              <div className="modal-container">
                <div className="modal-content">
                  <div className="boxed boxed--border">
                    <h2>DesideDatum</h2>
                    <p>
                      desideDatum, with offices in Barcelona and Madrid,
                      provides technology consulting services in the field of
                      opening data and organizations, helping them to meet their
                      transparency objectives and encouraging citizen
                      participation. They want to be promoters and transformers
                      of a new use of the data culture, offering society the
                      necessary tools and knowledge to generate economic,
                      technological, social, political and cultural wealth,
                      through the opening of data.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-center">
            <div className="col-sm-2 modal-instance zooming-logo">
              <a
                name="Iquadrat"
                className="modal-trigger"
                style={{ cursor: 'pointer' }}
              >
                <img src={LogoIquadrat} alt="Iquadrat" />
              </a>
              <div className="modal-container">
                <div className="modal-content">
                  <div className="boxed boxed--border">
                    <h2>Iquadrat</h2>
                    <p>
                      Since 1997, Barcelona-based iquadrat develops global
                      internet and telecommunications solutions and services for
                      companies and institutions that use ICT in commercial,
                      marketing, management and business communication areas.
                      Corporate websites, blogs, e-mail services, portals,
                      newsletters, e-commerce, intranet, extranet, online
                      catalogues, SEO, social marketing, custom applications,
                      hosting, maintenance, accessibility, compatibility … you
                      name it, iquadrat provides it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-2 modal-instance zooming-logo">
              <a
                name="Skylark"
                className="modal-trigger"
                style={{ cursor: 'pointer' }}
              >
                <img src={LogoSkylark} alt="Skylark" />
              </a>
              <div className="modal-container">
                <div className="modal-content">
                  <div className="boxed boxed--border">
                    <h2>Skylark</h2>
                    <p>
                      Skylark, with offices in India and Singapore, is a leading
                      IT service provider that strives to transform its clients’
                      businesses through innovative and advanced technology
                      solutions. The company was founded in 1993, and has since
                      performed more than 2,000 successful installations with
                      over 300 clients. Leveraging their partnerships with
                      leading service providers, they offer value-added
                      solutions in managed services, networking, IT security,
                      blockchain and the cloud. Their unique approach to
                      ‘choosing the right technology’ and their ability to solve
                      complex infrastructure challenges help their clients to
                      maximize their IT investments and to create a competitive
                      advantage through organizational agility and a lower total
                      cost of design.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-2 modal-instance zooming-logo">
              <a
                name="Lumo"
                className="modal-trigger"
                style={{ cursor: 'pointer' }}
              >
                <img src={LogoLumo} alt="Lumo" />
              </a>
              <div className="modal-container">
                <div className="modal-content">
                  <div className="boxed boxed--border">
                    <h2>Lumo Labs</h2>
                    <p>
                      LUMO labs, active in Eindhoven (The Netherlands) and Los
                      Angeles (USA), is a 2-year venture builder program for
                      emerging technology start-ups providing seed capital and
                      hands-on support. LUMO labs’ mission is to facilitate a
                      vibrant ecosystem and stimulate cross-pollination between
                      its start-ups. Their focus markets are big data/deep
                      learning, AI, VR/AR/MR, blockchain and robotics/IoT
                      (including smart mobility). LUMO labs’ unique process
                      shortens the time-to-market as well as the time-to-(follow
                      up)funding.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-2 modal-instance zooming-logo">
              <a
                name="Iungoo"
                className="modal-trigger"
                style={{ cursor: 'pointer' }}
              >
                <img src={LogoIungoo} alt="Iungoo" />
              </a>
              <div className="modal-container">
                <div className="modal-content">
                  <div className="boxed boxed--border">
                    <h2>IUNGO</h2>
                    <p>
                      IUNGO Network is part of a movement that wants to build
                      the foundations of a new, decentralized internet by
                      creating the world’s first truly global WiFi network.
                      IUNGO Network believes that internet access is a basic
                      human right and will empower consumers in both emerging
                      and developed markets while providing monetization
                      opportunities to individuals and to businesses of all
                      sizes. “We are delighted to have taken a strategic
                      decision to join the DataBroker DAO Alliance and to have
                      access to their emerging data marketplace”, says IUNGO CEO
                      Ricardas Bernotavicius. “This provides an additional
                      potential future monetization option for IUNGO business
                      customers and consumers. Additionally, there are strong
                      future synergies from a technical perspective that can
                      benefit both projects as we execute along our respective
                      roadmaps.”
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-2 modal-instance zooming-logo">
              <a
                name="Actility"
                className="modal-trigger"
                style={{ cursor: 'pointer' }}
              >
                <img src={LogoActility} alt="Actility" />
              </a>
              <div className="modal-container">
                <div className="modal-content">
                  <div className="boxed boxed--border">
                    <h2>Actility</h2>
                    <p>
                      Actility is at the forefront of the Internet of Things,
                      connecting the industrial IoT on a global scale by
                      combining in-depth industry knowledge, a world-leading IoT
                      technology platform and a fast-growing network of partners
                      to help companies make their business more efficient and
                      more sustainable. Customers all around the world are using
                      ThingPark, Actility’s carrier-grade solution, to manage
                      their IoT networks.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-2 modal-instance zooming-logo">
              <a
                name="Reekoh_logo"
                className="modal-trigger"
                style={{ cursor: 'pointer' }}
              >
                <img src={LogoReekoh} alt="Digital Town" />
              </a>
              <div className="modal-container">
                <div className="modal-content">
                  <div className="boxed boxed--border">
                    <h2>Reekoh</h2>
                    <p>
                      Purpose-built for the Internet of Things, Reekoh is an
                      integration fabric that brings together all your IoT
                      devices, networks, data and enterprise systems. Fast to
                      set up and agile to work with, it’s a highly scalable
                      platform that securely ingests, messages and delivers data
                      between devices and applications. Their IoT Fabric is
                      helping enterprises to rapidly take control of their
                      fragmented IoT solutions, unlock the full value of their
                      data, and build capability for the future, whilst their
                      Dashboard Studio allows you to create fast, shareable
                      dashboards to get a visual handle on your IoT and open
                      data.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row align-center">
            <div className="col-sm-4" />

            <div className="col-sm-2 modal-instance zooming-logo">
              <a
                name="Aerodyne"
                className="modal-trigger"
                style={{ cursor: 'pointer' }}
              >
                <img src={Logoaerodyne} alt="Digital Town" />
              </a>
              <div className="modal-container">
                <div className="modal-content">
                  <div className="boxed boxed--border">
                    <h2>Aerodyne</h2>
                    <p>
                      Aerodyne is a drone-based managed solutions provider with
                      offices in Australia, Malaysia, Singapore, Brunei, USA,
                      UAE, Saudi Arabia, Indonesia, Denmark and the United
                      Kingdom, boasting an industry-leading number of 35,000
                      flight operations and more than 100,000 infrastructure
                      assets inspected in 2017. Aerodyne’s unique DaaS model
                      (Drone-as-a-Service) has numerous benefits for companies
                      that would like to start working with drones, but don’t
                      want to have anything to do with all the hassle that comes
                      with it. In combination with a user-friendly SaaS
                      solution, these cost-effective aerial capabilities can be
                      a game changer for companies active in areas like mining,
                      agriculture, surveillance and environmental management.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-2 modal-instance zooming-logo">
              <a
                name="Digitalworx"
                className="modal-trigger"
                style={{ cursor: 'pointer' }}
              >
                <img src={Logodigitalworx} alt="Digitalworx" />
              </a>
              <div className="modal-container">
                <div className="modal-content">
                  <div className="boxed boxed--border">
                    <h2>Digitalworx</h2>
                    <p>
                      Digitalworx, based in Stuttgart, rightly calls itself a
                      ‘software developer for a connected world’, creating all
                      kinds of innovative digital products for industry, medical
                      applications and trade. They develop apps for iOS, Android
                      and Smart Watches, use Beacons to connect smartphones and
                      the Internet of Things and create space for new
                      application worlds and business processes for the IoT. And
                      as one of the pioneers of Internet 4.0 they lead clients
                      to the next step of digital evolution.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*<div className="col-sm-2 zooming-logo">
              <img src={LogoDspvalley} alt="DSP Valley" />
  </div>*/}
          {/*<div className="col-sm-2 zooming-logo">
              <img src={LogoIkusi} alt="Ikusi" />
</div>*/}
          {/*<div className="col-sm-2 zooming-logo">
              <img src={LogoSigfox} alt="Sigfox" />
  </div>*/}
          {/*<div className="col-sm-2 zooming-logo">
              <img src={LogoSket} alt="Sket" />
</div>*/}
          {/*<div className="col-sm-2 zooming-logo">
              <img src={LogoCityseeders} alt="City Seeders" />
</div>*/}
          {/*<div className="col-sm-2 zooming-logo">
              <img src={LogoBreezometer} alt="Breezometer" />
</div>*/}
          {/*<div className="col-sm-2 zooming-logo">
              <img src={LogoArinti} alt="Arinti" />
</div>*/}
          {/*<div className="col-sm-2 zooming-logo">
              <img src={LogoIntellegant} alt="Intellegant" />
</div>*/}
          {/*<div className="col-sm-2 zooming-logo">
              <img src={LogoActility} alt="Actility" />
</div>*/}

          {/*<div className="col-sm-2 zooming-logo">
              <img src={LogoTurck} alt="Turck" />
  </div>*/}
          {/*<div className="col-sm-2 zooming-logo">
              <img src={LogoXterconnect} alt="XterConnect" />
</div>*/}
          <div className="row align-center" style={{ marginTop: '50px' }}>
            <a
              name="joinalliance"
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
