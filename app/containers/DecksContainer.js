

import { connect } from 'react-redux'
import Decks from '../components/Decks'

function mapStateToProps (state) {
  return {
    decks: state.decks
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addDeck: (route) => dispatch({
        type: 'ADD_DECK',
        id: 'some cool ID',
        text: 'some text'
    })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Decks)
