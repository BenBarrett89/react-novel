import React from 'react'
import {Link} from 'react-router'

export default React.createClass({
  render: function () {
    return <Link {...this.props} activeStyle={{ color: 'red' }} />
    // activeClassName attribute also exists for when changing to use CSS
  }
}
)
