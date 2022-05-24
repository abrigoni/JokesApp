import React, { FC, useContext, useLayoutEffect, useState } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Pressable,
} from 'react-native';
import { Colors } from '../utils/colors';
import JokeCard from '../components/JokeCard';
import Button from '../components/Button';
import Carousel from '../components/Carousel';
import { AppContext } from '../context/AppContext';
import { OpenSansText } from '../components/Typography';
import { SAVED_JOKES_ROUTE } from './SavedJokes';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Joke } from '../types/Joke';


const { width } = Dimensions.get('window');

const DUMMY_JOKES: Joke[] = [
  {
    id: "j1",
    joke: "Anyway. You're the designer and you know that to do best.",
  },
    {
    id: "j2",
    joke: "Mmmh. Do you think it will be easy to read? Let's make it bigger 😂",
  },
    {
    id: "j3",
    joke: "There's something that doesn't work. But I'm not sure what.",
  },
    {
    id: "j4",
    joke: "Anyway. You're the designer and you know that to do best.",
  },
];

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


const renderJokeItem = (scrollX: any, {item}: {item: Joke}) => {
  const backgroundColor = scrollX.interpolate({
    inputRange: JOKE_CARD_COLORS.map((_, i) => i * width),
    outputRange: JOKE_CARD_COLORS.map((bg) => bg),
  });
  return <JokeCard content={item.joke} backgroundColor={backgroundColor}/>;
};

export const HOME_ROUTE = 'Home';

interface Props {
  navigation: any;
};

const Home: FC<Props> = ({navigation}) => {
  const {saveJoke, savedJokes} = useContext(AppContext);
  const [currentIndex, setCurrentIndex] = useState(0);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable style={{flexDirection: 'row'}} onPress={() => navigation.navigate(SAVED_JOKES_ROUTE)}>
          <OpenSansText size="Body" variant="Bold">Saved: {savedJokes.length} </OpenSansText>
          <Icon name="heart" color="#e74c3c" size={24} />
        </Pressable>
      ),
    });
  }, [navigation, savedJokes]);

  const handleChangeIndex = (index: number) => {
    setCurrentIndex(index);
  };

  const handleSave = () => {
    saveJoke(DUMMY_JOKES[currentIndex]);
  };
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.screenContent}>
        <View>
          <Text style={styles.title}>Things you can say</Text>
          <Text style={styles.title}>to annoy designers.</Text>
        </View>
        <View style={styles.cardContainer}>
          <Carousel items={DUMMY_JOKES} renderItem={renderJokeItem} updateIndex={handleChangeIndex} />
        </View>
        <Button title="Save" onPress={handleSave} />
      </View>
    </SafeAreaView>
  )
}

export default Home