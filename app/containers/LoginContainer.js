import { connect } from 'react-redux'
import Login from '../components/Login'
import { addDeck, fetchDecks } from '../actions/actions'

const mapStateToProps = (state) => {
  return {
    session: state.session
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addDeck: (deck) => dispatch(addDeck(deck)),
    fetchDecks: (userID) => dispatch(fetchDecks(userID))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
