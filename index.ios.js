/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

import Login from './app/components/Login';

class d1 extends Component {

    constructor() {
        super()
    }
    render() {
        return (
            <View>
                <Login />
            </View>
        );
    }
}

const styles = StyleSheet.create({
});

AppRegistry.registerComponent('d1', () => d1);
