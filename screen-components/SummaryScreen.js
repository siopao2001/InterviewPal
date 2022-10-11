import * as React from 'react';
import {useState, useEffect} from 'react';
import { Text, View, Button } from 'react-native';
import styles from '../styling/questionscreen.style';
import { lastAnswerByQuestionID } from '../data_helpers/dataHelpers';
import axios from 'axios';


export default function SummaryScreen({ route, navigation }) {
  const { array } = route.params;
  const [answers, setAnswers] = useState([]);
  const array1 = [...answers];

  useEffect(() => {
      axios.get("http://localhost:8080/answers")
           .then((response) => {
           setAnswers(response.data)
           
       }).catch((error) => {
           console.log(error);
     });
  }, [])

  const questionsList = array.map((q) =>
    <View key={q.id}> 
     <Text style={{fontWeight: 'bold'}}>{`Question: ${q.text}`}</Text>
     <Text>{`Your Answer: ${lastAnswerByQuestionID(array1, q.id)}`}</Text>
    </View>
   )
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>VIEW YOUR RESULTS</Text>
      {questionsList}
      <View style={styles.bottom}>
      <Button
        title="Start again"
        color="#fff"
        onPress={() => {
          
          navigation.navigate('Dashboard');
        }}
      />
      </View>
    </View>
  );
}