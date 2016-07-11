import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View
} from 'react-native';

import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
import Styles from './Styles';
import StatusBarBg from './StatusBarBg';
import NavBar from './NavBar';
import _ from 'lodash';

class CreateDeck extends Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {
    }
    render() {
        return (
            <View style={Styles.container}>
                <StatusBarBg />
                <NavBar _handleNavigate={this.props._handleNavigate}/>
                <Text style={Styles.label}>Question</Text>
                <TextInput
                    style={Styles.input}
                    placeholder="Question"
                    onChangeText={(value) => {
                    }}
                />
                <Text style={Styles.label}>Answers</Text>
                <TextInput
                    style={Styles.input}
                    placeholder="Answer"
                    onChangeText={(value) => {
                    }}
                />
                <TextInput
                    style={Styles.input}
                    placeholder="Answer"
                    onChangeText={(value) => {

                    }}
                />
                <TextInput
                    style={Styles.input}
                    placeholder="Answer"
                    onChangeText={(value) => {

                    }}
                />
                <TouchableOpacity
                    onPress={() => {this.props.submitDeck({content: 'hi there'})}}
                    style={Styles.button}>
                    <Text> CREATE </Text>
                </TouchableOpacity>
                </View>
        )
    }

}

export default CreateDeck
