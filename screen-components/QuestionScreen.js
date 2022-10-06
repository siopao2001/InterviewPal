//import * as React from 'react';
import React, {useState, useEffect} from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios';
// import { answers } from '../data-hardcoded/data';
// import { addAnswer } from '../data_helpers/dataHelpers';

const addAnswer = function(ansX, questX) {
  axios.post("http://localhost:8080/answers", 
  {answer: ansX, 
   questionid: questX 
  }).catch((error) => {
    console.log("Error", error)
  })
}


export default function QuestionScreen({ route, navigation }) {
  const { array, questionIndex} = route.params;
  const [text, onChangeText] = useState("Your answer");
  const [time, setTime] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{time}</Text>
      <Text>{array[questionIndex].text}</Text>
      <TextInput style={{width: 300, height: 100, margin: 12, borderWidth: 1, padding: 10}} 
        placeholder="type your answer" 
        onChangeText={onChangeText}
        multiline={true} 
        value={text}
        />
      {questionIndex > 2
        ?  <Button 
            title="Summary" 
            disabled={text === "Your answer" ? true: false}
            onPress={() => {
                 addAnswer(text, array[questionIndex].id)
                 navigation.navigate('Summary',{array: array})
               }
              }
            />
        : <Button
        title="Next Question"
        disabled={text === "Your answer" ? true: false}
        onPress={() => {
              addAnswer(text, array[questionIndex].id)
              navigation.push('Question', {array: array, questionIndex: questionIndex + 1})
           }
         }
      />
      }
    </View>
  );
}