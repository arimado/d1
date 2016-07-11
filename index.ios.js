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

import RoutesContainer from './app/containers/RoutesContainer'

const {
  CardStack: NavigationCardStack,
  StateUtils: NavigationStateUtils
} = NavigationExperimental


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

const decks = (state = [], action) => {
    switch (action.type) {
        case 'ADD_DECK':
            return [
                ...state,
                deck(undefined, action)
            ];
        default:
            return state;
    }
};

const ownDeckReducer = (state = {
    isPosting: false,
    deck: {}
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
        default:
            return state;
    }
}

const loginReducer = (
    state = { username: 'username', password: 'password' },
    action
) => {
    switch (action.type) {
        case 'CHANGE_LOGIN_FIELD_USERNAME':
            return Object.assign({}, state, {
                username: action.text
            });
            break;
        default:
            return state;
    }
}

const initialState = {
    index: 0,
    key: 'root',
    routes: [
        {
            key: 'create_deck',
            title: 'Create Deck'
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
    login_field: loginReducer,
    navigation: navReducer,
    ownDeck: ownDeckReducer
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
