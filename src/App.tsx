/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import JokeCard from './components/JokeCard';
import Button from './components/Button';
import { Colors } from './utils/colors';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    backgroundColor: Colors.white,
  },
  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 32,
    color: 'black',
    textAlign: 'center',
  },
  cardContainer: {
    marginVertical: 32,
    flex: 1,
  },
  stepperContainer: {
    marginTop: 32,
  },
});


const App = () => {

  return (
    <SafeAreaView style={styles.screen}>
      <View>
        <Text style={styles.title}>Things you can say</Text>
        <Text style={styles.title}>to annoy designers.</Text>
      </View>
      <View style={styles.cardContainer}>
        <JokeCard content="Anyway. You're the designer and you know that to do best." />
        <View style={styles.stepperContainer}>
          <Text>Stepper</Text>
        </View>
      </View>
      <Button title="Save" />
    </SafeAreaView>
  );
};

export default App;
