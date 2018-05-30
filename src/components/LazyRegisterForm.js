import React from 'react'
import { asyncReactor } from 'async-reactor'

import SectionLoader from './SectionLoader'

const Lazy = async props => {
  const {
    ['default']: RegisterForm,
  } = await import(/* webpackChunkName: 'lazy.forms' */ './RegisterForm')

  return <RegisterForm {...props} />
}

function Loader() {
  return <SectionLoader />
}

export default asyncReactor(Lazy, Loader)
