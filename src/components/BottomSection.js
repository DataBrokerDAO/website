import React from 'react'
import { asyncReactor } from 'async-reactor'
import SectionLoader from './SectionLoader'


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

  return (
    <div>
      <BenefitsSection/>
      <CTASection/>
      <AllianceSection/>
      <CTASection/>
      <RoadmapSection/>
      <CTASection/>
      <EventsSection/>
      <CTASection/>
      <PressSection/>
      <CTASection/>
      <TeamSection/>
      <CTASection/>
      <JobsSection/>
      <ChannelsSection/>
      <Footer/>
    </div>
  )
}


function Loader() {
  return (
    <SectionLoader />
  )
}


export default asyncReactor(Lazy, Loader)
