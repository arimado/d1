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

        let submitText = this.props.postDeck.isPosting ? "..." : "Submit";

        let questions = this.props.decks.questions;
        let allAnswers = this.props.decks.answers;

        let currentDeckID = this.props.session.deckID

        let questionsElement = questions.map((question) => {

            let answers = _.filter(allAnswers, {questionID: question.id})
            let answersElement = answers.map((answer) => {
                return (
                    <TextInput
                        key={answer.id}
                        style={Styles.input}
                        placeholder="Answer"
                        value={answer.content}
                        onChangeText={(value) => {
                            this.props.updateAnswer({
                                id: answer.id,
                                content: value
                            })
                        }}
                    />
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

                        let currentDeck = _.find(state.decks, {id: currentDeckID})
                        let currentQuestions = _.find(state.questions, {deckID: currentDeckID})
                        let currentAnswers = _.find(state.answers, {deckID: currentDeckID})

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
