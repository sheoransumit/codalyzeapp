// import React from 'react'
// import LoginForm from './LoginForm'

// class LoggedOut extends React.Component {
//   submit = values => {
//     // print the form values to the console
//     console.log(values)

//     onLogin = () => {
// 	  const { email, password } = this.state;
// 	  firebase.auth().signInWithEmailAndPassword(email, password)
// 	    .then((user) => {
// 	      // If you need to do anything with the user, do it here
// 	      // The user will be logged in automatically by the 
// 	      // `onAuthStateChanged` listener we set up in App.js earlier
// 	    })
// 	    .catch((error) => {
// 	      const { code, message } = error;
// 	      // For details of error codes, see the docs
// 	      // The message contains the default Firebase string
// 	      // representation of the error
// 	    });
// 	}
// 	onRegister = () => {
// 	  const { email, password } = this.state;
// 	  firebase.auth().createUserWithEmailAndPassword(email, password)
// 	    .then((user) => {
// 	      // If you need to do anything with the user, do it here
// 	      // The user will be logged in automatically by the
// 	      // `onAuthStateChanged` listener we set up in App.js earlier
// 	    })
// 	    .catch((error) => {
// 	      const { code, message } = error;
// 	      // For details of error codes, see the docs
// 	      // The message contains the default Firebase string
// 	      // representation of the error
// 	    });
// 	}
//   }
//   render() {
//     return <LoginForm onSubmit={this.submit} />
//   }
// }

import React, {Component} from 'react';
import LoginForm from './LoginForm';
import {Modal, Text, TouchableHighlight, View} from 'react-native';
import firebase from 'react-native-firebase';

export default class LoggedOut extends Component {
  constructor() {
    super();
    this.state = {
      modalVisible: false,
      registerVisible: false,
    };
    this.values = {email: '', password:''};
    this.onLogin = this.onLogin.bind(this, this.values);
    this.onRegister = this.onRegister.bind(this, this.values);
  }
  state = {
    modalVisible: false,
    registerVisible: false,
  };

  setModalVisible(mvisible) {
    console.log(mvisible)
    this.setState({modalVisible: mvisible});
  }

  setRegisterVisible(rvisible) {
    this.setState({registerVisible: rvisible});
  }

  onLogin( values ) {
    email = values.email;
    password = values.password;
  	console.log( email, password );
	  // const { email, password } = this.state;
	  firebase.auth().signInWithEmailAndPassword(email, password)
	    .then((user) => {
        this.setState({modalVisible: false});
	      // If you need to do anything with the user, do it here
	      // The user will be logged in automatically by the 
	      // `onAuthStateChanged` listener we set up in App.js earlier
	    })
	    .catch((error) => {
	      const { code, message } = error;
	      // For details of error codes, see the docs
	      // The message contains the default Firebase string
	      // representation of the error
	    });
	}

	onRegister( values ) {
		// console.log(values);
    email = values.email;
    password = values.password;
	  // const { email, password } = this.state;
	  firebase.auth().createUserWithEmailAndPassword(email, password)
	    .then((user) => {
        this.setState({registerVisible: false});
	      // If you need to do anything with the user, do it here
	      // The user will be logged in automatically by the
	      // `onAuthStateChanged` listener we set up in App.js earlier
	    })
	    .catch((error) => {
	      const { code, message } = error;
	      // For details of error codes, see the docs
	      // The message contains the default Firebase string
	      // representation of the error
	    });
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
              <LoginForm handleSubmit={this.onLogin} />
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
              <LoginForm handleSubmit={this.onRegister} />
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