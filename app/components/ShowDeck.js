import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
  ScrollView
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Styles from './Styles';
import StatusBarBg from './StatusBarBg';
import Deck from './Deck'
import NavBarContainer from '../containers/NavBarContainer';
import _ from 'lodash';


class ShowDeck extends Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {
    }
    render() {
        return (
            <View style={Styles.container}>
                <StatusBarBg />
                <NavBarContainer _handleNavigate={this.props._handleNavigate}/>
                <Text>Show Deck View</Text>
            </View>
        )
    }

}

export default ShowDeck
