// components/dashboard.js
import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import styles from '../styling/dashboard.style';
import firebaseDb from '../firebaseDb';

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      uid: ''
    }
  }
  signOut = () => {
    firebaseDb.auth().signOut().then(() => {
      this.props.navigation.navigate('Login')
    })
      .catch(error => this.setState({ errorMessage: error.message }))
  }
  render() {
    this.state = {
      displayName: firebaseDb.auth().currentUser.displayName,
      uid: firebaseDb.auth().currentUser.uid
    }
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>
          {`Hello, ${this.state.displayName}. \n \nWelcome to InterviewPal
        `}</Text>

        <Button
          title="Quickstart"
          onPress={() => {
            /* 1. Navigate to the categories pages */
            this.props.navigation.navigate('Categories');
          }}
        />

        <Button
          color="#42f590"
          title="Logout"
          onPress={() => this.signOut()}
        />

      </View>
    );
  }
}
