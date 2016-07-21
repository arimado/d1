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
import PopUpContainer from '../containers/PopUpContainer';
import { getDeckData, checkPass } from '../util/util'
import _ from 'lodash';


class ShowDeck extends Component {
    constructor(props) {
        super(props)
    }
    render() {

        let selectedDeckID = this.props.session.selectedDeckID;

        let decks = this.props.decks.decks;
        let questions = this.props.decks.questions;
        let answers = this.props.decks.answers;
        let users = this.props.decks.users;
        let nestedDeckData = getDeckData(_, decks, questions, answers, selectedDeckID);


        let shadeVeryDarkBG, shadeDarkBG, shadeMediumBG, shadeLightBG, shadeVeryLightBG, shadeVeryDarkTXT, shadeDarkTXT, shadeMediumTXT, shadeLightTXT, shadeVeryLightTXT

        switch (nestedDeckData.color) {
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
            case 1:
                shadeVeryDarkBG = Styles.blueShadeVeryDarkBG;
                shadeDarkBG = Styles.blueShadeDarkBG;
                shadeMediumBG = Styles.blueShadeMediumBG;
                shadeLightBG = Styles.blueShadeLightBG;
                shadeVeryLightBG = Styles.blueShadeVeryLightBG;
                shadeVeryDarkTXT = Styles.blueShadeVeryDarkTXT;
                shadeDarkTXT = Styles.blueShadeDarkTXT;
                shadeMediumTXT = Styles.blueShadeMediumTXT;
                shadeLightTXT = Styles.blueShadeLightTXT;
                shadeVeryLightTXT = Styles.blueShadeVeryLightTXT;
                break;
            case 2:
                shadeVeryDarkBG = Styles.purpleShadeVeryDarkBG;
                shadeDarkBG = Styles.purpleShadeDarkBG;
                shadeMediumBG = Styles.purpleShadeMediumBG;
                shadeLightBG = Styles.purpleShadeLightBG;
                shadeVeryLightBG = Styles.purpleShadeVeryLightBG;
                shadeVeryDarkTXT = Styles.purpleShadeVeryDarkTXT;
                shadeDarkTXT = Styles.purpleShadeDarkTXT;
                shadeMediumTXT = Styles.purpleShadeMediumTXT;
                shadeLightTXT = Styles.purpleShadeLightTXT;
                shadeVeryLightTXT = Styles.purpleShadeVeryLightTXT;
            default:
                break;
        }


        let deckContainerStyle = [Styles.deckContainer];
        let profileContainerStyle = [Styles.deckProfile];
        let deckTextStyle = [Styles.deckText];
        let deckAnswerStyles = [Styles.deckAnswer, shadeMediumBG];
        let deckAnswerSelectedStyles = [];
        let submitButtonStyles = [Styles.buttonContainer, Styles.createSubmitButton];

        if (Number.isInteger(nestedDeckData.color)) {
            profileContainerStyle.push(shadeMediumBG)
            deckContainerStyle.push(shadeLightBG);
            submitButtonStyles.push(shadeVeryDarkBG);
            // deckTextStyle.push(shadeVeryDarkTXT);
            deckAnswerStyles.push(shadeDarkBG);
            deckAnswerSelectedStyles.push(shadeVeryDarkBG);
            // deckTextStyle.push(shadeVeryDarkTXT)
        }


        let questionsAndAnwers = nestedDeckData.questions.map((question, questionIndex) => {
            let answerElements = question.answers.map((answer) => {


                let answerStyle = deckAnswerStyles;
                if (answer.isSelected) answerStyle = [...deckAnswerStyles, ...deckAnswerSelectedStyles]

                // let answerCheckBox = [Styles.answerCheck];
                // if (Number.isInteger(deck.color)) answerCheckBox.push(shadeVeryDarkBG);
                // if (answer.isCorrect) answerCheckBox.push(Styles.answerCheckCorrect);

                return (
                    <TouchableOpacity
                        key={answer.id}
                        onPress={()=>{
                            this.props.deselectAnswers(question.id);
                            this.props.selectAnswer(answer.id, question.id);
                        }}>
                        <Text
                            style={answerStyle}> {answer.content} </Text>
                    </TouchableOpacity>
                )
            })
            return (
                <View key={question.id}>
                    <Text
                        style={deckTextStyle}>{questionIndex + 1}. {question.content}</Text>
                    {answerElements}
                </View>
            )
        })


        let currentUser = _.find(users, {id: nestedDeckData.userID})


        return (
            <ScrollView style={Styles.container}>
                <StatusBarBg />
                {/*<NavBarContainer _handleNavigate={this.props._handleNavigate}/>*/}

                <View style={deckContainerStyle}>
                <View style={profileContainerStyle}>

                    <Text style={Styles.profileName}>{currentUser.name}, {currentUser.age}</Text>
                    <Icon style={Styles.deckClose} name="times" size={30} color="#FFF"
                        onPress={()=>{
                            this.props._handleNavigate({
                                    type: 'pop',
                                    direction: 'vertical'})
                        }}/>
                </View>
                <View style={Styles.deckScrollView}>

                    <View style={Styles.deckBG}>
                        {questionsAndAnwers}
                    </View>

                    <TouchableOpacity
                        style={Styles.finishDeckButtonContainer}
                        onPress={() => {
                            // this.props.checkDeck(deckID)
                            let answerCheck = checkPass(answers, questions, selectedDeckID);
                            let answerThreshold = answerCheck.length;
                            let answersCount = 0;
                            answerCheck.forEach((answer) => {
                                if(answer.answeredCorrectly.length > 0) {
                                    answersCount += 1;
                                }
                            });
                            let matechedUser = _.find(users, {id: nestedDeckData.userID})
                            if(answersCount === answerCheck.length) {
                                this.props.showModal('You matched with ' + matechedUser.name)
                            } else {
                                this.props.showModal(`You failed ${matechedUser.name}'s test. I'm so sorry.`)
                                this.props._handleNavigate({
                                        type: 'pop',
                                        direction: 'vertical'})
                            }

                        }}>
                        <Icon
                            style={Styles.finishDeckButton}
                            name="paper-plane"
                            size={30}
                            color="white"
                         />
                    </TouchableOpacity>
                </View>

                </View>

            </ScrollView>
        )
        // with the currently selectedDeckID
        // getQuestionsAndAnswers
        // then do a pass function
        // user
        // then chat
    }

}

export default ShowDeck
