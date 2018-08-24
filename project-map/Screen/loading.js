import React, { Component } from 'react'
import { Text, View, ActivityIndicator, StyleSheet } from 'react-native';
import firebase from 'firebase';


export default class Loading extends Component {
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            this.props.navigation.navigate(user ? "Home" : "LogIn");
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text> Loading </Text>
                <ActivityIndicator size="large" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});