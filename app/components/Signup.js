import React, { Component } from 'react';
import {
  Text,
  TextInput,
  View
} from 'react-native';
import Styles from './Styles';
import StatusBarBg from './StatusBarBg'
import NavBar from './NavBar'

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
                <StatusBarBg />
                <NavBar navigator={this.props.navigator} />
                <View style={Styles.containerCenter}>
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
            </View>
        )
    }

}

export default Signup;
