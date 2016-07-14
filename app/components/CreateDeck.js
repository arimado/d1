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
import { randomNumber } from '../util/util'

class CreateDeck extends Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {
    }
    render() {

        let submitText = this.props.requests.isPosting ? "..." : "Submit";

        let currentDeckID = this.props.session.deckID;

        let questions = _.filter(this.props.decks.questions, {deckID: currentDeckID})

        let allAnswers = this.props.decks.answers;

        let questionsElement = questions.map((question) => {

            let answers = _.filter(allAnswers, {questionID: question.id})
            let answersElement = answers.map((answer) => {

                let answerStyles = [Styles.answerCheck]
                if (answer.isCorrect) answerStyles = [Styles.answerCheck, Styles.answerCheckCorrect]

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
                        <TouchableOpacity
                            style={answerStyles}
                            onPress={(event)=> {
                                this.props.deselectCorrect(question.id);
                                this.props.selectCorrect(answer.id);
                            }}>
                            <Icon
                                name="check-circle-o"
                                size={30}
                                color="white"
                             />
                        </TouchableOpacity>
                    </View>
                )
            })

            return (
                <View key={question.id}>
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

                    {answersElement}

                    <TouchableOpacity
                        onPress={() => {
                            this.props.addAnswer({
                                id: randomNumber(),
                                questionID: question.id,
                                content: ''
                            })
                        }}
                        >
                        <Text style={Styles.input}> + Answer </Text>
                    </TouchableOpacity>
                </View>

            )
        })


        return (
            <ScrollView style={Styles.container}>
                <StatusBarBg />
                <View style={[Styles.deckContainer, Styles.createContainer]}>
                    <View style={[Styles.deckProfile, Styles.deckProfileCreate]}>

                        <Text style={Styles.profileName}>Lidia, 28</Text>
                        <Icon style={Styles.deckClose} name="times" size={30} color="#FFF"
                            onPress={()=>{
                                // this.props._handleNavigate({
                                //         type: 'pop',
                                //         direction: 'vertical'})
                            }}/>

                    </View>

                    <View>
                        <View style={Styles.colorsContainer}>
                            <TouchableOpacity style={Styles.colorRadioContainer}>
                                <Icon style={Styles.colorRadio} name="circle" size={30} color="white" />
                            </TouchableOpacity>
                            <TouchableOpacity style={Styles.colorRadioContainer}>
                                <Icon style={Styles.colorRadio} name="circle" size={30} color="white" />
                            </TouchableOpacity>
                            <TouchableOpacity style={Styles.colorRadioContainer}>
                                <Icon style={Styles.colorRadio} name="circle" size={30} color="white" />
                            </TouchableOpacity>
                            <TouchableOpacity style={Styles.colorRadioContainer}>
                                <Icon style={Styles.colorRadio} name="circle" size={30} color="white" />
                            </TouchableOpacity>
                         </View>
                    </View>

                    {questionsElement}

                    <TouchableOpacity
                        onPress={() => {this.props.addQuestion({
                            id: randomNumber(),
                        deckID: currentDeckID
                        })}}
                        >
                        <Text style={Styles.input}> + Question </Text>
                    </TouchableOpacity>


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
                </View>
            </ScrollView>
        )
    }

}

export default CreateDeck
