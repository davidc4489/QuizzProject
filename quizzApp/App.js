import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Navbar from './Components/Navbar/Navbar';
import Quizz from './Components/Quizz/Quizz';
import Ordinateur from './Components/DropDownButton/Ordinateur/Ordinateur';
import ReactQ from './Components/DropDownButton/React/React';
import DS from './Components/DropDownButton/Structures de Donnees/DS';
import Langages from './Components/DropDownButton/Langages de Programmation/Langages';
import QuizzList from './Components/DropDownButton/QuizzList/QuizzList';
import LangagesList from './Components/DropDownButton/Langages de Programmation/LangagesList';
import MachineLearning from './Components/DropDownButton/MachineLearning/MachineLearning';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Navbar">
        <Stack.Screen name="Navbar" component={Navbar} />
        <Stack.Screen name="Quizz" component={Quizz} />
        <Stack.Screen name="Ordinateur" component={Ordinateur} />
        <Stack.Screen name="DS" component={DS} />
        <Stack.Screen name="ReactQ" component={ReactQ} />
        <Stack.Screen name="Langages" component={Langages} />
        <Stack.Screen name="QuizzList" component={QuizzList}/>
        <Stack.Screen name="LangagesList" component={LangagesList} />
        <Stack.Screen name="MachineLearning" component={MachineLearning} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
