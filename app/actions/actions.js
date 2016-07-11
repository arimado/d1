import axios from 'axios';

export const POST_DECK = 'POST_DECK'

export const postDeck = (deck) => {
  return {
    type: POST_DECK,
  }
}

export const POST_DECK_SUCCESS = 'POST_DECK_SUCCESS'

export const postDeckSuccess = (deck) => {
  return {
    type: POST_DECK_SUCCESS,
    deck: deck
  }
}

export const submitDeck = (deck) => {
    return (dispatch) => {
        // activate spinner
        dispatch(postDeck(deck))

        return axios.post('http://localhost:3005/api/decks', deck)
                    .then(res => {
                        console.log('axios recieved something')
                        dispatch(postDeckSuccess(deck))
                    })
                    .catch(error => console.log('error: ', error))

    }

}


export const ADD_DECK = 'ADD_DECK';

export const addDeck = ( deck ) => {
    return {
        type: ADD_DECK,
        deck: {
            id: deck.id,
            userID: deck.userID
        },
        question: {
            id: deck.questionID,
            deckID: deck.id,
        }
    }
}

export const ADD_QUESTION = 'ADD_QUESTION';

export const addQuestion = ( question ) => {
    return {
        type: ADD_QUESTION,
        question: question
    }
}




// export const REQUEST_DECKS = 'REQUEST_DECKS'
//
// export function requestPosts(decks) {
//   return {
//     type: REQUEST_DECKS,
//     decks
//   }
// }
//
// export const RECEIVE_DECKS = 'RECEIVE_DECKS'
//
// export function receivePosts(decks, json) {
//   return {
//     type: RECEIVE_POSTS,
//     decks,
//     posts: json.data.children.map(child => child.data),
//     receivedAt: Date.now()
//   }
// }
