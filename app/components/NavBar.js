import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';
import Styles from './Styles'
import Icon from 'react-native-vector-icons/FontAwesome';

class NavBar extends Component {
    render() {
    return (
        <View style={Styles.navBar}>
            <Icon name="chevron-left" size={30} color="#900" />
        </View>
        )
    }
}

export default NavBar;
