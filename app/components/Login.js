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


const Login = ({login_field, onDeckClick, onUserFieldChange, _handleNavigate}) => {

    let args = arguments;

    console.log(_handleNavigate);

    return (
        <View style={Styles.container}>
            <StatusBarBg />
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
                    placeholder="email"
                    onChangeText={(value) => {
                        onUserFieldChange(value)
                    }}
                />
                <TextInput
                    style={Styles.input}
                    placeholder="password"
                    secureTextEntry={true}
                />
                <View style={Styles.buttons}>
                    <TouchableOpacity>
                        <Text style={Styles.button}
                              onPress={
                                  ()=>{
                                     _handleNavigate(DECKS_ROUTE);
                                  }
                              }>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text
                            style={Styles.button}
                            onPress={
                            ()=> {
                                _handleNavigate(SIGN_UP_ROUTE);
                            }}
                            >Sign up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const mapStateToProps = ( state ) => {
  return {
    login_field: state.login_field
  };
};

const mapDispatchToProps = ( dispatch ) => {
  return {
    onDeckClick: (id, done) => {
      dispatch({
        type: 'ADD_DECK',
        id: id,
        text: 'this is a test'
      });
      done();
    },
    onUserFieldChange: (value) => {
        dispatch({
            type: 'CHANGE_LOGIN_FIELD_USERNAME',
            text: value
        })
    }
  };
};

const LoginContainer = connect(mapStateToProps,mapDispatchToProps)(Login);



export default LoginContainer;
