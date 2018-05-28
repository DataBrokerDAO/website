import React from 'react'
import ReactDOMServer from 'react-dom/server'
import TokenSale from './components/TokenSale'

export const prerender = () => ReactDOMServer
  .renderToString(<TokenSale/>)
