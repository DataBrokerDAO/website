import React, { Component } from 'react'
import { asyncReactor } from 'async-reactor'
import { connect } from 'react-redux'

import SectionLoader from './SectionLoader'
import { BOTTOM_CONTENT_MOUNTED } from '../store/actions'

const Lazy = async () => {
  const modules = await Promise.all([
    import(/* webpackChunkName: 'lazy.btm' */ './sections/jobs'),
    import(/* webpackChunkName: 'lazy.btm' */ './sections/channels'),
    import(/* webpackChunkName: 'lazy.btm' */ './sections/footer'),
    import(/* webpackChunkName: 'lazy.btm' */ './sections/cta'),
    import(/* webpackChunkName: 'lazy.btm' */ './sections/team'),
    import(/* webpackChunkName: 'lazy.btm' */ './sections/press'),
    import(/* webpackChunkName: 'lazy.btm' */ './sections/events'),
    import(/* webpackChunkName: 'lazy.btm' */ './sections/alliance'),
    import(/* webpackChunkName: 'lazy.btm' */ './sections/benefits'),
    import(/* webpackChunkName: 'lazy.btm' */ '../components/sections/roadmap'),
  ]).catch(console.log)
  const [
    JobsSection,
    ChannelsSection,
    Footer,
    CTASection,
    TeamSection,
    PressSection,
    EventsSection,
    AllianceSection,
    BenefitsSection,
    RoadmapSection,
  ] = modules.map(module => module.default)

  const BottomSection = class extends Component {
    componentDidMount() {
      this.props.dispatch({
        type: BOTTOM_CONTENT_MOUNTED,
      })
    }

    render() {
      return (
        <React.Fragment>
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
        </React.Fragment>
      )
    }
  }

  return connect()(BottomSection)
}

function Loader() {
  return <SectionLoader />
}

export default asyncReactor(Lazy, Loader)
