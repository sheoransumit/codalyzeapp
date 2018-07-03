import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'
import { Field, reduxForm } from 'redux-form'

const renderInput = ({ input: { onChange, ...restInput }}) => {
  return <TextInput style={styles.input} onChangeText={onChange} {...restInput} />
}


class LoginForm extends Component {
  
  constructor(props) {
    super(props);
    this.state = {email: '', password:''};
    this.handleSubmit = this.props.handleSubmit.bind(this, this.state);
  }

  render () {
    const { handleSubmit } = this.props;
    return (
      <View style={styles.container}>
        <Text>Email:</Text>
        <Field name="email" component = {<TextInput style={styles.input} onChangeText={(email) => this.setState({email})} />} />
        <Text>Password:</Text>
        <Field name="password" component = {<TextInput style={styles.input} onChangeText={(password) => this.setState({password})} />} />

        <TouchableOpacity>
          <Text style={styles.button} onPress={handleSubmit}>Submit</Text>
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