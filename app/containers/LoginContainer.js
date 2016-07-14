import { connect } from 'react-redux'
import Login from '../components/Login'
import { addDeck, fetchDecks, fillRandomUser } from '../actions/actions'

const mapStateToProps = (state) => {
  return {
    session: state.session
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addDeck: (deck) => dispatch(addDeck(deck)),
    fetchDecks: (userID) => dispatch(fetchDecks(userID)),
    fillRandomUser: () => dispatch(fillRandomUser())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
