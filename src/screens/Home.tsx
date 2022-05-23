import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import { Colors } from '../utils/colors';
import JokeCard from '../components/JokeCard';
import Button from '../components/Button';
import Carousel from '../components/Carousel';


const { width } = Dimensions.get('window');

const DUMMY_JOKES = [
  "Anyway. You're the designer and you know that to do best.",
  "Mmmh. Do you think it will be easy to read? Let's make it bigger 😂",
  "There's something that doesn't work. But I'm not sure what.",
  "Anyway. You're the designer and you know that to do best."
]


const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  screenContent: {
    flex: 1,
    paddingBottom: 24,
    paddingHorizontal: width * 0.05,
  },
  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 34,
    color: 'black',
    textAlign: 'center',
  },
  cardContainer: {
    marginVertical: 32,
    flex: 1,
  },
});

const JOKE_CARD_COLORS: string[] = [
  Colors.purple,
  Colors.orange,
  Colors.red,
  Colors.green,
];


const renderJokeItem = (scrollX: any, {item}: any) => {
  const backgroundColor = scrollX.interpolate({
    inputRange: JOKE_CARD_COLORS.map((_, i) => i * width),
    outputRange: JOKE_CARD_COLORS.map((bg) => bg),
  });
  return <JokeCard content={item} backgroundColor={backgroundColor}/>;
};

export const HOME_ROUTE = 'Home';

const Home = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.screenContent}>
        <View>
          <Text style={styles.title}>Things you can say</Text>
          <Text style={styles.title}>to annoy designers.</Text>
        </View>
        <View style={styles.cardContainer}>
          <Carousel items={DUMMY_JOKES} renderItem={renderJokeItem} />
        </View>
        <Button title="Save" />
      </View>
    </SafeAreaView>
  )
}

export default Home