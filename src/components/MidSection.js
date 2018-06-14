import React, { Component } from 'react'
import { asyncReactor } from 'async-reactor'
import { connect } from 'react-redux'

import SectionLoader from './SectionLoader'
import { MIDDLE_CONTENT_MOUNTED } from '../store/actions'

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
  const MiddleSection = class extends Component {
    componentDidMount() {
      this.props.dispatch({
        type: MIDDLE_CONTENT_MOUNTED,
      })
    }

    render() {
      return (
        <React.Fragment>
          <TokenSaleSection />
          <ChallengeSection />
          <CTASection />
          <SolutionSection />
          <BetaSection />
          <StakingSection />
        </React.Fragment>
      )
    }
  }

  return connect()(MiddleSection)
}

function Loader() {
  return <SectionLoader />
}

export default asyncReactor(Lazy, Loader)
