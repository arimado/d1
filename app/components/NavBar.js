import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  View
} from 'react-native';
import Styles from './Styles'
import Icon from 'react-native-vector-icons/FontAwesome';

const BACK_ROUTE = {
  type: 'back'
}

class NavBar extends Component {

    constructor(props) {
        super(props)
        console.log(this.props._handleNavigate);
    }


    render() {
    return (
        <View style={Styles.navBar}>
            <TouchableOpacity onPress={()=>{this.props._handleNavigate(BACK_ROUTE)}}>
                <Icon name="chevron-left" size={30} color="#900" />
            </TouchableOpacity>
        </View>
        )
    }
}

export default NavBar;
