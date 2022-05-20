import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';
import { Colors } from '../utils/colors';
import JokeCard from '../components/JokeCard';
import Button from '../components/Button';
import Carousel from '../components/Carousel';
import { randomCardColor } from '../utils/jokeCardColor';

const DUMMY_JOKES = [
  "Anyway. You're the designer and you know that to do best.",
  "Mmmh. Do you think it will be easy to read? Let's make it bigger 😂",
  "There's something that doesn't work. But I'm not sure what.",
  "Anyway. You're the designer and you know that to do best."
]


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
});


const renderJokeItem = ({item}: {item: any}) => {
  return <JokeCard content={item} backgroundColor={randomCardColor()}/>;
};

const Home = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <View>
        <Text style={styles.title}>Things you can say</Text>
        <Text style={styles.title}>to annoy designers.</Text>
      </View>
      <View style={styles.cardContainer}>
        <Carousel items={DUMMY_JOKES} renderItem={renderJokeItem} />
      </View>
      <Button title="Save" />
    </SafeAreaView>
  )
}

export default Home