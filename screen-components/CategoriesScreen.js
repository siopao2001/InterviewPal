import * as React from 'react';
import { Text, View, Button } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';


export default function CategoriesScreen({ navigation }) {
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Choose A Category</Text>
      <Button
        title="General/Interpersonal"
        onPress={() =>
          navigation.navigate('Question', {catId: 1})                    
        }
      />

      <Button
        title="Customer Service Scenarios"
        onPress={() => {
          /* 1. Navigate to the categories pages */
          navigation.navigate('Question', {catId: 2});
        }}
      />

      <Button
        title="IT Technical"
        onPress={() => {
          /* 1. Navigate to the categories pages */
          navigation.navigate('Question', {catId: 3}) 
          
        }}
      />

      <Button
        title="Managament Scenarios"
        onPress={() => {
          /* 1. Navigate to the categories pages */
          navigation.navigate('Question', {catId: 4});
        }}
      />
    </View>
  );
}