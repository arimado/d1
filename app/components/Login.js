import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
  Modal
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Styles from './Styles';
import StatusBarBg from './StatusBarBg';
import NavBar from './NavBar';

import { createStore, combineReducers } from 'redux';
import { connect, Provider } from 'react-redux'

const SIGN_UP_ROUTE = {
  type: 'push',
  route: {
    key: 'sign_up',
    title: 'sign_up'
  }
}

const DECKS_ROUTE = {
  type: 'push',
  route: {
    key: 'decks',
    title: 'Decks'
  }
}


const Login = ({login_field, onDeckClick, onUserFieldChange, _handleNavigate, fetchDecks, fillRandomUser}) => {

    let args = arguments;

    console.log(_handleNavigate);

    return (
        <View style={Styles.container}>
            <StatusBarBg />
            <View style={Styles.containerCenter}>
                <Text style={Styles.welcome}>
                Heaps sick app
                </Text>
                <Icon name="rocket" size={30} color="#900" />
                {/*<TextInput
                    style={Styles.input}
                    placeholder="email"
                    onChangeText={(value) => {

                    }}
                />
                <TextInput
                    style={Styles.input}
                    placeholder="password"
                    secureTextEntry={true}
                />
                <View style={Styles.buttons}>
                    <TouchableOpacity
                        style={Styles.buttonContainer}
                        onPress={
                            ()=>{
                               _handleNavigate(DECKS_ROUTE);
                               console.log(fetchDecks);
                            }
                        }>
                        <Text style={Styles.button}>Login</Text>

                    </TouchableOpacity>
                </View>*/}
                <View style={Styles.buttons}>
                    <TouchableOpacity
                        style={[Styles.buttonContainer, Styles.loginButtonContainer]}
                        onPress={
                        ()=> {
                            fillRandomUser()
                            _handleNavigate(SIGN_UP_ROUTE);

                        }}>
                        <Text
                            style={[Styles.button, Styles.loginButton]}
                            > Sign in as a test user </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}


export default Login;
