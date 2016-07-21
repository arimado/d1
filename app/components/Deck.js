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



const Deck = ({id, userID, color, questions, session: {userID: sessionUserID, deckID, selectedDeckID}, selectDeck, _handleNavigate, user}) => {

    let shadeVeryDarkBG, shadeDarkBG, shadeMediumBG, shadeLightBG, shadeVeryLightBG, shadeVeryDarkTXT, shadeDarkTXT, shadeMediumTXT, shadeLightTXT, shadeVeryLightTXT

    switch (color) {
        case 0:
            shadeVeryDarkBG = Styles.orangeShadeVeryDarkBG;
            shadeDarkBG = Styles.orangeShadeDarkBG;
            shadeMediumBG = Styles.orangeShadeMediumBG;
            shadeLightBG = Styles.orangeShadeLightBG;
            shadeVeryLightBG = Styles.orangeShadeVeryLightBG;
            shadeVeryDarkTXT = Styles.orangeShadeVeryDarkTXT;
            shadeDarkTXT = Styles.orangeShadeDarkTXT;
            shadeMediumTXT = Styles.orangeShadeMediumTXT;
            shadeLightTXT = Styles.orangeShadeLightTXT;
            shadeVeryLightTXT = Styles.orangeShadeVeryLightTXT;
            break;
        default:

            break;
    }


    let deckContainerStyle = [Styles.deck];
    let profileContainerStyle = [Styles.deckProfile];

    if (Number.isInteger(color)) {
        profileContainerStyle.push(shadeMediumBG)
        deckContainerStyle.push(shadeLightBG);
    }



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
                    <View key={question.id}>
                        <Text style={Styles.deckText}>{index + 1}. {question.content}</Text>
                        {/*{showAnswers}*/}
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
            <View style={profileContainerStyle}>
                <Text style={Styles.profileName}>{user.name}, {user.age}</Text>
            </View>
            <View style={deckContainerStyle}>
                {currentQuestions}
            </View>
        </TouchableOpacity>

    )
}


export default Deck;
