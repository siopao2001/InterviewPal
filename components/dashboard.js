import React, { Component, useRef, useEffect } from 'react';
import { Animated, Text, View, Button, Image } from 'react-native';
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
        <FadeInView>
          <Text style={styles.textStyle}>
            {`Hello, ${this.state.displayName}. \n \nWelcome to InterviewPal
        `}</Text>
        </FadeInView>

        <Image
          source={require('../planning/chat-bubble.jpeg')}
          style={{ width: 100, height: 100 }}
        />

       
        <View style={styles.bottom}>
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
      </View>
    );
  }
};

const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 10000,
      }
    ).start();
  }, [fadeAnim])

  return (
    <Animated.View                 // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim,         // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
};

