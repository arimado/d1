import { connect } from 'react-redux'
import Signup from '../components/Signup'
import { addDeck, fetchDecks, updateSignUpName, updateSignUpAge, updateSignUpPassword } from '../actions/actions'

const mapStateToProps = (state) => {
  return {
    session: state.session
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateSignUpName: (value) => dispatch(updateSignUpName(value)),
    updateSignUpAge: (value) => dispatch(updateSignUpAge(value)),
    updateSignUpPassword: (value) => dispatch(updateSignUpPassword(value)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup)
