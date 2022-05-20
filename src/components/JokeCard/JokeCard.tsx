import React, { FC } from 'react'
import { View, StyleSheet, Text, StyleProp, ViewStyle } from 'react-native';
import { Colors } from '../../utils/colors';

const styles = StyleSheet.create({
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 80,
    paddingBottom: 30,
    paddingHorizontal: 12,
    backgroundColor: Colors.purple, //todo: prop/randomize
    borderRadius: 8,
  },
  text: {
    color: Colors.white,
    fontSize: 24,
    fontFamily: 'OpenSans-Bold',
    textAlign: 'center',
  },
  author: {
    fontSize: 22,
    fontFamily: 'IndieFlower-Regular',
    color: Colors.white,
  },
});

interface Props {
  content: string;
  style?: StyleProp<ViewStyle>;
};

const JokeCard: FC<Props> = ({content, style}) => {
  return (
    <View style={[styles.card, style]}>
      <Text style={styles.text}>{content}</Text>
      <Text style={styles.author}>@designhumor</Text>
    </View>
  )
}

export default JokeCard