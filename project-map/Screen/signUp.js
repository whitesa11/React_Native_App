import React, { Component } from 'react'
import {
  Text,
  KeyboardAvoidingView,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";
import firebase from 'firebase';

export default class SignUp extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "SIGN UP"
    };
  };

    state = { email: '', password: '', errorMessage: null }

    handleSignUp = () => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => this.props.navigation.navigate('TopMain'))
        .catch(error => this.setState({ errorMessage: error.message }))
        console.log('SignUp')
    }

  render() {
    return(
      <KeyboardAvoidingView behavior="padding" style={styles.container} enabled>
        {this.state.errorMessage && <Text style={{ color: "red" }}>
            {this.state.errorMessage}
          </Text>}
        <TextInput placeholder="E-mail" style={styles.input} autoCapitalize="none" onChangeText={email => this.setState(
              { email }
            )} value={this.state.email} />
        <TextInput secureTextEntry placeholder="Password" autoCapitalize="none" style={styles.input} onChangeText={password => this.setState(
              { password }
            )} value={this.state.password} />
        <TouchableOpacity style={styles.buttoncontainer1} onPress={this.handleSignUp}>
          <Text style={styles.buttontext}>Sign Up</Text>
        </TouchableOpacity>

        <Text>Already have an account?</Text>
        <TouchableOpacity style={styles.buttoncontainer2} onPress={() => this.props.navigation.navigate("LogIn")}>
          <Text style={styles.buttontext}>Check In</Text>
        </TouchableOpacity>
        </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 20,
    paddingRight: 20,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  },
  input: {
    height: 40,
    backgroundColor: "rgba(255,255,255, 0.8)",
    paddingLeft: 10,
    marginBottom: 15
  },
  buttoncontainer1: {
    backgroundColor: "#27ae60",
    paddingVertical: 15,
    marginBottom: 16
  },
  buttoncontainer2: {
    backgroundColor: "#688d36",
    paddingVertical: 15,
    marginBottom: 16
  },
  buttontext: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold"
  }
});
