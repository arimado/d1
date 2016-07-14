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

    _handleTextChange(from) {
        return (value) => {
            switch (from) {
                case 'name_field':
                    this.props.updateSignUpName(value);
                    break;
                case 'age_field':
                    this.props.updateSignUpAge(value);
                    break;
                case 'password_field':
                    this.props.updateSignUpPassword(value);
                    break;
                default:
                    return null
            }
        }
    }

    render() {

        let { name_field, age_field, password_field } = this.props.session.signUpPage

        return (
            <View style={Styles.container}>
                <StatusBarBg />
                <NavBar _handleNavigate={this.props._handleNavigate}/>
                <View style={Styles.containerCenter}>
                    <Text style={Styles.welcome}>
                        Signup
                    </Text>

                    <TextInput
                        style={Styles.input}
                        value={name_field}
                        onChangeText={this._handleTextChange('name_field')}
                        placeholder="Name"
                    />
                    <TextInput
                        style={Styles.input}
                        value={age_field}
                        onChangeText={this._handleTextChange('age_field')}
                        placeholder="Age"
                    />
                    <TextInput
                        style={Styles.input}
                        value={password_field}
                        onChangeText={this._handleTextChange('password_field')}
                        placeholder="Password"
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
