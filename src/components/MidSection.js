import React from 'react'
import { asyncReactor } from 'async-reactor'
import SectionLoader from './SectionLoader'

const Lazy = async () => {
  const modules = await Promise.all([
    import(/* webpackChunkName: 'lazy.mid' */ './sections/challenge'),
    import(/* webpackChunkName: 'lazy.mid' */ './sections/cta'),
    import(/* webpackChunkName: 'lazy.mid' */ './sections/solutions'),
    import(/* webpackChunkName: 'lazy.mid' */ './sections/beta'),
    import(/* webpackChunkName: 'lazy.mid' */ './sections/staking'),
    import(/* webpackChunkName: 'lazy.mid' */ '../components/sections/tokensale'),
  ]).catch(console.log)
  const [
    ChallengeSection,
    CTASection,
    SolutionSection,
    BetaSection,
    StakingSection,
    TokenSaleSection,
  ] = modules.map(module => module.default)

  return (
    <div>
      <TokenSaleSection />
      <ChallengeSection />
      <CTASection />
      <SolutionSection />
      <BetaSection />
      <StakingSection />
    </div>
  )
}

function Loader() {
  return <SectionLoader />
}

export default asyncReactor(Lazy, Loader)
