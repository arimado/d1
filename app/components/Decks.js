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

class Decks extends Component {

    constructor(props) {
        super(props)
    }

    componentWillMount() {
        console.log('hello')
    }

    render() {

        return (
            <View>
                <Text>Decks</Text>
            </View>
        )
    }

}

export default Decks
