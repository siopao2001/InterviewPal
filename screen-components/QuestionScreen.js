//import * as React from 'react';
import React, { useState, useEffect } from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import styles from '../styling/questionscreen.style';
import ConfettiCannon from 'react-native-confetti-cannon';
import axios from 'axios';


const addAnswer = function (ansX, questX, timeX) {
  axios.post("http://localhost:8080/answers",
    {
      answer: ansX,
      questionid: questX,
      timer: timeX
    }).catch((error) => {
      console.log("Error", error)
    })
}


export default function QuestionScreen({ route, navigation }) {
  const { array, questionIndex } = route.params;
  const [text, onChangeText] = useState("Your answer");
  const [time, setTime] = useState(0);
  //Total time as parent state to show on Summary screen
  const [animate, SetAnimate] = useState(false);
  const [clickEvent, SetClickEvent] = useState(false);

  const startAnimation = () => {

    SetAnimate(true);
    SetClickEvent(true)

    setTimeout(() => {
      SetAnimate(false);
    }, 5000);
  };

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
      <Text>{time % 60 < 10 ? `${Math.floor(time / 60)}:0${time % 60}` : `${Math.floor(time / 60)}:${time % 60}`}</Text>
      <Text>{array[questionIndex].text}</Text>
      <TextInput style={{ width: 300, height: 100, margin: 12, borderWidth: 1, padding: 10 }}
        placeholder="type your answer"
        onChangeText={onChangeText}
        multiline={true}
        value={text}
      />
      <View style={styles.bottom}>
        {questionIndex > 2
          ?
          <Button
            title="Summary"
            disabled={text === "Your answer" ? true : false}
            color="#fff"
            onPress={
              () => {
                addAnswer(text, array[questionIndex].id, time);
                startAnimation();
                setTimeout(()=> navigation.navigate('Summary',{array: array}), 2800);
              }
            }

          />
          : <Button
            title="Next Question"
            color="#fff"
            disabled={text === "Your answer" ? true : false}
            onPress={() => {
              addAnswer(text, array[questionIndex].id, time)
              navigation.push('Question', { array: array, questionIndex: questionIndex + 1 })
            }
            }
          />

        }
      </View>

      {animate ?
        <ConfettiCannon
          count={250}
          origin={{ x: -10, y: 0 }}
        />
        : null
      }
    </View>

  );
}