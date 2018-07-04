import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'
import { Field, reduxForm } from 'redux-form'

// const renderInput = ({ input: { onChange, ...restInput }}) => {
//   return <TextInput style={styles.input} onChangeText={onChange} {...restInput} />
// }

class LoginForm extends Component {
  
  constructor(props) {
    super(props);
    this.state = {text1: '', text2:''};
    this.updatedmail = this.updatedmail.bind(this);
    this.updatedpassword = this.updatedpassword.bind(this);
  }

  updatedmail(mai){
    alert(typeof mai);
    this.setState({
        text1: mai
    });
  }

  updatedpassword(pass){
    this.setState({
      text2: pass
    });
  }
  
  render () {
  

    return (
      <View style={styles.container}>
      
        <Text>Email:</Text>
        <Field name="email" component = {<TextInput style={styles.input} onChangeText={(text) => this.updatedmail(text)} />} />
     
        <Text>Password:</Text>
        <Field name="password" component = {<TextInput style={styles.input} onChangeText={(text) => this.updatedpassword(text)} />} />

        <TouchableOpacity>
          <Text style={styles.button} onPress={this.props.handleSubmit.bind(this, this.state.text1, this.state.text2)}>Submit</Text>
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