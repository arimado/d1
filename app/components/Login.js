import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Styles from './Styles';
import StatusBarBg from './StatusBarBg';
import NavBar from './NavBar';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
        this._handleTextChange = this._handleTextChange.bind(this);
        this._signUpPress = this._signUpPress.bind(this);
        this._loginPress = this._loginPress.bind(this);
    }

    _handleTextChange(text) {
        console.log(text);
        this.setState({text: text})
    }

    _loginPress() {
        console.log('login pressed')
        this.props.navigator.push({
          url: "Decks"
        })
    }

    _signUpPress() {
        console.log('sign up pressed');
        console.log(this.props);
        this.props.navigator.push({
          url: "Signup"
        })
    }


    render() {
        return (
            <View style={Styles.container}>
                <StatusBarBg />
                <NavBar navigator={this.props.navigator} />
                <View style={Styles.containerCenter}>
                    <Text style={Styles.welcome}>
                    Login
                    </Text>
                    <Icon name="rocket" size={30} color="#900" />
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
                        <TouchableOpacity onPress={this._loginPress}>
                            <Text style={Styles.button}>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this._signUpPress}>
                            <Text style={Styles.button}>Sign up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

export default Login;
