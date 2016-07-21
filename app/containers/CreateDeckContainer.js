

import { connect } from 'react-redux'
import Decks from '../components/Decks'
import CreateDeck from '../components/CreateDeck'
import {
    submitDeck,
    addQuestion,
    addAnswer,
    updateAnswer,
    updateQuestion,
    deselectCorrect,
    selectCorrect,
    showModal,
    addDeck,
    updateColor
} from '../actions/actions'

const mapStateToProps = (state) => {
  return {
    requests: state.requests,
    decks: state.decks,
    session: state.session
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitDeck: (deck, done) => dispatch(submitDeck(deck, done)),
    addQuestion: question => dispatch(addQuestion(question)),
    addAnswer: answer => dispatch(addAnswer(answer)),
    updateAnswer: answer => dispatch(updateAnswer(answer)),
    updateQuestion: question => dispatch(updateQuestion(question)),
    deselectCorrect: questionID => dispatch(deselectCorrect(questionID)),
    selectCorrect: answerID => dispatch(selectCorrect(answerID)),
    showModal: message => dispatch(showModal(message)),
    addDeck: deck => dispatch(addDeck(deck)),
    updateColor: (color, deckID) => dispatch(updateColor(color, deckID))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateDeck)
