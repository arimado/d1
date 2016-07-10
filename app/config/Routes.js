import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  NavigationExperimental,
  View
} from 'react-native';

import { createStore, combineReducers } from 'redux';
import { connect, Provider } from 'react-redux'

const {
  CardStack: NavigationCardStack,
  StateUtils: NavigationStateUtils
} = NavigationExperimental

import Login from '../components/Login';
import Signup from '../components/Signup';
import Decks from '../components/Decks';

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
                <Navigator
                    initialRoute={{url: "Login"}}
                    renderScene={this._renderScene} />
        );
    }
}

export default Routes
