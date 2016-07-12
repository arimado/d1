import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  Text,
  View
} from 'react-native';
import Styles from './Styles'
import Icon from 'react-native-vector-icons/FontAwesome';

const BACK_ROUTE = {
  type: 'back'
}

const CREATE_DECK = {
  type: 'push',
  route: {
    key: 'create_deck',
    title: 'Create A Deck'
  }
}

class NavBar extends Component {

    constructor(props) {
        super(props)
        console.log(this.props._handleNavigate);
    }

    render() {

    let randomNumber = () => {  return Math.floor(Math.random() * 200 + (Date.now() / 2)) }

    return (
        <View style={Styles.navBar}>
            <TouchableOpacity onPress={()=>{this.props._handleNavigate(BACK_ROUTE)}}>
                <Icon name="chevron-left" size={30} color="#900" />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=>{

                    let deckID = randomNumber();
                    let userID = randomNumber();

                    this.props.addDeck({
                        id: deckID,
                    userID: userID
                    });

                    this.props.addQuestion({
                            id: randomNumber(),
                        deckID: deckID,
                       content: 'yolo city'
                   });



                    this.props._handleNavigate(CREATE_DECK)
                }}
                style={Styles.createDeckButton}>
                <Text >Create Deck</Text>
            </TouchableOpacity>
        </View>
        )
    }
}

export default NavBar;
