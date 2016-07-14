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
          transparent={false}
          visible={modalShow}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
         <View style={Styles.containerCenter}>
          <View>
            <Text style={Styles.modalMessage}>{modalMessage}</Text>
            <TouchableOpacity
                style={[Styles.buttonContainer, Styles.buttonContainerModal]}
                onPress={() => {
                    hideModal()
            }}>
              <Text style={Styles.modalButton}>k</Text>
            </TouchableOpacity>
          </View>
         </View>
        </Modal>
    )
}
