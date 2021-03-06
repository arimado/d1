import React, { Component } from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import Styles from './Styles';
import StatusBarBg from './StatusBarBg'
import NavBar from './NavBar'

const DECKS_ROUTE = {
  type: 'push',
  route: {
    key: 'decks',
    title: 'Decks'
  }
}


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

        let { name_field, age_field, password_field } = this.props.session.signUpPage;
        let { userID: user_id } = this.props.session;
        let { isPostingUser } = this.props.requests;

        let loginText = '';

        if (isPostingUser) {
            loginText = `Logging in as ${name_field}, ${age_field}...`
        } else {
            loginText = `Login as ${name_field}, ${age_field}`
        }


        return (
            <ScrollView style={Styles.container}>
                <StatusBarBg />
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
                    {/*<TextInput
                        style={Styles.input}
                        value={password_field}
                        onChangeText={this._handleTextChange('password_field')}
                        placeholder="Password"
                    />*/}

                    <View style={Styles.buttons}>
                        <TouchableOpacity
                            style={Styles.buttonContainer}
                            onPress={()=>{

                                let user = {
                                    id: user_id,
                                    name: name_field,
                                    age: age_field,
                                    password: password_field,
                                }

                                console.log('current User: ', user );

                                this.props.submitUser(user, () => {
                                    this.props.fetchDecks('placeholder_id')
                                    this.props._handleNavigate(DECKS_ROUTE);
                                })

                            }}>
                        <Text style={Styles.button}>{loginText}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        )
    }

}

export default Signup;
