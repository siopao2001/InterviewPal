import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ navigation }) {
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

function CategoriesScreen({ navigation }) {
  
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


function QuestionScreen({ route, navigation }) {
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

function SummaryScreen({ navigation }) {
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

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Categories" component={CategoriesScreen} />
        <Stack.Screen name="Question" component={QuestionScreen} initialParams={{ questionId: 1 }}/>
        <Stack.Screen name="Summary" component={SummaryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
