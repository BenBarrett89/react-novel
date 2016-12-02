import React from 'react'

export default React.createClass({
  render () {
    return (
      <div>
        <h3>Novel</h3>
        <p>{this.props.test}</p>
      </div>
    )
  }
})
