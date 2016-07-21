import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
  ScrollView,
  Modal,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import SwipeCards from 'react-native-swipe-cards';

import Styles from './Styles';
import StatusBarBg from './StatusBarBg';
import Deck from './Deck'

import NavBarContainer from '../containers/NavBarContainer';
import PopUpContainer from '../containers/PopUpContainer';

import _ from 'lodash';


const Cards = [
  {text: 'Tomato', backgroundColor: 'red'},
  {text: 'Aubergine', backgroundColor: 'purple'},
  {text: 'Courgette', backgroundColor: 'green'},
  {text: 'Blueberry', backgroundColor: 'blue'},
  {text: 'Umm...', backgroundColor: 'cyan'},
  {text: 'orange', backgroundColor: 'orange'},
]


// id:
// userID:
// questions: [
//     {
//         question: { question }
//         answers: [
//             { },
//             { }
//         ]
//     }
// ]

class Decks extends Component {

    constructor(props) {
        super(props)
    }

    componentWillMount() {
    }

    render() {

        let state = this.props.decks
        let selectedDeckID = this.props.session.selectedDeckID;
        let users = state.users

        let decksInState = _.map(state.decks, (deck) => {
            let currentQuesions = (
                _.filter(state.questions, {deckID: deck.id})
                    .map((question) => {
                        let currentAnswers = _.filter(state.answers, {questionID: question.id})
                        return {
                            ...question,
                            answers: currentAnswers
                        }
                    })
             )
             let currentUser = _.find(users, {id: deck.userID})

            return {
                id: deck.id,
                userID: deck.userID,
                questions: currentQuesions,
                session: this.props.session,
                selectDeck: this.props.selectDeck,
                _handleNavigate: this.props._handleNavigate,
                color: deck.color,
                user: {
                    name: currentUser.name,
                    age: currentUser.age
                }
            }
        })


        let reOrderedDecks = null;
        if(selectedDeckID !== null) {
            let selectedDeckIndex = _.findIndex(decksInState, {id: selectedDeckID});
            reOrderedDecks = [
                decksInState[selectedDeckIndex],
                ...decksInState.slice(selectedDeckIndex + 1),
                ...decksInState.slice(0, selectedDeckIndex),
            ]
        } else {
            reOrderedDecks = decksInState;
        }

        return (
            <View style={[Styles.container, Styles.indexContainer]}>
                <PopUpContainer />
                <NavBarContainer _handleNavigate={this.props._handleNavigate}/>
                <SwipeCards
                   cards={reOrderedDecks}
                   renderCard={(data) => <Deck {...data} />}
                   renderNoMoreCards={() => <Text> NO MORE CARDS LEFT</Text>}
                   showYup={false}
                   showNope={false}
                   handleYup={() => {}}
                   handleNope={() => {}}
                 />
            </View>
        )
    }

}

export default Decks
