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

import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
import Styles from './Styles';
import StatusBarBg from './StatusBarBg';
import NavBar from './NavBar';
import NavBarContainer from '../containers/NavBarContainer'
import _ from 'lodash';

class CreateDeck extends Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {
    }
    render() {

        let randomNumber = () => {  return Math.floor(Math.random() * 200 + (Date.now() / 2)) }

        let submitText = this.props.requests.isPosting ? "..." : "Submit";

        let currentDeckID = this.props.session.deckID;

        let questions = _.filter(this.props.decks.questions, {deckID: currentDeckID})

        let allAnswers = this.props.decks.answers;

        let questionsElement = questions.map((question) => {

            let answers = _.filter(allAnswers, {questionID: question.id})
            let answersElement = answers.map((answer) => {
                return (
                    <View key={answer.id} style={Styles.answerContainer}>
                        <TextInput
                            style={[Styles.input, Styles.answerInput]}
                            placeholder="Answer"
                            value={answer.content}
                            onChangeText={(value) => {
                                this.props.updateAnswer({
                                    id: answer.id,
                                    content: value
                                })
                            }}
                        />
                        <Icon style={Styles.answerCheck} name="check-circle-o" size={30} color="white" />
                    </View>
                )
            })

            return (
                <View key={question.id}>
                    <Text
                        style={Styles.label}>Question</Text>
                    <TextInput
                        style={Styles.input}
                        placeholder="Question"
                        value={question.content}
                        onChangeText={(value) => {
                            this.props.updateQuestion({
                                id: question.id,
                                content: value
                            })
                        }}/>
                    <Text style={Styles.label}>Answers</Text>

                    {answersElement}

                    <TouchableOpacity
                        onPress={() => {
                            this.props.addAnswer({
                                id: randomNumber(),
                                questionID: question.id,
                                content: ''
                            })
                        }}
                        style={Styles.input}>
                        <Text> + Answer </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {this.props.addQuestion({
                            id: randomNumber(),
                        deckID: currentDeckID
                        })}}
                        style={Styles.input}>
                        <Text> + Question </Text>
                    </TouchableOpacity>

                </View>

            )
        })


        return (
            <ScrollView style={Styles.container}>
                <StatusBarBg />

                <NavBarContainer _handleNavigate={this.props._handleNavigate}/>

                {questionsElement}

                <TouchableOpacity
                    onPress={() => {
                        // submit the stuff to a database
                        // i'm going to send the whole thing as JSON text

                        let state = this.props.decks;
                        let allAnswers = state.answers;

                        let currentDeck = _.filter(state.decks, {id: currentDeckID})
                        let currentQuestions = _.filter(state.questions, {deckID: currentDeckID})
                        let currentAnswers = _.chain(currentQuestions)
                                              .map(question => {
                                                  return _.filter(allAnswers, {questionID: question.id})
                                              }).flatten();

                        this.props.submitDeck({
                            decks: currentDeck,
                            questions: currentQuestions,
                            answers: currentAnswers
                        })

                        // clear the sessions deckID
                    }}
                    style={Styles.button}>
                    <Text> {submitText} </Text>
                </TouchableOpacity>

            </ScrollView>
        )
    }

}

export default CreateDeck
