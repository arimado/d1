

import { connect } from 'react-redux'
import Decks from '../components/Decks'
import { fetchDecks } from '../actions/actions'

function mapStateToProps (state) {
  return {
    decks: state.decks
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchDecks: (userID) => {  dispatch(fetchDecks(userID)) }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Decks)
