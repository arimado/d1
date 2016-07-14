import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  Text,
  View,
  Modal,
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
    }

    render() {

    let randomNumber = () => {  return Math.floor(Math.random() * 200 + (Date.now() / 2)) }


    let navStyles = [Styles.createDeckButton]
    let {routes} = this.props.navigation;
    if (routes[routes.length - 1].key === 'decks') {
        navStyles = [Styles.createDeckButton, Styles.indexCreateDeckButton]
    }

    return (
        <View style={Styles.navBar}>
            {/*<TouchableOpacity onPress={()=>{this.props._handleNavigate(BACK_ROUTE)}}>
                <Icon name="chevron-left" size={30} color="#900" />
            </TouchableOpacity>*/}
            <TouchableOpacity
                onPress={()=>{

                    if (this.props.session.userID) {
                        let deckID = randomNumber();
                        let userID = this.props.session.userID;

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

                   } else {
                       this.props.showModal('You need to be logged in');
                   }


                }}
                style={navStyles}>
                <Text style={Styles.createDeckText}>Create Deck</Text>
            </TouchableOpacity>
        </View>
        )
    }
}

export default NavBar;
