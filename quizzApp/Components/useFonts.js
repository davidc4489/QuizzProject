import { useEffect, useState } from 'react';
import * as Font from 'expo-font';

const useFonts = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'ComicNeue-Bold': require('../assets/fonts/ComicNeue-Bold.ttf'),
        'ComicNeue-BoldItalic': require('../assets/fonts/ComicNeue-BoldItalic.ttf'),
      });
      setFontsLoaded(true);
    };

    loadFonts();

    // Cleanup function
    return () => {
      // You can add any cleanup logic here if needed
    };
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return fontsLoaded;
};

export default useFonts;