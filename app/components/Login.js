import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

import Styles from './Styles';

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
            <View style={Styles.container}>
                <Text style={Styles.welcome}>
                Login
                </Text>
                <Text style={Styles.instructions}>
                    This page should be replaced with Facebook authentication
                </Text>
                <TextInput
                    style={Styles.input}
                    onChangeText={this._handleTextChange}
                    value={this.state.text}
                    placeholder="email"
                />
                <TextInput
                    style={Styles.input}
                    placeholder="password"
                    secureTextEntry={true}
                />
                <View style={Styles.buttons}>
                    <Text style={Styles.button}>Login</Text>
                    <Text style={Styles.button}>Sign up</Text>
                </View>

            </View>
        )
    }
}

export default Login;
