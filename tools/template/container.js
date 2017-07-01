import React from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class FeatureContainer extends React.Component {
  render () {
    return (
      <div>
        FeatureContainer
      </div>
    )
  }
}

export const mapStateToProps = (state, props) => ({
  test: 'test'
})

export const mapDispatchToProps = (dispatch, props) => ({
  testMethod (id = null) {
  },
  dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(FeatureContainer)
