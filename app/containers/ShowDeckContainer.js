

import { connect } from 'react-redux'
import ShowDeck from '../components/ShowDeck'
import { fetchDecks, selectDeck } from '../actions/actions'

function mapStateToProps (state) {
  return {
    decks: state.decks,
    session: state.session
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchDecks: (userID) => { dispatch(fetchDecks(userID)) },
    selectDeck: (deckID) => { dispatch(selectDeck(deckID)) }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowDeck)
