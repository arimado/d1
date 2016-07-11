

import { connect } from 'react-redux'
import Routes from '../config/Routes'

function mapStateToProps (state) {
  return {
    navigation: state.navigation
  }
}

function mapDispatchToProps (dispatch) {
  return {
    pushRoute: (route) => dispatch({
        type: 'PUSH_ROUTE',
        route: route
    }),
    popRoute: () => dispatch({
        type: 'POP_ROUTE'
    })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Routes)
