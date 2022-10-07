import * as React from 'react';
import {useState, useEffect} from 'react';
import { Text, View, Button } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { lastAnswerByQuestionID } from '../data_helpers/dataHelpers';
import axios from 'axios';

// export default function SummaryScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>This is the summary page</Text>
//       <Button
//         title="Start again"
//         onPress={() => {
          
//           navigation.navigate('Home');
//         }}
//       />
//     </View>
//   );
// }

export default function SummaryScreen({ route, navigation }) {
  const { array } = route.params;
  const [answers, setAnswers] = useState([]);
  const array1 = [...answers];
  //const test = lastAnswerByQuestionID(array1, 1)
  //console.log(test)

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
     <Text>{q.text}</Text>
     <Text>{lastAnswerByQuestionID(array1, q.id)}</Text>
    </View>
   )
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>This is the summary page</Text>
      {questionsList}
      <Button
        title="Start again"
        onPress={() => {
          
          navigation.navigate('Dashboard');
        }}
      />
    </View>
  );
}