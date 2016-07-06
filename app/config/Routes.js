import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  View
} from 'react-native';

import Login from '../components/Login';

class Routes extends Component {
    _renderScene(route, navigator) {
        switch(route.ident) {
            case "Login":
                return (
                    <PeopleIndexScreen />
                )
        }
    }

    render() {
        // return (<Navigator
        //     initialRoute={{ident: "PeopleIndex"}}
        //     renderScene={this._renderScene} />)

        return (<Login />)
    }
}

export default Routes
