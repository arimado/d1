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

const Login = ({login_field, onDeckClick, onUserFieldChange}) => {
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
                        console.log(login_field);
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
                                      onDeckClick(Math.floor(Math.random() * 20), () => {
                                          console.log('pressed login')
                                         console.log(login_field);
                                      })
                                  }
                              }>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={Styles.button}>Sign up</Text>
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
