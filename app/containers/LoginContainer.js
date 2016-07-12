

import { connect } from 'react-redux'
import Login from '../components/Login'
import { addDeck } from '../actions/actions'

const mapStateToProps = (state) => {
  return {
    session: state.session
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addDeck: (deck) => dispatch(addDeck(deck)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
