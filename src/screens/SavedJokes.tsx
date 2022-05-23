import React from 'react'
import { Text, View, StyleSheet, Dimensions, FlatList } from 'react-native'
import IconButton from '../components/IconButton';
import JokeCard from '../components/JokeCard';
import { Colors } from '../utils/colors';

export const SAVED_JOKES_ROUTE = "SavedJokes";

const { width, height } = Dimensions.get('window');

const DUMMY_JOKES = [
  "Anyway. You're the designer and you know that to do best.",
  "Mmmh. Do you think it will be easy to read? Let's make it bigger 😂",
  "There's something that doesn't work. But I'm not sure what.",
  "Anyway. You're the designer and you know that to do best.",
  "Anyway. You're the designer and you know that to do best.",
  "Mmmh. Do you think it will be easy to read? Let's make it bigger 😂",
  "There's something that doesn't work. But I'm not sure what.",
  "Anyway. You're the designer and you know that to do best.",
  "Anyway. You're the designer and you know that to do best.",
  "Mmmh. Do you think it will be easy to read? Let's make it bigger 😂",
  "There's something that doesn't work. But I'm not sure what.",
  "Anyway. You're the designer and you know that to do best.",
  "Anyway. You're the designer and you know that to do best.",
  "Mmmh. Do you think it will be easy to read? Let's make it bigger 😂",
  "There's something that doesn't work. But I'm not sure what.",
  "Anyway. You're the designer and you know that to do best.",
]

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


const SavedJokes = () => {
  return (
    <View style={styles.screen}>
      <FlatList
        data={DUMMY_JOKES}
        numColumns={2}
        renderItem={({ item }) => (
            <JokeCard
              content={item}
              backgroundColor={Colors.orange}
              style={styles.card}
              titleStyle={styles.title}
              authorStyle={styles.author}
              BottomIcon={<IconButton iconProps={{name: 'trash', size: 20,}} onPress={() => {}} />}
            />
          )
        }
      />
    </View>
  )
}

export default SavedJokes