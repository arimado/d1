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
            <View style={styles.container}>
                <Text style={styles.welcome}>
                Login
                </Text>
                <Text style={styles.instructions}>
                    This page should be replaced with Facebook authentication
                </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={this._handleTextChange}
                    value={this.state.text}
                    placeholder="email"
                />
                <TextInput
                    style={styles.input}
                    placeholder="password"
                    secureTextEntry={true}
                />
                <View style={styles.buttons}>
                    <Text style={styles.button}>Login</Text>
                    <Text style={styles.button}>Sign up</Text>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        padding: 10
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 10,
    },
    input: {
        fontSize: 20,
        borderWidth: 1,
        height: 40,
        padding: 10
    },
    buttons: {
        flexDirection: 'row'
    },
    button: {
        padding: 20
    }
});

export default Login;
