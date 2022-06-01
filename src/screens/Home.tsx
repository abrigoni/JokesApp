import React, {FC, useContext, useLayoutEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Dimensions,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import {JOKE_CARD_COLORS} from '../utils/colors';
import JokeCard from '../components/JokeCard';
import Button from '../components/Button';
import Carousel from '../components/Carousel';
import {AppContext} from '../context/AppContext';
import {OpenSansText} from '../components/Typography';
import {SAVED_JOKES_ROUTE} from './SavedJokes';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Joke} from '../types/Joke';
import useJokes from '../hooks/useJokes';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppNavigatorStackParamList } from '../navigation/types';

const {width} = Dimensions.get('window');

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
    color: 'black',
    textAlign: 'center',
  },
  cardContainer: {
    marginVertical: 32,
    flex: 1,
  },
  loading: {
    flex: 1,
    marginVertical: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
});



const renderJokeItem = (scrollX: any, {item}: {item: Joke}) => {
  const backgroundColor = scrollX.interpolate({
    inputRange: JOKE_CARD_COLORS.map((_, i) => i * width),
    outputRange: JOKE_CARD_COLORS.map(bg => bg),
  });
  return <JokeCard content={item.joke} backgroundColor={backgroundColor} />;
};

export const HOME_ROUTE = 'Home';

type HomeProps = NativeStackScreenProps<AppNavigatorStackParamList>;

const Home: FC<HomeProps> = ({navigation}) => {
  const {activeJokes, loading, triggerFetchMore} = useJokes();
  const {saveJoke, savedJokes} = useContext(AppContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable
          style={styles.row}
          onPress={() => navigation.navigate(SAVED_JOKES_ROUTE)}
        >
          <OpenSansText size="Body" variant="Bold">
            Saved: {savedJokes.length}{' '}
          </OpenSansText>
          <Icon name="heart" color="#e74c3c" size={24} />
        </Pressable>
      ),
    });
  }, [navigation, savedJokes]);

  const handleChangeIndex = (index: number) => {
    setCurrentIndex(index);
  };

  const handleFetchMore = () => {
    triggerFetchMore();
  };

  const handleSave = () => {
    saveJoke(activeJokes[currentIndex]);
  };
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.screenContent}>
        <View>
          <OpenSansText style={styles.title} size="H1" variant="Bold">
            Things you can say to annoy designers.
          </OpenSansText>
        </View>
        {loading ? (
          <View style={styles.loading}>
            <ActivityIndicator size="large" />
          </View>
        ) : (
          <View style={styles.cardContainer}>
            <Carousel
              items={activeJokes}
              renderItem={renderJokeItem}
              updateIndex={handleChangeIndex}
              onFetchMore={handleFetchMore}
            />
          </View>
        )}
        <Button title="Save" onPress={handleSave} />
      </View>
    </SafeAreaView>
  );
};

export default Home;
