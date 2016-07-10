import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  View
} from 'react-native';

import { createStore, combineReducers } from 'redux';
import { connect, Provider } from 'react-redux'

import DB from '../Fixture';

import Login from '../components/Login';
import Signup from '../components/Signup';
import Decks from '../components/Decks';


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


// const login_field = (state, action) => {
//     switch (action.type) {
//         case 'CHANGE_LOGIN_FIELD_EMAIL':
//             return {
//                 id: action.id,
//                 text: action.text
//             }
//             break;
//         case 'CHANGE_LOGIN_FIELD_PASSWORD':
//             return {
//                 id: action.id,
//                 text: action.text
//             }
//         default:
//             return state;
//     }
// }

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

const d1App = combineReducers({
    decks: decks,
    login_field: loginReducer
});


class Routes extends Component {
    _renderScene(route, navigator) {
        var globalNavigatorProps = { navigator }
        switch(route.url) {
            case "Login":
                return (
                    <Login navigator={navigator}/>
                )
            case "Signup":
                return (
                    <Signup {...globalNavigatorProps}/>
                )
            case "Decks":
                return (
                    <Decks db={DB} navigator={navigator}/>
                )
        }
    }

    render() {
        return (
            <Provider store={createStore(d1App)}>
                <Navigator
                    initialRoute={{url: "Login"}}
                    renderScene={this._renderScene} />
            </Provider>
        );
    }
}

export default Routes
