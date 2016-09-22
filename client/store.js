import { createStore, compose } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'

// import the root reducer
import rootReducer from './reducers/index'

import comments from './data/comments'
import posts from './data/posts'

// create an object for default data
const defaultState = {
  posts,
  comments
}

// Redux Dev Tools
const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

// dont need to do if the key and value both match 
// const defaultState = {
//     posts       : posts,
//     comments    : comments
// }

const store = createStore(
  rootReducer,
  defaultState,
  enhancers
)

export const history = syncHistoryWithStore(
  browserHistory,
  store
)

// Hot reloading Redux Reducers with webpack
if (module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default
    store.replaceReducer(nextRootReducer)
  })
}

export default store