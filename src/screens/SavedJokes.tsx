import React, { FC, useContext, useLayoutEffect } from 'react'
import { Text, View, StyleSheet, Dimensions, FlatList } from 'react-native'
import IconButton from '../components/IconButton';
import JokeCard from '../components/JokeCard';
import { OpenSansText } from '../components/Typography';
import { AppContext } from '../context/AppContext';
import { Colors } from '../utils/colors';

export const SAVED_JOKES_ROUTE = "SavedJokes";

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingVertical: 24,
    paddingHorizontal: width * 0.05,
  },
  card: {
    height: height * 0.25,
    margin: 10,
  },
  title: {
    fontSize: 12,
  },
  author: {
    fontSize: 16,
  },
});

interface Props {
  navigation: any; // todo
}

const SavedJokes: FC<Props> = ({navigation}) => {
  const { savedJokes, removeJoke } = useContext(AppContext);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <OpenSansText size="Body" variant="Bold">{savedJokes.length}</OpenSansText>,
    });
  }, [navigation, savedJokes]);

  const handleDelete = (id: string) => {
    removeJoke(id);
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={savedJokes}
        numColumns={2}
        renderItem={({ item }) => (
            <JokeCard
              content={item.joke}
              backgroundColor={Colors.orange}
              style={styles.card}
              titleStyle={styles.title}
              authorStyle={styles.author}
              BottomIcon={<IconButton iconProps={{name: 'trash', size: 20,}} onPress={handleDelete.bind(this, item.id)} />}
            />
          )
        }
      />
    </View>
  )
}

export default SavedJokes