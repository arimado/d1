/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, Text, NavigationExperimental } from 'react-native';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { connect, Provider } from 'react-redux';
import Thunk from 'redux-thunk';
import Logger from 'redux-logger'
import _ from 'lodash'

import { setValueOnEntities } from './app/util/util'

import RoutesContainer from './app/containers/RoutesContainer'

const {
  CardStack: NavigationCardStack,
  StateUtils: NavigationStateUtils
} = NavigationExperimental


// DECKS REDUCER ---------------------------------------

const deck = (state, action) => {
  switch (action.type) {
    case 'ADD_DECK':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    default:
      return state;
  }
};

const decks = (state = {
        isFetching: false,
        decks: [
        ],
        questions: [
        ],
        answers: [
        ],
        users: [

        ]
}, action) => {
    switch (action.type) {
        case 'GET_DECKS':
            return Object.assign({}, state, {
                isFetching: true
            })
        case 'GET_DECKS_SUCCESS':
            return Object.assign({}, state, {
                isFetching: false,
                decks: [
                    ...state.decks,
                    ...action.data.decks
                ],
                questions: [
                    ...state.questions,
                    ...action.data.questions
                ],
                answers: [
                    ...state.answers,
                    ...action.data.answers
                ]
            })
        case 'CHECK_DECK':
            return Object.assign({}, state, {})
        case 'DESELECT_ANSWERS':
            let deSelectedAnswers = state.answers.map((answer) => {
                if (answer.questionID === action.questionID) {
                    return Object.assign({}, answer, {
                        isSelected: false
                    })
                }
                return answer
            })

            return Object.assign({}, state, {
                answers: deSelectedAnswers
            })
        case 'SELECT_ANSWER':

            let i = _.findIndex(state.answers, {id: action.answerID})
            let selectedAnswer = state.answers[i];
            let updatedSelectedAnswer = Object.assign({}, selectedAnswer, {
                isSelected: !selectedAnswer.isSelected
            })

            return Object.assign({}, state, {
                answers: [
                    ...state.answers.slice(0, i),
                    updatedSelectedAnswer,
                    ...state.answers.slice(i + 1)
                ]
            })
        case 'DESELECT_CORRECT':

            let modifiedAnswers = setValueOnEntities( state.answers, 'questionID', action.id, { isCorrect: false })

            return Object.assign({}, state, {
                answers: modifiedAnswers
            })

        case 'SELECT_CORRECT':

            const setValueOnEntity = (entities, idObj, returnObj ) => {
                let i = _.findIndex(entities, idObj)
                let entity = entities[i];
                let updatedEntity = Object.assign({}, entity, returnObj(entity))
                return [
                    ...entities.slice(0, i),
                    updatedEntity,
                    ...entities.slice(i + 1)
                ]
            }

            let updatedCorrectWithAnswers = setValueOnEntity(state.answers, {id: action.id}, (answer) => {
                return {
                    isCorrect: !answer.isCorrect
                }
            } )

            return Object.assign({}, state, {
                answers: updatedCorrectWithAnswers
            })

        case 'ADD_DECK':
            return Object.assign({}, state, {
                decks: [
                    ...state.decks,
                    action.deck
                ]
            })
        case 'ADD_QUESTION':
            return Object.assign({}, state, {
                questions: [
                    ...state.questions,
                    action.question
                  ]
            })
        case 'ADD_ANSWER':
            return Object.assign({}, state, {
                answers: [
                    ...state.answers,
                    action.answer
                ]
            })
         case 'UPDATE_ANSWER':

            let answerIndex = _.findIndex(state.answers, {id: action.answer.id})
            let answerToUpdate = state.answers[answerIndex];
            let updatedAnswer = Object.assign({}, answerToUpdate, {
                content: action.answer.content
            })

            return Object.assign({}, state, {
                answers: [
                    ...state.answers.slice(0, answerIndex),
                    updatedAnswer,
                    ...state.answers.slice(answerIndex + 1)
                ]
            })
        case 'UPDATE_QUESTION':

            let questionIndex = _.findIndex(state.questions, {id: action.question.id})
            let questionToUpdate = state.questions[questionIndex];
            let updatedQuestion = Object.assign({}, questionToUpdate, {
                content: action.question.content
            })

            return Object.assign({}, state, {
                questions: [
                    ...state.questions.slice(0, questionIndex),
                    updatedQuestion,
                    ...state.questions.slice(questionIndex + 1)
                ]
            })

        default:
            return state;
    }
};



