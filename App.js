import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/login';
import Signup from './components/signup';
import Dashboard from './components/dashboard';
const Stack = createStackNavigator();
import { registerRootComponent } from 'expo';
import HomeScreen from './screen-components/HomeScreen';
import CategoriesScreen from './screen-components/CategoriesScreen';
import QuestionScreen from './screen-components/QuestionScreen';
import SummaryScreen from './screen-components/SummaryScreen';


function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Signup"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#aa42f5',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen 
        name="Signup" 
        component={Signup} 
        options={{ title: 'Signup' }}
      />       
      <Stack.Screen 
        name="Login" 
        component={Login} 
        options={
          {title: 'Login'}
        }
      />
      <Stack.Screen 
       name="Dashboard" 
       component={Dashboard} 
       options={
         { title: 'Dashboard' }
       }
      />
       <Stack.Screen name="Categories" component={CategoriesScreen} />
       <Stack.Screen name="Question" component={QuestionScreen} initialParams={{ questionIndex: 0 }}/>
       <Stack.Screen name="Summary" component={SummaryScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
      {/* <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Categories" component={CategoriesScreen} />
        <Stack.Screen name="Question" component={QuestionScreen} initialParams={{ questionIndex: 0 }}/>
        <Stack.Screen name="Summary" component={SummaryScreen} />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}

registerRootComponent(App);