import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

import Styles from './Styles'
import _ from 'lodash';



const Deck = ({id, userID, questions, session: {userID: sessionUserID, deckID, selectedDeckID}}) => {


    let currentQuestions = (
        _.map(questions, (question, index) => {
            // let currentAnswers = (
            //     _.map(question.answers, (answer) => {
            //         return (
            //             <Text key={answer.id}>{answer.content}</Text>
            //         )
            //     })
            // )
            return (
                    <View   key={question.id}>
                        <Text style={Styles.deckText}>{index + 1}. {question.content}</Text>
                        {/*{currentAnswers}*/}
                    </View>
            )
    }))

    console.log(selectedDeckID);

    return (
        <TouchableOpacity
            onPress={() => {
                console.log('you pressed the deck brah')

            }}>
            <View style={Styles.deck}>
                {currentQuestions}
            </View>
        </TouchableOpacity>

    )
}


export default Deck;
