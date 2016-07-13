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
import { getDeckData } from '../util/util'
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

        let nestedDeckData = getDeckData(_, decks, questions, answers, selectedDeckID);

        let questionsAndAnwers = nestedDeckData.questions.map((question, questionIndex) => {
            let answerElements = question.answers.map((answer) => {
                let answerStyle = Styles.deckAnswer;
                if (answer.isSelected) answerStyle = [Styles.deckAnswer, Styles.deckAnswerSelected];
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
                        style={Styles.deckText}>{questionIndex + 1}. {question.content}</Text>
                    {answerElements}
                </View>
            )
        })

        return (
            <View style={Styles.container}>
                <StatusBarBg />
                <NavBarContainer _handleNavigate={this.props._handleNavigate}/>
                <View style={Styles.deckContainer}>
                <ScrollView style={Styles.deckScrollView}>
                    <View style={Styles.deckBG}>
                        {questionsAndAnwers}
                    </View>

                    <TouchableOpacity
                        style={Styles.finishDeckButtonContainer}
                        onPress={() => {
                            // this.props.checkDeck(deckID)

                            const checkPass = (answers, questions, deckID) => {
                                let currentQuestions = _.filter(questions, {deckID: deckID});
                                let currentAnswers = _.map(currentQuestions, (question) => {
                                    let correctAnswer = _.filter(answers, { questionID: question.id, isSelected: true, isCorrect: true})
                                    return {
                                        questionID: question.id,
                                        answeredCorrectly: correctAnswer
                                    }
                                });

                                return currentAnswers;
                            }

                            console.log(checkPass(answers, questions, selectedDeckID));
                        }}>
                        <Icon
                            style={Styles.finishDeckButton}
                            name="paper-plane"
                            size={30}
                            color="white"
                         />
                    </TouchableOpacity>
                </ScrollView>

                </View>

            </View>
        )
        // with the currently selectedDeckID
        // getQuestionsAndAnswers
        // then do a pass function
        // user
        // then chat
    }

}

export default ShowDeck
