

import { connect } from 'react-redux'
import Decks from '../components/Decks'
import CreateDeck from '../components/CreateDeck'
import { submitDeck, addQuestion, addAnswer} from '../actions/actions'

const mapStateToProps = (state) => {
  return {
    ownDeck: state.ownDeck,
    decks: state.decks
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitDeck: (deck) => dispatch(submitDeck(deck)),
    addQuestion: (question) => dispatch(addQuestion(question)),
    addAnswer: (answer) => dispatch(addAnswer(answer))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateDeck)
