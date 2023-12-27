import React, { useEffect, useState } from 'react';
import { View, Text, Button, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import RadioOption from '../RadioOption/RadioOption'; // Adjust the import path
import { useNavigation, useRoute } from '@react-navigation/native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading'
import useFonts from '../useFonts';
import Logo from '../Navbar/Logo';

function Quizz() {
  const [dataQuizz, setDataQuizz] = useState([]);
  const [selectedValue, setSelectedValue] = useState({});
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [quizzSelected, setQuizzSelected] = useState();
  const [error, setError] = useState(null);
  const navigation = useNavigation();
  const route = useRoute();
  const subtitle = route.params ? route.params.subtitlePath : null;

  const [IsReady, SetIsReady] = useState(false);

  const fontsLoaded = useFonts();

  useEffect(() => {
    if (fontsLoaded) {
      SetIsReady(true);
    }
  }, [fontsLoaded]);

  useEffect(() => {
    (subtitle && subtitle !== "Programmation")&&
    fetch(`http://192.168.43.59:4000/api/Quizz/${subtitle}`)
      .then(response => response.json())
      .then(data => {
        setDataQuizz(data);
        setShowResults(false);
        setScore(0);
      })
      .catch(err => {
        setError(err);
      });
  }, [subtitle]);

  const handleRadioChange = (id, selectedOption) => {
    setSelectedValue(prevValues => ({
      ...prevValues,
      [id]: selectedOption,
    }));
  };

  const handleSubmit = () => {
    let newScore = 0;
    dataQuizz.forEach(item => {
      if (selectedValue[item.id] === item.reponse_correcte) {
        newScore += 1;
      }
    });
    setScore(newScore);
    setShowResults(true);
  };

  if (!IsReady) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
    <Logo></Logo>

      <ScrollView>
        {error && <Text>Error: {error.message}</Text>}
        <Text style={styles.quizzTitle}>{subtitle}</Text>

        {dataQuizz.map((item, index) => (
          <View key={item.id} style={styles.quizzQuestion}>
            <Text style={styles.textQuestion}> {`${index + 1}. ${item.question}`}</Text>
            <View style={styles.textAnswer}>
              <RadioOption
                id={`${item.id}_1`}
                name={`drone_${item.id}`}
                value={item.reponse_1}
                checked={selectedValue[item.id] === item.reponse_1}
                onChange={() => handleRadioChange(item.id, item.reponse_1)}
                label={item.reponse_1}
                showResults={showResults}
                correctAnswer={item.reponse_correcte}
                isIncorrectOption={showResults && selectedValue[item.id] === item.reponse_1 && item.reponse_1 !== item.reponse_correcte}
                isCorrectOption={showResults && item.reponse_1 === item.reponse_correcte}
              />
            </View>
            <View style={styles.textAnswer}>
              <RadioOption
                id={`${item.id}_2`}
                name={`drone_${item.id}`}
                value={item.reponse_2}
                checked={selectedValue[item.id] === item.reponse_2}
                onChange={() => handleRadioChange(item.id, item.reponse_2)}
                label={item.reponse_2}
                showResults={showResults}
                correctAnswer={item.reponse_correcte}
                isIncorrectOption={showResults && selectedValue[item.id] === item.reponse_2 && item.reponse_2 !== item.reponse_correcte}
                isCorrectOption={showResults && item.reponse_2 === item.reponse_correcte}
              />
            </View>
            <View style={styles.textAnswer}>
              <RadioOption
                id={`${item.id}_3`}
                name={`drone_${item.id}`}
                value={item.reponse_3}
                checked={selectedValue[item.id] === item.reponse_3}
                onChange={() => handleRadioChange(item.id, item.reponse_3)}
                label={item.reponse_3}
                showResults={showResults}
                correctAnswer={item.reponse_correcte}
                isIncorrectOption={showResults && selectedValue[item.id] === item.reponse_3 && item.reponse_3 !== item.reponse_correcte}
                isCorrectOption={showResults && item.reponse_3 === item.reponse_correcte}
              />
            </View>
          </View>
        ))}

        <View>
          {showResults && <Text style={styles.score}>Score: {score}/{dataQuizz.length}</Text>}
        </View>

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 10,
    backgroundColor: '#fff',
  },
  quizzTitle: {
    fontFamily: 'ComicNeue-BoldItalic',
    fontSize: 20,
    color:  '#3498db',
    textAlign: 'center',
    paddingTop: 10
  },
  quizzQuestion: {
    marginVertical: 10,
    width: '94%',
    paddingLeft: 10,
  },
  textQuestion: {
    textAlign: 'justify',
    fontFamily: 'ComicNeue-Bold',
    // padding: 10,

  },
  textAnswer: {
    width: '95%',
    fontFamily: 'ComicNeue-Bold'
  },
  submitButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'ComicNeue-Bold'
  },
  score:{
    fontFamily: 'ComicNeue-Bold',
    textAlign: 'center',
    fontSize: 16,
    backgroundColor: '#3498db',
    color: 'white'
  }
});

export default Quizz;

