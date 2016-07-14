

import { connect } from 'react-redux'
import ShowDeck from '../components/ShowDeck'
import {
    fetchDecks,
    selectDeck,
    selectAnswer,
    deselectAnswers,
    showModal
} from '../actions/actions'

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
    selectAnswer: (answerID, questionID) => { dispatch(selectAnswer(answerID, questionID)) },
    deselectAnswers: (questionID) => { dispatch(deselectAnswers(questionID)) },
    checkDeck: (deckID) => { dispatch(checkDeck(deckID)) },
    showModal: message => {dispatch(showModal(message))}
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowDeck)
