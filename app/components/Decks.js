import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import SwipeCards from 'react-native-swipe-cards';

import Styles from './Styles';
import StatusBarBg from './StatusBarBg';
import Deck from './Deck'

import NavBarContainer from '../containers/NavBarContainer';

import _ from 'lodash';


const Cards = [
  {text: 'Tomato', backgroundColor: 'red'},
  {text: 'Aubergine', backgroundColor: 'purple'},
  {text: 'Courgette', backgroundColor: 'green'},
  {text: 'Blueberry', backgroundColor: 'blue'},
  {text: 'Umm...', backgroundColor: 'cyan'},
  {text: 'orange', backgroundColor: 'orange'},
]

class Decks extends Component {

    constructor(props) {
        super(props)
    }

    componentWillMount() {
    }

    render() {

        return (
            <View style={Styles.container}>
                <StatusBarBg />
                <NavBarContainer _handleNavigate={this.props._handleNavigate}/>
                <Text>Decks View</Text>
                <SwipeCards
                   cards={Cards}
                   renderCard={(cardData) => <Deck {...cardData} />}
                   renderNoMoreCards={() => <Text> NO MORE CARDS LEFT ß</Text>}
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

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 400,
    width: 300,
  }
})
