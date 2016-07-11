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

        let randomNumber = () => {  return Math.floor(Math.random() * 200 + (Date.now() / 2)) }

        let submitText = this.props.ownDeck.isPosting ? "..." : "Submit";

        let questions = this.props.decks.questions;
        let allAnswers = this.props.decks.answers;

        let newDeckID = randomNumber();

        let questionsElement = questions.map((question) => {

            let answers = _.filter(allAnswers, {questionID: 1})

            let answersElement = answers.map((answer) => {
                return (
                    <TextInput
                        key={randomNumber()}
                        style={Styles.input}
                        placeholder="Answer"
                        value={answer.content}
                        onChangeText={(value) => {
                        }}
                    />
                )
            })

            return (
                <View key={randomNumber()}>
                    <Text
                        style={Styles.label}>Question</Text>
                    <TextInput
                        style={Styles.input}
                        placeholder="Question"
                        value={question.content}
                        onChangeText={(value) => {
                        }}/>
                    <Text style={Styles.label}>Answers</Text>

                    {answersElement}
                </View>

            )
        })


        return (
            <View style={Styles.container}>
                <StatusBarBg />
                <NavBar _handleNavigate={this.props._handleNavigate}/>

                {questionsElement}

                <TouchableOpacity
                    onPress={() => {this.props.addQuestion(question)}}
                    style={Styles.input}>
                    <Text> + Question </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {this.props.submitDeck({content: 'hi there'})}}
                    style={Styles.button}>
                    <Text> {submitText} </Text>
                </TouchableOpacity>
                </View>
        )
    }

}

export default CreateDeck
