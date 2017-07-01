import React from 'react'
import Button from 'muicss/lib/react/button'
import Container from 'muicss/lib/react/container'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

export class FeatureContainer extends React.Component {
  render () {
    return (
      <div>
        <Container>
          <h2>Home route <em>1</em><br />
            <sub>hint: change number to see HRM in action</sub>
          </h2>
          <br />
          <p>Source file is located at: <pre>public/src/features/home/container</pre></p>
          <Link to='/exchange'><Button color='primary'>go to /Exchange</Button></Link>
        </Container>
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
