import React from 'react'
import {connect} from 'react-redux'
import {next} from './../actions/NovelActions'
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
    test: state.novel.test
  }
}

function mapDispatchToProps (dispatch) {
  return {
    next: () => {
      dispatch(next())
    }
  }
}

export const NovelContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NovelPage)
