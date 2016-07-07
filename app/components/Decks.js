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
    }

    render() {



        let decks = this.props.db.decks.map((deck) => {

            let questions = deck.questions.map((question, index)=> {
                return (
                    <View key={index}>
                        <Text >
                            {question.question}
                        </Text>
                    </View>
                )
            })

            return (
                <View>
                    {questions}
                </View>
            )
        })

        console.log(decks);

        return (
            <View>
                <StatusBarBg />
                {decks}
            </View>
        )
    }

}

export default Decks
