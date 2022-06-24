import React, {FC, useCallback, useContext, useLayoutEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Dimensions,
  Pressable,
  ActivityIndicator,
  Animated,
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
import analytics from '@react-native-firebase/analytics';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  screenContent: {
    flex: 1,
    paddingBottom: 24,
  },
  title: {
    color: 'black',
    textAlign: 'center',
    paddingHorizontal: width * 0.05,
  },
  carouselContainer: {
    marginVertical: 32,
    flex: 1,
    overflow: 'visible',
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
  buttonSpacing: {
    marginHorizontal: width * 0.05,
  },
});


const renderJokeItem = (scrollX: Animated.Value, {item, index}: {item: Joke, index: number}) => {
  const backgroundColor = scrollX.interpolate({
    inputRange: JOKE_CARD_COLORS.map((_, i) => i * width),
    outputRange: JOKE_CARD_COLORS.map(bg => bg),
  });
  const inputRange = [
    (index - 1) * width,
    index * width,
    (index + 1) * width,
  ];
  const outputRange = ['0deg', '0deg', '10deg'];
  const translateX = scrollX.interpolate({inputRange, outputRange});
  return (
    <JokeCard
      content={item.joke}
      style={{transform: [{rotateZ: translateX}], backgroundColor}}
    />
  );
};

export const HOME_ROUTE = 'Home';

type HomeProps = NativeStackScreenProps<AppNavigatorStackParamList>;

const Home: FC<HomeProps> = ({navigation}) => {
  const {activeJokes, loading, triggerFetchMore, triggerFetchBack} = useJokes();
  const {saveJoke, savedJokes} = useContext(AppContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable
          style={styles.row}
          onPress={async () => {
            await analytics().logEvent('Navigate', {
              screen: 'Home',
              to: 'Saved',
            });
            navigation.navigate(SAVED_JOKES_ROUTE)}
          }
        >
          <OpenSansText size="Body" variant="Bold">
            Saved: {savedJokes.length}{' '}
          </OpenSansText>
          <Icon name="heart" color="#e74c3c" size={24} />
        </Pressable>
      ),
    });
  }, [navigation, savedJokes]);

  const handleChangeIndex = useCallback((index: number) => {
    setCurrentIndex(index);
  }, [setCurrentIndex]);

  const handleFetchMore = useCallback(() => {
    triggerFetchMore();
  }, [triggerFetchMore]);

  const handleFetchBack = useCallback(() => {
    triggerFetchBack();
  }, [triggerFetchBack]);

  const handleSave = useCallback(() => {
    saveJoke(activeJokes[currentIndex]);
  }, [saveJoke, activeJokes, currentIndex]);
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
          <View style={styles.carouselContainer}>
            <Carousel
              items={activeJokes}
              renderItem={renderJokeItem}
              updateIndex={handleChangeIndex}
              onFetchMore={handleFetchMore}
              onFetchBack={handleFetchBack}
            />
          </View>
        )}
        <Button style={styles.buttonSpacing} title="Save" onPress={handleSave} />
      </View>
    </SafeAreaView>
  );
};

export default Home;
