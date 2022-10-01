import * as React from 'react';
import { Text, View, Button } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { lastAnswerByQuestionID } from '../data_helpers/dataHelpers';


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
  const { array, arrayofAns } = route.params;
  const questionsList = array.map((q) =>
    <View key={q.id}> 
     <Text>{q.text}</Text>
     <Text>{lastAnswerByQuestionID(arrayofAns, q.id)}</Text>
    </View>
   )
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>This is the summary page</Text>
      {questionsList}
      <Button
        title="Start again"
        onPress={() => {
          
          navigation.navigate('Home');
        }}
      />
    </View>
  );
}