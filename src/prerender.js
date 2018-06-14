import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import TokenSale from './components/TokenSale'

const store = createStore(s => s, {})

export const prerender = () =>
  ReactDOMServer.renderToString(
    <Provider store={store}>
      <TokenSale />
    </Provider>
  )
