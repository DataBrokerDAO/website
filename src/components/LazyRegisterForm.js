import React from 'react'
import { asyncReactor } from 'async-reactor'

const Lazy = async (props) => {
  const { ['default']: RegisterForm } =
    await import(/* webpackChunkName: 'lazy.forms' */ './RegisterForm')


  return (
    <RegisterForm upcoming={true} language={'en'}/>
  )
}


function Loader() {
  return (
    <span></span>
  )
}

export default asyncReactor(Lazy, Loader)
