import React from 'react'
import NavLink from './NavLink.jsx'

export default React.createClass({
  propTypes: {
    children: React.PropTypes.element
  },
  render: function () {
    return (
      <div>
        <ul>
          <li>React Novel</li>
          <li><NavLink to='/' activeStyle={{ color: 'red' }}>Home</NavLink></li>
        </ul>

        {this.props.children}
      </div>
    )
  }
})
