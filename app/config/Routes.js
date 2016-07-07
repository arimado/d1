import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  View
} from 'react-native';

import Login from '../components/Login';
import Signup from '../components/Signup';
import Decks from '../components/Decks';

class Routes extends Component {
    _renderScene(route, navigator) {
        var globalNavigatorProps = { navigator }
        switch(route.url) {
            case "Login":
                // return (
                //     <Login {...globalNavigatorProps}/>
                // )
                return (
                    <Login navigator={navigator}/>
                )
            case "Signup":
                return (
                    <Signup {...globalNavigatorProps}/>
                )
            case "Decks":
                return (
                    <Decks />
                )
        }
    }

    render() {
        return (<Navigator
            initialRoute={{url: "Login"}}
            renderScene={this._renderScene} />);
    }
}

export default Routes
