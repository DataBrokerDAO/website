import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { routerReducer } from 'react-router-redux'

const makeRootReducer = () => {
  return combineReducers({
    router: routerReducer,
    form: formReducer,
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
