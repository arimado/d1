import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
} from 'react-native';
import Styles from './Styles'

export default PopUp = ({hideModal, showModal , session: { modalShow, modalMessage }}) => {
    return (
        <Modal
          animationType={"slide"}
          transparent={true}
          visible={modalShow}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
         <View style={Styles.containerCenter}>
          <View>
            <Text>{modalMessage}</Text>
            <TouchableOpacity
                style={Styles.buttonContainer}
                onPress={() => {
                    hideModal()
            }}>
              <Text>Hide Modal</Text>
            </TouchableOpacity>
          </View>
         </View>
        </Modal>
    )
}
