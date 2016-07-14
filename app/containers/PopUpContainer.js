

import { connect } from 'react-redux'
import PopUp from '../components/PopUp'
import { addDeck, addQuestion, addAnswer, hideModal, showModal } from '../actions/actions'

const mapStateToProps = (state) => {
  return {
    ownDeck: state.ownDeck,
    decks: state.decks,
    session: state.session
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addDeck: (deck) => dispatch(addDeck(deck)),
    addQuestion: (question) => dispatch(addQuestion(question)),
    addAnswer: (question) => dispatch(addAnswer(answer)),
    hideModal: () => dispatch(hideModal()),
    showModal: (message) => dispatch(showModal(message))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PopUp)
