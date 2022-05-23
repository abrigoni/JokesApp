import React, { FC } from 'react'
import { Animated, StyleSheet, Text, StyleProp, ViewStyle, Dimensions, View } from 'react-native';
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
  bottom: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  authorWithIcon: {
    marginRight: 8,
  },
});

interface Props {
  content: string;
  backgroundColor: string;
  style?: StyleProp<ViewStyle>;
  titleStyle?: any;
  authorStyle?: any;
  BottomIcon?: any;
};

const JokeCard: FC<Props> = ({content, style, backgroundColor, titleStyle, authorStyle, BottomIcon = undefined}) => {
  
  const renderBottom = () => {
    if (!!!BottomIcon) {
      return <Text style={[styles.author, authorStyle]}>@designhumor</Text>;
    }
    return (
      <View style={styles.bottom}>
        <Text style={[styles.author, authorStyle, styles.authorWithIcon]}>@designhumor</Text>
        {BottomIcon}
      </View>
    )
  };
  return (
    <Animated.View style={[styles.card, style, {backgroundColor}]}>
      <Text style={[styles.text, titleStyle]}>{content}</Text>
      {renderBottom()}
    </Animated.View>
  )
}

export default JokeCard