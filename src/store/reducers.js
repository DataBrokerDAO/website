import { combineReducers } from 'redux'

// include only reducer in the main bundle
import formReducer from 'redux-form/es/reducer'
import { routerReducer } from 'react-router-redux'

import { MIDDLE_CONTENT_MOUNTED, BOTTOM_CONTENT_MOUNTED } from './actions'

const appStateReducer = (state = {}, { type: action }) => {
  const reducers = {
    [MIDDLE_CONTENT_MOUNTED]: state => ({
      ...state,
      middleContentMounted: true,
    }),
    [BOTTOM_CONTENT_MOUNTED]: state => ({
      ...state,
      bottomContentMounted: true,
    }),
  }

  return reducers[action] ? reducers[action](state) : state
}

const makeRootReducer = () => {
  return combineReducers({
    router: routerReducer,
    form: formReducer,
    appState: appStateReducer,
  })
}

/**
 * Modules export an injector so that keys cannot get mixed up.
 */
export function makeReducerInjector(key, reducer) {
  return store => {
    store.asyncReducers[key] = reducer
    store.replaceReducer(makeRootReducer(store.asyncReducers))
  }
}

export default makeRootReducer
