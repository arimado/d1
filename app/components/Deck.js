import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

import Styles from './Styles'
import _ from 'lodash';



const Deck = ({id, userID, questions, session: {userID: sessionUserID, deckID, selectedDeckID}, selectDeck, _handleNavigate}) => {


    let currentQuestions = (
        _.map(questions, (question, index) => {
            let currentAnswers = (
                _.map(question.answers, (answer) => {
                    return (
                        <View key={answer.id}>
                            <Text>{answer.content}</Text>
                        </View>
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
                _handleNavigate({
                  type: 'push',
                  route: {
                    key: 'show_deck',
                    title: 'This is the show_deck title',
                    direction: 'vertical'
                  }
                })
            }}>
            <View style={Styles.deck}>
                {currentQuestions}
            </View>
        </TouchableOpacity>

    )
}


export default Deck;
