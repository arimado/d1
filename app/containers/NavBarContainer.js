

import { connect } from 'react-redux'
import NavBar from '../components/NavBar'
import {
    addDeck,
    addQuestion,
    addAnswer,
    showModal
} from '../actions/actions'

const mapStateToProps = (state) => {
  return {
    ownDeck: state.ownDeck,
    decks: state.decks,
    session: state.session,
    navigation: state.navigation
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addDeck: (deck) => dispatch(addDeck(deck)),
    addQuestion: (question) => dispatch(addQuestion(question)),
    addAnswer: (question) => dispatch(addAnswer(answer)),
    showModal: message => dispatch(showModal(message))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar)
