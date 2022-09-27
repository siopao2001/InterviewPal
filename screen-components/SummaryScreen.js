import * as React from 'react';
import { Text, View, Button } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';



export default function SummaryScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>This is the summary page</Text>
      <Button
        title="Start again"
        onPress={() => {
          
          navigation.navigate('Home');
        }}
      />
    </View>
  );
}