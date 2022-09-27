import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screen-components/HomeScreen';
import CategoriesScreen from './screen-components/CategoriesScreen';
import QuestionScreen from './screen-components/QuestionScreen';
import SummaryScreen from './screen-components/SummaryScreen';


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
