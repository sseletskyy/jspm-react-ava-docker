import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadCurrencies } from 'features/exchange/module/actions'
// Import actions here!!

export class CurrencyList extends Component {

  componentDidMount () {
    this.props.loadCurrencies()
  }

  renderList (currencies) {
    if (!currencies || currencies.length === 0) {
      return <li>-</li>
    }
    return currencies.map(item => <li key={item}>{item}</li>)
  }

  render () {
    const { currencies } = this.props

    return (
      <div>
        <header>List of currencies</header>
        <ul>
          {this.renderList(currencies)}
        </ul>
      </div>
    )
  }
}

CurrencyList.propTypes = {
  currencies: PropTypes.array.isRequired,
  loadCurrencies: PropTypes.func.isRequired
}

function mapStateToProps (state, ownProps) {
  return {
    currencies: state.exchange.currencies
  }
}

function mapDispatchToProps (dispatch) {
  return {
    loadCurrencies: () => dispatch(loadCurrencies())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyList)
