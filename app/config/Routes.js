import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  View
} from 'react-native';

import Login from '../components/Login';
import Signup from '../components/Signup';

class Routes extends Component {
    _renderScene(route, navigator) {
        switch(route.ident) {
            case "Login":
                return (
                    <Login />
                )
            case "Signup":
                return (
                    <Signup />
                )
        }
    }

    render() {
        return (<Navigator
            initialRoute={{ident: "Signup"}}
            renderScene={this._renderScene} />)

        // return (<Login />)
    }
}

export default Routes
