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

class d1 extends Component {

    constructor() {
        super()
        this.state = {
            text: ''
        }

        this._handleTextChange = this._handleTextChange.bind(this);
    }

    _handleTextChange(event) {
        console.log(event)
        this.setState({text: 'you typed'})
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                Hey bro what up
                </Text>
                <Text>
                    {this.state.text}
                </Text>
                <Text style={styles.instructions}>
                Press Cmd+R to reload,{'\n'}
                What's going on?
                </Text>
                <TextInput style={styles.input} onChange={this._handleTextChange}/>
                <TextInput style={styles.input}/>
                <Text style={styles.instructions} onSubmitEditing={this._}>
                Lol city mate
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  input: {
    fontSize: 20,
    borderWidth: 1,
    height: 40
  }
});

AppRegistry.registerComponent('d1', () => d1);
