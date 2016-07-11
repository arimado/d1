import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  NavigationExperimental,
  View,
  Text
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

// class Routes extends Component {
//
//     constructor(props) {
//         super(props)
//     }
//
//     _renderScene(route, navigator) {
//         var globalNavigatorProps = { navigator }
//         switch(route.url) {
//             case "Login":
//                 return (
//                     <Login navigator={navigator}/>
//                 )
//             case "Signup":
//                 return (
//                     <Signup {...globalNavigatorProps}/>
//                 )
//             case "Decks":
//                 return (
//                     <Decks db={DB} navigator={navigator}/>
//                 )
//         }
//     }
//
//     render() {
//         return (
//                 <Navigator
//                     initialRoute={{url: "Login"}}
//                     renderScene={this._renderScene} />
//         );
//     }
// }


class Routes extends Component {

    constructor(props, context) {
        super(props, context)
        this._renderScene = this._renderScene.bind(this)
    }

    _handleNavigate(action) {
        switch (action && action.type) {
            case 'push':
                this.props.pushRoute(action.route)
                return true
            case 'back':
            case 'pop':
                return this._handleBackAction()
            default:
                return false
        }
    }

    _renderScene(props) {

        console.log(props);

        const prefix = 'scene_'
        const { scene } = props
        if (scene.key === prefix + 'login') {
            return  <Login _handleNavigate={this._handleNavigate.bind(this)}/>
        }
        if (scene.key === prefix + 'sign_up') {
            return <Signup />
        }
    }

    render() {
        return (
            <NavigationCardStack
              navigationState={this.props.navigation}
              onNavigate={this._handleNavigate.bind(this)}
              renderScene={this._renderScene} />
        );
    }
}

export default Routes
