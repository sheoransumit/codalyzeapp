import React, {Component} from 'react';
import LoginForm from './LoginForm';
import {Modal, Text, TouchableHighlight, View} from 'react-native';

export default class LoggedOut extends Component {
  constructor() {
    super();
    this.state = {
      modalVisible: false,
      registerVisible: false
    };
  }

  setModalVisible(mvisible) {
    this.setState({modalVisible: mvisible});
  }

  setRegisterVisible(rvisible) {
    this.setState({registerVisible: rvisible});
  }

  render() {
    return (
      <View style={{marginTop: 22}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(false);
            alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 22}}>
            <View>
            	<Text>Login</Text>
              <LoginForm/>
              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(false);
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text>Login</Text>
        </TouchableHighlight>


        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.registerVisible}
          onRequestClose={() => {
            this.setRegisterVisible(false);
            alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 22}}>
            <View>
            <Text>Register</Text>
              <LoginForm/>
              <TouchableHighlight
                onPress={() => {
                  this.setRegisterVisible(false);
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setRegisterVisible(true);
          }}>
          <Text>Register</Text>
        </TouchableHighlight>
      </View>
    );
  }
}