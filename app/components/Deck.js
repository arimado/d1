import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';



const Deck = ({text, backgroundColor}) => {
    return (
        <View style={[styles.card, {backgroundColor: backgroundColor}]}>
          <Text>{text}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 400,
    width: 300,
  }
})


export default Deck;
