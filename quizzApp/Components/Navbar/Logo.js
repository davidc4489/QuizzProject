import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Logo () {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Navbar');
  }

  return (
    <View>
    <View style={styles.navbar}>
      <TouchableOpacity style={styles.logo} onPress={() => handlePress()}>
        <Text style={styles.quizz}>Quizz</Text>
        <Text style={styles.for}>For</Text>
        <Text style={styles.geeks}>Geeks</Text>
      </TouchableOpacity>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
navbar: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#3498db',
  },
  logo: {
    marginLeft: '30%',
    flexDirection: 'row',
  },
  quizz: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  for: {
    fontSize: 18,
    color: '#f39c12',
  },
  geeks: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  }
});

export default Logo;