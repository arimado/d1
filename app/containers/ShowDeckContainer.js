

import { connect } from 'react-redux'
import ShowDeck from '../components/ShowDeck'
import { fetchDecks, selectDeck, selectAnswer } from '../actions/actions'

function mapStateToProps (state) {
  return {
    decks: state.decks,
    session: state.session
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchDecks: (userID) => { dispatch(fetchDecks(userID)) },
    selectDeck: (deckID) => { dispatch(selectDeck(deckID)) },
    selectAnswer: (answerID) => { dispatch(selectAnswer(answerID)) }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowDeck)