const requestsReducer = (state = {
    isFetching: false,
    isPosting: false,
    isPostingUser: false
}, action) => {
    switch (action.type) {
        case 'POST_DECK':
            return Object.assign({}, state, {
                isPosting: true
            })
        case 'POST_DECK_SUCCESS':
            return Object.assign({}, state, {
                isPosting: false
            })
        case 'POST_USER':
            return Object.assign({}, state, {
                isPostingUser: true
            })
        case 'POST_USER_SUCCESS':
            return Object.assign({}, state, {
                isPostingUser: false
            })
        default:
            return state;
    }
}

// SESSION REDUCER ---------------------------------------


const sessionReducer = (state = {
            userID: null,
            deckID: null,
    selectedDeckID: null,
        signUpPage: {
            name_field: '',
            password_field: '',
            age_field: '',
        },
        modalShow: false,
        modalMessage: 'default message'
}, action) => {
    switch (action.type) {
        case 'SHOW_MODAL':
            return Object.assign({}, state, {
                modalShow: true,
                modalMessage: action.message
            })
        case 'HIDE_MODAL':
            return Object.assign({}, state, {
                modalShow: false
            })
        case 'ADD_DECK':
            return Object.assign({}, state, {
                deckID: action.deck.id,
                userID: action.deck.userID
            })
        case 'SELECT_DECK':
            return Object.assign({}, state, {
                selectedDeckID: action.deckID
            })
        case 'FILL_RANDOM_USER':
            return Object.assign({}, state, {
                userID: action.user.id,
                signUpPage: {
                    name_field: action.user.name,
                    password_field: action.user.password,
                    age_field: action.user.age
                }
            })
        case 'UPDATE_SIGNUP_NAME':
            return Object.assign({}, state, {
                signUpPage: Object.assign({}, state.signUpPage, {
                    name_field: action.content
                })
            })
        case 'UPDATE_SIGNUP_AGE':
            return Object.assign({}, state, {
                signUpPage: Object.assign({}, state.signUpPage, {
                    age_field: action.content
                })
            })
        case 'UPDATE_SIGNUP_PASSWORD':
            return Object.assign({}, state, {
                signUpPage: Object.assign({}, state.signUpPage, {
                    password_field: action.content
                })
            })
        default:
            return state
    }
}



// NAVIGATION REDUCERS ---------------------------------------

const initialState = {
    index: 0,
    key: 'root',
    routes: [
        {
            // key: 'create_deck',
            // title: 'Create Deck'
            key: 'decks',
            title: 'Welcome',
        }
    ]
}


const isSameRoute = (state, action) => {
    return (
        state.routes[state.index].key ===
        (action.route && action.route.key)
    )
}

const isRootRoute = (state) => {
    return state.index === 0 || state.routes.length === 1
}

const navReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'PUSH_ROUTE':
            if ( isSameRoute(state, action) ) return state;
            return NavigationStateUtils.push(state, action.route)
        case 'POP_ROUTE':
            if ( isRootRoute(state) ) return state;
            return NavigationStateUtils.pop(state);
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    decks: decks,
    navigation: navReducer,
    requests: requestsReducer,
    session: sessionReducer
});


const loggerMiddleware = Logger()

const d1Store = createStore(
    rootReducer,
    applyMiddleware( Thunk, loggerMiddleware )
)

const App = () => {
    return (
        <Provider store={d1Store}>
            <RoutesContainer/>
        </Provider>
    )
}


AppRegistry.registerComponent('d1', () => App);
