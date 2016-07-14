

import { connect } from 'react-redux'
import Routes from '../config/Routes'
import {
    fetchDecks,
    addDeck,
    addQuestion
} from '../actions/actions'

function mapStateToProps (state) {
  return {
    navigation: state.navigation,
    state: state.decks
  }
}

function mapDispatchToProps (dispatch) {
  return {
    pushRoute: (route) => dispatch({
        type: 'PUSH_ROUTE',
        route: route
    }),
    popRoute: () => dispatch({
        type: 'POP_ROUTE'
    }),
    fetchDecks: (userID) => {dispatch(fetchDecks(userID))},
    addDeck: deck => dispatch(addDeck(deck)),
    addQuestion: question => dispatch(addQuestion(question)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Routes)
