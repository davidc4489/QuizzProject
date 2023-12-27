import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading'
import useFonts from '../useFonts';

function DropDownButton(props) {
  const navigation = useNavigation();

  const [IsReady, SetIsReady] = useState(false);

  const fontsLoaded = useFonts();

  useEffect(() => {
    if (fontsLoaded) {
      SetIsReady(true);
    }
  }, [fontsLoaded]);

  const handleTitlePress = (title) => {
    title === 'Ordinateur' && navigation.navigate('Ordinateur', { subtitles: props.subtitles, 
                                                                  subsubtitles: props.subsubtitles,
                                                                });
    title === 'React' && navigation.navigate('ReactQ', { subtitles: props.subtitles, 
                                                         subsubtitles: props.subsubtitles,
                                                        });
    title === 'Structures de Données' && navigation.navigate('DS', { subtitles: props.subtitles, 
                                                                     subsubtitles: props.subsubtitles,
                                                                    });
    title === 'Machine Learning' && navigation.navigate('MachineLearning', { subtitles: props.subtitles, 
                                                                      subsubtitles: props.subsubtitles,
                                                                      });
    title === 'Langages de Programmation' && navigation.navigate('Langages', { subtitles: props.subtitles, 
                                                                               subsubtitles: props.subsubtitles,
                                                                               subsubsubtitles: props.subsubsubtitles
                                                                              });
  }

  if (!IsReady) {
    return <AppLoading />;
  }

  return (
    <TouchableOpacity onPress={() => handleTitlePress(props.title)} style={styles.sidebar}>
      <View>
          <Text style={{color: '#fff', fontFamily: 'ComicNeue-Bold'}}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  sidebar: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3498db',
    flex: 1,
    height: '23%',
    marginBottom: '5%',
  }
});

export default DropDownButton;

