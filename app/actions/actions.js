import axios from 'axios';
import {randomNumber, randomAge, randomName} from '../util/util'


const server = 'http://localhost:3005/'
// const server = 'http://d1s.herokuapp.com/'
// const server ='https://31127563.ngrok.io/'

export const SELECT_DECK = 'SELECT_DECK';

export const selectDeck = (deckID) => {
    return {
          type: SELECT_DECK,
        deckID: deckID
    }
}

export const DESELECT_ANSWERS = 'DESELECT_ANSWERS';

export const deselectAnswers = (questionID) => {
    return {
        type: DESELECT_ANSWERS,
        questionID: questionID
    }
}

export const SELECT_ANSWER = 'SELECT_ANSWER';

export const selectAnswer = (answerID, questionID) => {
    return {
        type: SELECT_ANSWER,
        answerID: answerID,
        questionID: questionID
    }
}

export const CHECK_DECK = 'CHECK_DECK';

export const finishDeck = (deckID) => {
    return {
        type: CHECK_DECK,
        id: deckID
    }
}

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
        return axios.get(server + 'api/decks')
                    .then(res => {
                        console.log('axios successfully made a request');
                        // add isCorrect, isSelected booleans to answer collection
                        // const addSelectedCorrectBoolsToAnswers = (data) => {
                        //
                        //     let modifiedAnswers = data.answers.map((answer) => {
                        //         return {
                        //             ...answer,
                        //             isCorrect: false,
                        //             isSelected: false
                        //         }
                        //     })
                        //
                        //     return {
                        //         decks: data.decks,
                        //         questions: data.questions,
                        //         answers: modifiedAnswers
                        //     }
                        // }
                        //
                        // let modifiedData = addSelectedCorrectBoolsToAnswers(res.data)

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

export const submitDeck = (deck, done) => {
    return (dispatch) => {
        // activate spinner
        dispatch(postDeck(deck))
        return axios.post(server + 'api/decks', deck)
                    .then(res => {
                        console.log('axios recieved something')
                        dispatch(postDeckSuccess(deck))
                        if (done) { done(); }
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
            userID: deck.userID,
            color: deck.color
        }
    }
}

export const DESELECT_CORRECT = 'DESELECT_CORRECT';

export const deselectCorrect = ( questionID ) => {
    return {
        type: DESELECT_CORRECT,
        id: questionID
    }
}

export const SELECT_CORRECT = 'SELECT_CORRECT';

export const selectCorrect = ( answerID ) => {
    return {
        type: SELECT_CORRECT,
        id: answerID
    }
}


export const ADD_ANSWER = 'ADD_ANSWER';

export const addAnswer = ( answer ) => {
    return {
        type: ADD_ANSWER,
        answer: {
                    id: answer.id,
            questionID: answer.questionID,
               content: answer.content,
            isSelected: false,
             isCorrect: false
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

export const updateColor = ( colorNum, deckID ) => {
    return {
        type: 'UPDATE_COLOR',
        deckID: deckID,
        color: colorNum
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


// SIGNUP PAGE -----------------------------------------------------------------

export const POST_USER = 'POST_USER'

export const postUser = (users) => {
  return {
    type: POST_USER,
  }
}

export const POST_USER_SUCCESS = 'POST_USER_SUCCESS'

export const postUserSuccess = (users) => {
  return {
    type: POST_USER_SUCCESS,
    users: users
  }
}

export const submitUser = (users, done) => {
    return (dispatch) => {
        // activate spinner
        dispatch(postUser(users))
        return axios.post(server + 'api/users', users)
                    .then(res => {
                        console.log('axios recieved something')
                        dispatch(postUserSuccess(users))
                        done();
                    })
                    .catch(error => console.log('error: ', error))
    }

}


export const FILL_RANDOM_USER = 'FILL_RANDOM_USER'

export const fillRandomUser = () => {
    return {
        type: FILL_RANDOM_USER,
        user: {
            id: randomNumber(),
            name: randomName(),
            age: randomAge() + '',
            password: 'chicken'
        }
    }
}

export const UPDATE_SIGNUP_NAME = 'UPDATE_SIGNUP_NAME';

export const updateSignUpName = (value) => {
    return {
        type: UPDATE_SIGNUP_NAME,
     content: value
    }
}

export const UPDATE_SIGNUP_AGE = 'UPDATE_SIGNUP_AGE';

export const updateSignUpAge = (value) => {
    return {
        type: UPDATE_SIGNUP_AGE,
     content: value
    }
}

export const UPDATE_SIGNUP_PASSWORD = 'UPDATE_SIGNUP_PASSWORD';

export const updateSignUpPassword = (value) => {
    return {
        type: UPDATE_SIGNUP_PASSWORD,
     content: value
    }
}

// MODAL PAGE -----------------------------------------------------------------

export const showModal = (message) => {
    return {
        type: 'SHOW_MODAL',
     message: message
    }
}

export const hideModal = (message) => {
    return {
        type: 'HIDE_MODAL',
     message: message
    }
}
