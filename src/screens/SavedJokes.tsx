import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, {FC, useContext, useEffect, useLayoutEffect} from 'react';
import {View, StyleSheet, Dimensions, FlatList} from 'react-native';
import IconButton from '../components/IconButton';
import JokeCard from '../components/JokeCard';
import {OpenSansText} from '../components/Typography';
import {AppContext} from '../context/AppContext';
import { AppNavigatorStackParamList } from '../navigation/types';
import {Colors} from '../utils/colors';

export const SAVED_JOKES_ROUTE = 'SavedJokes';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingVertical: 24,
    paddingHorizontal: width * 0.05,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    height: height * 0.25,
    margin: 10,
    paddingTop: 30,
    paddingBottom: 10,
    maxWidth: width * 0.35,
  },
  title: {
    fontSize: 12,
  },
  author: {
    fontSize: 14,
  },
  fallbackText: {
    textAlign: 'center',
  },
});

type SavedJokesProps = NativeStackScreenProps<AppNavigatorStackParamList>;

const SavedJokes: FC<SavedJokesProps> = ({navigation}) => {
  const {savedJokes, removeJoke} = useContext(AppContext);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <OpenSansText size="Body" variant="Bold">
          {savedJokes.length}
        </OpenSansText>
      ),
    });
  }, [navigation, savedJokes]);

  const handleDelete = (id: string) => {
    removeJoke(id);
  };
  return (
    <View style={styles.screen}>
      {savedJokes.length === 0 ? (
        <View style={styles.center}>
          <OpenSansText style={styles.fallbackText} size="H2" variant="Regular">
            Nothing saved 😭
          </OpenSansText>
        </View>
      ) : (
        <FlatList
          data={savedJokes}
          numColumns={2}
          renderItem={({item}) => (
            <JokeCard
              content={item.joke}
              backgroundColor={Colors.orange}
              style={styles.card}
              titleStyle={styles.title}
              authorStyle={styles.author}
              BottomIcon={
                <IconButton
                  name='trash'
                  size={20}
                  onPress={handleDelete.bind(this, item.id)}
                />
              }
            />
          )}
        />
      )}
    </View>
  );
};

export default SavedJokes;
