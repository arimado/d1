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

        let submitText = this.props.requests.isPosting ? "Broadcasting deck..." : "Broadcast deck";
        let currentDeckID = this.props.session.deckID;
        let deck = _.filter( this.props.decks.decks, {id: currentDeckID} )[0];
        let questions = _.filter(this.props.decks.questions, {deckID: currentDeckID})
        let allAnswers = this.props.decks.answers;
        let currentUserID = this.props.session.userID;
        let currentUser = _.filter(this.props.decks.users, {id: currentUserID})[0]

        // STYLES --------------------------------------------------------------

        let shadeVeryDarkBG, shadeDarkBG, shadeMediumBG, shadeLightBG, shadeVeryLightBG, shadeVeryDarkTXT, shadeDarkTXT, shadeMediumTXT, shadeLightTXT, shadeVeryLightTXT

        switch (deck.color) {
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
                break;
            default:
                break;
        }


        let deckContainerStyle = [Styles.deckContainer, Styles.createContainer];
        let profileContainerStyle = [Styles.deckProfile, Styles.deckProfileCreate];
        let deckTextStyle = [Styles.deckText];
        let inputStyles = [Styles.input];
        let answerInput = [Styles.input, Styles.answerInput];
        let buttonStyles = [Styles.input, Styles.inputCreate];
        let submitButtonStyles = [Styles.buttonContainer, Styles.createSubmitButton]


        if (Number.isInteger(deck.color)) {
            profileContainerStyle.push(shadeMediumBG)
            deckContainerStyle.push(shadeLightBG);
            inputStyles.push(shadeMediumBG);
            answerInput.push(shadeMediumBG);
            buttonStyles.push(shadeMediumBG);
            submitButtonStyles.push(shadeVeryDarkBG);
            // deckTextStyle.push(shadeVeryDarkTXT)
        }

        // ---------------------------------------------------------------------

        let questionsElement = questions.map((question) => {

            let answers = _.filter(allAnswers, {questionID: question.id})
            let answersElement = answers.map((answer) => {

                let answerCheckBox = [Styles.answerCheck];
                if (Number.isInteger(deck.color)) answerCheckBox.push(shadeVeryDarkBG);
                if (answer.isCorrect) answerCheckBox.push(Styles.answerCheckCorrect);

                return (
                    <View key={answer.id} style={Styles.answerContainer}>
                        <TextInput
                            style={answerInput}
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
                            style={answerCheckBox}
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
                        style={inputStyles}
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
                        <Text style={buttonStyles}> + Answer </Text>
                    </TouchableOpacity>
                </View>

            )
        })

        let colorRadios = [];

        for (let i = 0; i < 4; i += 1) {
            let radioStyles = [Styles.colorRadio]

            if (i === deck.color) {
                radioStyles.push(Styles['colorRadioActive' + i]);
            }


            colorRadios.push(
                <TouchableOpacity
                    key={i}
                    style={Styles.colorRadioContainer}
                    onPress={() => {
                        console.log(i);
                        this.props.updateColor(i, currentDeckID);
                    }}>
                    <Icon style={radioStyles} name="circle" size={30}/>
                </TouchableOpacity>
            )
        }

        return (
            <ScrollView style={Styles.container}>
                <StatusBarBg />
                <View style={profileContainerStyle}>
                    <Text style={Styles.profileName}>{currentUser.name}, {currentUser.age}</Text>
                    <Icon style={Styles.deckClose} name="times" size={30} color="#FFF"
                        onPress={()=>{
                            this.props._handleNavigate({
                                    type: 'pop',
                                    direction: 'vertical'})
                        }}/>

                </View>

                <View style={deckContainerStyle}>

                    <View>
                        <View style={Styles.colorsContainer}>
                            {colorRadios}
                         </View>
                    </View>

                    {questionsElement}

                    <TouchableOpacity
                        onPress={() => {this.props.addQuestion({
                            id: randomNumber(),
                        deckID: currentDeckID
                        })}}
                        >
                        <Text style={buttonStyles}> + Question </Text>
                    </TouchableOpacity>


                    <TouchableOpacity
                        onPress={() => {


                            // submit the stuff to a database
                            // i'm going to send the whole thing as JSON text
                            let state = this.props.decks;
                            let allAnswers = state.answers;

                            let currentDeck = _.filter(state.decks, {id: currentDeckID})
                            let currentQuestions = _.filter(state.questions, {deckID: currentDeckID})
                            // let currentAnswers = _.chain(currentQuestions)
                            //                       .map(question => {
                            //                           return _.filter(allAnswers, {questionID: question.id})
                            //                       }).flatten();

                            let currentAnswers2D = _.map(currentQuestions, (question) => {
                                return _.filter(allAnswers, {questionID: question.id})
                            });
                            let currentAnswers = _.flatten(currentAnswers2D);
                            
                            this.props.submitDeck({
                                decks: currentDeck,
                                questions: currentQuestions,
                                answers: currentAnswers
                            }, () => {
                                this.props._handleNavigate({
                                type: 'pop',
                                direction: 'vertical'})
                            })

                            // clear the sessions deckID
                        }}
                        style={submitButtonStyles}>
                        <Text style={Styles.submitDeckButton}> {submitText} </Text>

                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }

}

export default CreateDeck
