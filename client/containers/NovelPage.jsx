import React from 'react'
import {connect} from 'react-redux'
import {next, previous} from './../actions/NovelActions'
import Novel from './../components/Novel.jsx'

export const NovelPage = React.createClass({
  render: function () {
    return (
      <div>
        <Novel {...this.props} />
      </div>
    )
  }
})

function mapStateToProps (state) {
  return {
    itemNumber: state.novel.itemNumber
  }
}

function mapDispatchToProps (dispatch) {
  return {
    onNext: () => {
      dispatch(next())
    },
    onPrevious: () => {
      dispatch(previous())
    }
  }
}

export const NovelContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NovelPage)
