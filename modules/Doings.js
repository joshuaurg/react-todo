import React from 'react'
import {Link} from 'react-router'
export default React.createClass({
  render() {
    return <div>
    <header className="ui-header ui-header-positive ui-border-b">
        <Link to='/'><i className="ui-icon-return"></i></Link>
        <h1>进行中列表</h1>
    </header>
    </div>
  }
})
