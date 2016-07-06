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


import Routes from './app/config/Routes'

// class d1 extends Component {
//
//     constructor() {
//         super()
//     }
//
//     render() {
//         return (
//                 <Login />
//         );
//     }
// }

const styles = StyleSheet.create({
});

AppRegistry.registerComponent('d1', () => Routes);
