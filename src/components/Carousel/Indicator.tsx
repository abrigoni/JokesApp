import React from 'react';
import {Animated, StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  stepperContainer: {
    marginTop: 32,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  step: {
    backgroundColor: 'black',
    height: 5,
    width: 50,
    borderRadius: 8,
    marginHorizontal: 8,
  },
});

const Indicator = ({scrollX, itemsQty}: {scrollX: any; itemsQty: number}) => {
  return (
    <Animated.View style={styles.stepperContainer}>
      {Array(itemsQty)
        .fill(1)
        .map((item, idx) => {
          const inputRange = [
            (idx - 1) * width,
            idx * width,
            (idx + 1) * width,
          ];
          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.2, 1, 0.2],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View style={[styles.step, {opacity}]} key={item + idx} />
          );
        })}
    </Animated.View>
  );
};


export default Indicator
