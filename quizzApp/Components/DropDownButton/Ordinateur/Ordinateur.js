import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading'
import useFonts from '../../useFonts';
import Logo from '../../Navbar/Logo';

function Ordinateur(props) {
  const navigation = useNavigation();
  const route = useRoute();
  const subtitles = route.params ? route.params.subtitles : null;
  const subsubtitles = route.params ? route.params.subsubtitles : null;

  const [IsReady, SetIsReady] = useState(false);

  const fontsLoaded = useFonts();

  useEffect(() => {
    if (fontsLoaded) {
      SetIsReady(true);
    }
  }, [fontsLoaded]);

  const handleSubTitlePress = (index) => {
    navigation.navigate('QuizzList', { subsubtitles: subsubtitles, index : index });
  }

  if (!IsReady) {
    return <AppLoading />;
  }

  return (
    <ScrollView>
    <Logo></Logo>
    <View style={styles.subTitlesContainer}>
        {subtitles.map((subtitle, index) => (
            <TouchableOpacity key={index} style={styles.subtitle} onPress={() => handleSubTitlePress(index)}>
                <Text style={{color: '#fff', fontFamily: 'ComicNeue-Bold'}}>{subtitle}</Text>
            </TouchableOpacity>
        ))}
        </View>
        </ScrollView>
  )
}

const styles = StyleSheet.create({
    subTitlesContainer: {
      padding: 10,
      backgroundColor: '#ffffff',
      width: '60%',
      display: 'flex',
      flexDirection: 'column',
      marginLeft: '20%',
      marginTop: '10%',
      flex: 1,
    },
    subtitle: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#3498db',
      flex: 1,
      height: '23%',
      marginBottom: '5%',
      paddingBottom: '12%',
      paddingTop: '12%'
      },
  });

export default Ordinateur;