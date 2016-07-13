import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

import Styles from './Styles'
import _ from 'lodash';



const Deck = ({id, userID, questions, session: {userID: sessionUserID, deckID, selectedDeckID}, selectDeck}) => {


    let currentQuestions = (
        _.map(questions, (question, index) => {
            let currentAnswers = (
                _.map(question.answers, (answer) => {
                    return (
                        <Text key={answer.id}>{answer.content}</Text>
                    )
                })
            )

            if (id === selectedDeckID) {
                var showAnswers = currentAnswers
            }


            return (
                    <View   key={question.id}>
                        <Text style={Styles.deckText}>{index + 1}. {question.content}</Text>
                        {showAnswers}
                    </View>
            )
    }))

    return (
        <TouchableOpacity
            onPress={() => {
                console.log('you pressed the deck brah')
                selectDeck(id);

            }}>
            <View style={Styles.deck}>
                {currentQuestions}
            </View>
        </TouchableOpacity>

    )
}


export default Deck;
