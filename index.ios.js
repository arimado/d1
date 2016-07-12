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
        decks: [
        ],
        questions: [
        ],
        answers: [
        ],
}, action) => {
    switch (action.type) {
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

const ownDeckReducer = (state = {
    isPosting: false,
    deck: [
        { question: '', answers: [] }
    ]
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
        // case 'ADD_QUESTION':
        //     return Object.assign({}, state, {
        //         deck: [
        //             ...state.deck,
        //             { question: action.question,
        //               answers: []
        //             }
        //         ]
        //     })
        default:
            return state;
    }
}

// LOGIN REDUCER ---------------------------------------


const sessionReducer = (state = {
    userID: null,
    deckID: null
}, action) => {
    switch (action.type) {
        case 'ADD_DECK':
            return Object.assign({}, state, {
                deckID: action.deck.id,
                userID: action.deck.userID
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
            key: 'login',
            title: 'Welcome'

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
    ownDeck: ownDeckReducer,
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
