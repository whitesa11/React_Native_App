import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import firebase from 'firebase';
import Map from '../Components/map';

export default class TopMain extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Attending"
    };
  };
  state = { currentUser: null }
  
  componentDidMount() {
    const { currentUser } = firebase.auth()
    this.setState({ currentUser })
  }

  render() {
    return (
      <Map style={{flex: 1}} />     
    );
  }
}
