import React from 'react'
import { render } from 'react-dom'
import routes from './modules/routes'
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'

var frozenui = require('./bower_components/frozenui/dist/css/frozen.css')

let store = createStore(todoApp)

render(
  <Provider store={store}>
      <Router routes={routes} history={browserHistory}/>
  </Provider>,
  document.getElementById('app')
)
