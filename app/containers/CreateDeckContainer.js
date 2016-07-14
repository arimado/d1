

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
    showModal
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
    submitDeck: deck => dispatch(submitDeck(deck)),
    addQuestion: question => dispatch(addQuestion(question)),
    addAnswer: answer => dispatch(addAnswer(answer)),
    updateAnswer: answer => dispatch(updateAnswer(answer)),
    updateQuestion: question => dispatch(updateQuestion(question)),
    deselectCorrect: questionID => dispatch(deselectCorrect(questionID)),
    selectCorrect: answerID => dispatch(selectCorrect(answerID)),
    showModal: message => dispatch(showModal(message))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateDeck)
