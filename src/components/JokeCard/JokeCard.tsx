import React from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  Dimensions,
  View,
  Platform,
  TextStyle,
} from 'react-native';
import {Colors} from '../../utils/colors';
import { OpenSansText } from '../Typography';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  cardContainer: {
    width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 80,
    paddingBottom: 30,
    paddingHorizontal: 20,
    borderRadius: 8,
    width: width * 0.80,
  },
  text: {
    color: Colors.white,
    textAlign: 'center',
  },
  author: {
    fontSize: 22,
    fontFamily: Platform.select({
      ios: 'IndieFlower',
      android: 'IndieFlower-Regular',
    }),
    color: Colors.white,
  },
  bottom: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  authorWithIcon: {
    marginRight: 8,
  },
});

interface JokeCardProps {
  content: string;
  backgroundColor?: string;
  style?: any;
  titleStyle?: TextStyle;
  authorStyle?: TextStyle;
  BottomIcon?: React.ReactNode;
}

const JokeCard = ({
  content,
  style,
  titleStyle,
  authorStyle,
  BottomIcon = undefined,
}: JokeCardProps) => {
  const renderBottom = () => {
    if (!BottomIcon) {
      return <Text style={[styles.author, authorStyle]}>@designhumor</Text>;
    }
    return (
      <View style={styles.bottom}>
        <Text style={[styles.author, authorStyle, styles.authorWithIcon]}>
          @designhumor
        </Text>
        {BottomIcon}
      </View>
    );
  };
  return (
    <View style={styles.cardContainer}>
      <Animated.View style={[styles.card, style]}>
        <OpenSansText style={[styles.text, titleStyle]} variant="Bold" size="H2">{content}</OpenSansText>
        {renderBottom()}
      </Animated.View>
    </View>
  );
};

export default JokeCard;
