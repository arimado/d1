import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

class Login extends Component {
    constructor() {
        super()
        this.state = {
            text: ''
        }
        this._handleTextChange = this._handleTextChange.bind(this);
    }

    _handleTextChange(text) {
        console.log(text);
        this.setState({text: text})
    }


    render() {
        return (
            <View>
                <Text style={styles.welcome}>
                Very cool react native
                </Text>
                <Text>
                    {this.state.text}
                </Text>
                <Text style={styles.instructions}>
                Press Cmd+R to reload,{'\n'}
                What's going on?
                </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={this._handleTextChange}
                    value={this.state.text}
                />
                <TextInput
                    style={styles.input} />

                <Text style={styles.instructions} onSubmitEditing={this._}>
                Lol city mate
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
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

export default Login;
