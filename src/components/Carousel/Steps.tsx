import React, { FC } from 'react'
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  stepsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  step: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    height: 5,
    width: 50,
    borderRadius: 8,
    marginHorizontal: 8,
  },
  activeStep: {
    backgroundColor: 'black',
  },
})

interface Props {
  length: number;
  currentIndex: number;
}

const Steps: FC<Props> = ({length, currentIndex = 0}) => {
  return (
    <View style={styles.stepsContainer}>
      {Array(length).fill(1).map((_, idx) => {
        return <View style={idx === currentIndex ? [styles.step, styles.activeStep] : styles.step} />;
      })}
    </View>
  );
}

export default Steps