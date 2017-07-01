import React from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { reduxForm, change } from 'redux-form'

const EXCHANGE_FORM = 'exchange_form'
class FilterForm extends React.Component {
  render () {
    return (
      <form>
        <div className='filter-content'>
          <h4>Parameters</h4>
        </div>
      </form>
    )
  }
}

// FilterForm.propTypes = {
//  onSubmit: PropTypes.func.isRequired,
//  reset: PropTypes.func,
//  initialValues: PropTypes.object,
//  filterValues: PropTypes.object,
//  filters: PropTypes.object,
//  visualizationColumns: PropTypes.array,
// };

// decorate with redux-form
const ReduxFilterForm = reduxForm({
  form: EXCHANGE_FORM
})(FilterForm)

const ConnectFilterForm = connect(
  state => ({
    // initialValues: state.insights.parametersForm,
    // filterValues: getFilterValues(state),
    // filters: getFilters(state),
    // visualizationColumns: getVisualizationColumns(state),
  }),
  dispatch => ({
    saveFormValue: (field, value) => dispatch(change(EXCHANGE_FORM, field, value))
  })
)(ReduxFilterForm)

export default ConnectFilterForm
