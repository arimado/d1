import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  View
} from 'react-native';
import Styles from './Styles'
import Icon from 'react-native-vector-icons/FontAwesome';

class NavBar extends Component {

    constructor(props) {
        super(props)
        this._backButtonPress = this._backButtonPress.bind(this)
    }

    _backButtonPress() {
        this.props.navigator.pop();
    }

    render() {
    return (
        <View style={Styles.navBar}>
            <TouchableOpacity onPress={this._backButtonPress}>
                <Icon name="chevron-left" size={30} color="#900" />
            </TouchableOpacity>
        </View>
        )
    }
}

export default NavBar;
