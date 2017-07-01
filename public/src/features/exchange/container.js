import React from 'react'
import { connect } from 'react-redux'
import RangeSlider from 'features/exchange/components/RangeSlider'
import Container from 'muicss/lib/react/container'
import Row from 'muicss/lib/react/row'
import Col from 'muicss/lib/react/col'
import Panel from 'muicss/lib/react/panel'
import CurrencyList from 'features/exchange/components/CurrencyList'
export class ExchangeContainer extends React.Component {

  constructor () {
    super()
    this.state = {
      range: [1, 10]
    }
    this.handleRangeChange = this.handleRangeChange.bind(this)
  }

  handleRangeChange (range) {
    console.log('--- handleRangeChange')
    this.setState({range})
  }

  render () {
    return (
      <Container fluid>
        <Row>
          <Col xs='10' xs-offset='1' md='6' md-offset='3'>
            <Panel>
              Exchange Container 1
              <div>
                <RangeSlider
                  onChange={this.handleRangeChange}
                  value={this.state.range}
                />
              </div>
            </Panel>
            <Panel>
              <CurrencyList />
            </Panel>
          </Col>
        </Row>
      </Container>
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

export default connect(mapStateToProps, mapDispatchToProps)(ExchangeContainer)
