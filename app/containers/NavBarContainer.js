

import { connect } from 'react-redux'
import NavBar from '../components/NavBar'
import { addDeck, addQuestion, addAnswer } from '../actions/actions'

const mapStateToProps = (state) => {
  return {
    ownDeck: state.ownDeck,
    decks: state.decks
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addDeck: (deck) => dispatch(addDeck(deck)),
    addQuestion: (question) => dispatch(addQuestion(question)),
    addAnswer: (question) => dispatch(addAnswer(answer)) 
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar)
