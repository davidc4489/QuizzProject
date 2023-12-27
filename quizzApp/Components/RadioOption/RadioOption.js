import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading'

import useFonts from '../useFonts';

function RadioOption({
  id,
  name,
  value,
  checked,
  onChange,
  label,
  isIncorrectOption,
  isCorrectOption,
}) {

  const [IsReady, SetIsReady] = useState(false);

  const fontsLoaded = useFonts();

  useEffect(() => {
    if (fontsLoaded) {
      SetIsReady(true);
    }
  }, [fontsLoaded]);

  if (!IsReady) {
    return <AppLoading />;
  }

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <RadioButton.Android
        value={value}
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => onChange(value)}
        color={isCorrectOption ? 'green' : isIncorrectOption ? 'red' : 'black'}
      />
      <Text
        style={{
          color: isCorrectOption ? 'green' : isIncorrectOption ? 'red' : 'black',
          marginLeft: 8,
          fontFamily: 'ComicNeue-Bold'
        }}
      >
        {label}
      </Text>
    </View>
  );
}

export default RadioOption;