import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { getQuestionsByCatId, randomValuesFromArray } from '../data_helpers/dataHelpers';

export default function CategoriesScreen({navigation}) {
   const [categories, setCategories] = useState([]);
   const [questions, setQuestions] = useState([]);
   useEffect(() => {
      axios.get("http://localhost:8080/categories")
      .then((response) => {
         setCategories(response.data)
      }).catch((error) => {
         console.log("Error", error)
      })
   },[])

   useEffect(() => {
      axios.get("http://localhost:8080/questions")
      .then((response) => {
         setQuestions(response.data)
      }).catch((error) => {
         console.log("Error", error)
      })
   },[])

   const categoriesList = categories.map((cat) => 
            <Button
                key={cat.id}
                title={cat.name}
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