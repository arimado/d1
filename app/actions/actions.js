import axios from 'axios';


export const GET_DECKS = 'GET_DECKS'

export const getDecks = (userID) => {
    return {
        type: GET_DECKS,
    }
}

export const GET_DECKS_SUCCESS = 'GET_DECKS_SUCCESS'

export const getDecksSuccess = (data) => {
    return {
        type: GET_DECKS_SUCCESS,
        data: data
    }
}

export const fetchDecks = (userID) => {
    return (dispatch) => {
        dispatch(getDecks(userID))
        return axios.get('http://localhost:3005/api/decks')
                    .then(res => {
                        console.log('axios successfully made a request');
                        console.log(`here's the response:`);
                        console.dir(res);
                        dispatch(getDecksSuccess(res.data))
                    })
                    .catch(error => console.log('error: ', error))
    }
}

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
        }
    }
}

export const ADD_ANSWER = 'ADD_ANSWER';

export const addAnswer = ( answer ) => {
    return {
        type: ADD_ANSWER,
        answer: {
                    id: answer.id,
            questionID: answer.questionID,
               content: answer.content
        }
    }
}


export const ADD_QUESTION = 'ADD_QUESTION';

export const addQuestion = ( question ) => {
    return {
        type: ADD_QUESTION,
        question: {
                    id: question.id,
                deckID: question.deckID
        }
    }
}


export const UPDATE_ANSWER = 'UPDATE_ANSWER';

export const updateAnswer = ( answer ) => {
    return { type: UPDATE_ANSWER,
        answer: {
                id: answer.id,
           content: answer.content
        }
    }
}

export const UPDATE_QUESTION = 'UPDATE_QUESTION';

export const updateQuestion = ( question ) => {
    return { type: UPDATE_QUESTION,
        question: {
                id: question.id,
           content: question.content
        }
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
