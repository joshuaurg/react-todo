import React from 'react'
import {Link} from 'react-router'
import FilterLink from '../container/FilterLink'
export default React.createClass({
  render() {
    return (
      <div style={{marginTop:'40px'}}>
      <p>
        Show:
        {" "}
        <FilterLink filter="SHOW_ALL">
          All
        </FilterLink>
        {", "}
        <FilterLink filter="SHOW_ACTIVE">
          Active
        </FilterLink>
        {", "}
        <FilterLink filter="SHOW_COMPLETED">
          Completed
        </FilterLink>
      </p>
        <footer className="ui-footer ui-footer-btn">
            <ul className="ui-tiled ui-border-t" role="nav">
                <li className="ui-border-r"><div><Link to="/">首页</Link></div></li>
                <li className="ui-border-r"><div><Link to="/todo">未开始</Link></div></li>
                <li className="ui-border-r"><div><Link to="/doing">进行中</Link></div></li>
                <li className="ui-border-r"><div><Link to="/done">已完成</Link></div></li>
            </ul>
        </footer>
        {this.props.children}
      </div>
    )
  }
})
