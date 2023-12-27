import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading'
import useFonts from '../../useFonts';
import Logo from '../../Navbar/Logo';
import { Dimensions } from 'react-native';

function QuizzList(props) {
  const navigation = useNavigation();
  const route = useRoute();
  const subsubtitles = route.params ? route.params.subsubtitles : null;
  const indexQuizz = route.params ? route.params.index : null;

  const [IsReady, SetIsReady] = useState(false);

  const fontsLoaded = useFonts();

  useEffect(() => {
    if (fontsLoaded) {
      SetIsReady(true);
    }
  }, [fontsLoaded]);

  const handleSubSubTitlePress = (quizz) => {
    navigation.navigate('Quizz', { subtitlePath: quizz });
  };

  // Fonction pour diviser le tableau en lots de taille donnée
  const chunkArray = (arr, size) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    );
  };

  // Diviser les subsubtitles en lots de 3
  const subsubtitlesChunks = chunkArray(subsubtitles[indexQuizz], 3);

  if (!IsReady) {
    return <AppLoading />;
  }

  return (
    <ScrollView>
    <Logo></Logo>

      <View style={styles.subSubTitlesContainer}>
        
        {subsubtitles[indexQuizz][0] !== 'Quizz Tableau C++ Niveau 1' ?
        
        subsubtitles.map((chunk, index) => (

          <View key={index} style={styles.subsubtitleRow}>
            {chunk.map((quizz, subIndex) => ( 
              index == indexQuizz && (
              <TouchableOpacity
                key={subIndex}
                onPress={() => handleSubSubTitlePress(quizz)}
                style={styles.subsubtitle}
              >
                <Text style={{ color: '#fff', fontSize: 13, height: '290%',  textAlign: 'center', fontFamily: 'ComicNeue-Bold' }}>{quizz}</Text>
              </TouchableOpacity>
            )
            ))}
          </View>
        )):
        subsubtitlesChunks.map((chunk, index) => (

          <View key={index} style={styles.subsubtitleRow}>
            {chunk.map((quizz, subIndex) => ( 
              <TouchableOpacity
                key={subIndex}
                onPress={() => handleSubSubTitlePress(quizz)}
                style={styles.subsubtitle}
              >
                <Text style={{ color: '#fff', fontSize: 13, height: '290%',  textAlign: 'center' }}>{quizz}</Text>
              </TouchableOpacity>
            
            ))}
          </View>
        ))
        }
      </View>
    </ScrollView>
  );
}

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  subSubTitlesContainer: {
    padding: 8,
    backgroundColor: '#ffffff',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '10%',
    height: windowHeight,
  },
  subsubtitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subsubtitle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3498db',
    width: '31%', // Ajustez la largeur selon vos besoins
    height: 104, // Ajustez la hauteur selon vos besoins
    marginBottom: '5%',
    paddingBottom: '12%',
    paddingTop: '12%',
    borderRadius: 5
  },
});

export default QuizzList;

