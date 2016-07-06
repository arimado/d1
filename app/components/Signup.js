import React, { Component } from 'react';
import {
  Text,
  TextInput,
  View
} from 'react-native';
import Styles from './Styles';

class Signup extends Component {
    constructor(props) {
        super(props)

        this.state = {
            text: ''
        }
    }

    render() {
        return (
            <View style={Styles.container}>
                <Text style={Styles.welcome}>
                Signup
                </Text>
                <TextInput
                    style={Styles.input}
                    onChangeText={this._handleTextChange}
                    value={this.state.text}
                    placeholder="email"
                />
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

export default Signup;
