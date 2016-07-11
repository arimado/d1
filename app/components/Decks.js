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
import Styles from './Styles';
import StatusBarBg from './StatusBarBg';
import NavBarContainer from '../containers/NavBarContainer';
import _ from 'lodash';

class Decks extends Component {

    constructor(props) {
        super(props)
    }

    componentWillMount() {
    }

    render() {

        // let decks = this.props.db.decks.map((deck) => {
        //     let questions = deck.questions.map((question, index)=> {
        //         // QUESTIONS OUTPUT HERE
        //         return (
        //             <View key={index}>
        //                 <Text>
        //                     {question.question}
        //                 </Text>
        //             </View>
        //         )
        //     });
        //
        //     // DECKS OUTPUT HERE
        //     return (
        //         <View>
        //             <View>
        //             {questions}
        //             </View>
        //         </View>
        //     )
        // })

        return (
            <View style={Styles.container}>
                <StatusBarBg />
                <NavBarContainer _handleNavigate={this.props._handleNavigate}/>
                <Text>Decks View</Text>
            </View>
        )
    }

}

export default Decks
