

import { connect } from 'react-redux'
import NavBar from '../components/NavBar'
import { addDeck } from '../actions/actions'

const mapStateToProps = (state) => {
  return {
    ownDeck: state.ownDeck,
    decks: state.decks
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addDeck: (deck) => dispatch(addDeck(deck))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar)
