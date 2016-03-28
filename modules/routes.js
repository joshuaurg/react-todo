import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import Todos from './Todos'
import Doings from './Doings'
import Dones from './Dones'
import AddTodo from './AddTodo'
import App from './App'
import Home from './Home'

module.exports = (
  <Route path="/" component={App}>
    <Route path="/todo" component={Todos}/>
    <Route path="/addTodo" component={AddTodo}/>
    <Route path="/doing" component={Doings}/>
    <Route path="/done" component={Dones}/>
  </Route>
)
