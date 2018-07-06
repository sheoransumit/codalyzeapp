import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'
import { Field, reduxForm } from 'redux-form'
import firebase from 'react-native-firebase';

class LoginForm extends Component {
  
  constructor(props) {
    super(props);
    this.onLogin = this.onLogin.bind(this);
    this.onRegister = this.onRegister.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  submit = values => {
    console.log('submitting form', values)
  }

  renderInput = ({ input: { onChange, ...restInput }}) => {
    return <TextInput style={styles.input} onChangeText={onChange} {...restInput} />
  }


  onLogin(email,password) {    
   //  email = values.email;
   //  password = values.password;
    // console.log( email, password );
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

  onRegister(email, password) {
    // console.log(values);
    // email = values.email;
    // password = values.password;
    // const { email, password } = this.state;
    alert(rmail, rpass);
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

  handleSubmit(msubmit){
    console.log(values)
    console.log('submitting form', values)
  }

  
  render () {

    return (
      <View style={styles.container}>
      
        <Text>Email:</Text>
        <Field name="email" component = {renderInput} />} />
     
        <Text>Password:</Text>
        <Field name="password" component = {renderInput} />

        <TouchableOpacity onPress={this.handleSubmit(submit)}>
          <Text style={styles.button}>Submit</Text>
        </TouchableOpacity>
      
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    color: 'white',
    height: 30,
    lineHeight: 30,
    marginTop: 10,
    textAlign: 'center',
    width: 250
  },
  container: {

  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    height: 37,
    width: 250
  }
})

export default reduxForm({
  form: 'test'
})(LoginForm)