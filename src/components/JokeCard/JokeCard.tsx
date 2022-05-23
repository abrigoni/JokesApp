import React, { FC } from 'react'
import { Animated, StyleSheet, Text, StyleProp, ViewStyle, Dimensions } from 'react-native';
import { Colors } from '../../utils/colors';

const { width } = Dimensions.get('window');


const styles = StyleSheet.create({
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 80,
    paddingBottom: 30,
    borderRadius: 8,
    marginHorizontal: 20,
    width: width * 0.8,
  },
  text: {
    color: Colors.white,
    fontSize: 24,
    fontFamily: 'OpenSans-Bold',
    textAlign: 'center',
  },
  author: {
    fontSize: 22,
    fontFamily: 'IndieFlower',
    color: Colors.white,
  },
});

interface Props {
  content: string;
  backgroundColor: string;
  style?: StyleProp<ViewStyle>;
};

const JokeCard: FC<Props> = ({content, style, backgroundColor}) => {
  return (
    <Animated.View style={[styles.card, style, {backgroundColor}]}>
      <Text style={styles.text}>{content}</Text>
      <Text style={styles.author}>@designhumor</Text>
    </Animated.View>
  )
}

export default JokeCard