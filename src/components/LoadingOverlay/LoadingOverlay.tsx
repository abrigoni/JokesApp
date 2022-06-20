import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

const styles=  StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

const LoadingOverlay = () => {
  return (
    <View style={styles.screen}>
      <ActivityIndicator size="large" />
    </View>
  )
}

export default LoadingOverlay;
