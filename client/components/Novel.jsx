import React from 'react'

export default React.createClass({
  propTypes: {
    itemNumber: React.PropTypes.number,
    onNext: React.PropTypes.func,
    onPrevious: React.PropTypes.func
  },
  render: function () {
    return (
      <div>
        <h3>Novel</h3>
        <p>{this.props.itemNumber}</p>
        <button onClick={() => this.props.onPrevious()}>Previous</button>
        <button onClick={() => this.props.onNext()}>Next</button>
      </div>
    )
  }
})
