

import { connect } from 'react-redux'
import Decks from '../components/Decks'
import CreateDeck from '../components/CreateDeck'
import { submitDeck } from '../actions/actions'

const mapStateToProps = (state) => {
  return {
    ownDeck: state.ownDeck
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitDeck: (deck) => dispatch(submitDeck(deck))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateDeck)
