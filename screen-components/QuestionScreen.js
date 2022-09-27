import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


export default function QuestionScreen({ route, navigation }) {
  const { catId, questionId } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>This is the category number for this question: {catId}</Text>
      <Text>This is the question number: {questionId}</Text>
      {questionId > 3 
        ?  <Button title="Summary" onPress={() => {navigation.navigate('Summary')}}/>
        : <Button
        title="Next Question"
        onPress={() => navigation.push('Question', {catId: catId, questionId: questionId + 1})}
      />
      }
    </View>
  );
}
