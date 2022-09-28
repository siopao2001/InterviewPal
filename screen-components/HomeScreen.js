import * as React from 'react';
import { Text, View, Button } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome to Interviewer Pal</Text>
      <Button
        title="Quickstart"
        onPress={() => {
          /* 1. Navigate to the categories pages */
          navigation.navigate('Categories');
        }}
      />
    </View>
  );
}