import * as React from 'react';
import { Text, View, Button } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { categories, questions } from '../data-hardcoded/data';
import { getQuestionsByCatId } from '../data_helpers/dataHelpers';

// export default function CategoriesScreen({ navigation }) {
  
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Choose A Category</Text>
//       <Button
//         title="General/Interpersonal"
//         onPress={() =>
//           navigation.navigate('Question', {catId: 1})                    
//         }
//       />

//       <Button
//         title="Customer Service Scenarios"
//         onPress={() => {
          
//           navigation.navigate('Question', {catId: 2});
//         }}
//       />

//       <Button
//         title="IT Technical"
//         onPress={() => {
          
//           navigation.navigate('Question', {catId: 3}) 
          
//         }}
//       />

//       <Button
//         title="Managament Scenarios"
//         onPress={() => {
          
//           navigation.navigate('Question', {catId: 4});
//         }}
//       />
//     </View>
//   );
// }

export function CategoriesScreen({navigation}) {
   const categoriesList = categories.map((cat) => 
            <Button
                title={cat.catName}
             onPress={() => {
                 let QuestionsByCategory = getQuestionsByCatId(cat.id, questions)
                 let randomQuestionsArray = randomValuesFromArray(QuestionsByCategory);
                 navigation.navigate('Question', {array: randomQuestionsArray})  
             }                  
            }
             />
          );
   return (
     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {categoriesList}
     </View>
   )
};