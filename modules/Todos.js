import React from 'react'
import {Link} from 'react-router'
import VisibleTodoList from './VisibleTodoList'

var frozenui = require('../bower_components/frozenui/dist/css/frozen.css')

export default React.createClass({
  render() {
    return <div>
    <header className="ui-header ui-header-positive ui-border-b">
        <Link to='/'><i className="ui-icon-return"></i></Link>
        <h1>任务列表</h1>
        <Link to='/addTodo'><button className="ui-btn">添加</button></Link>
    </header>
    <VisibleTodoList />
    </div>
  }
})
