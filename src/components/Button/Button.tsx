import React from 'react';
import {Pressable, Text, StyleSheet, ButtonProps} from 'react-native';
import {Colors} from '../../utils/colors';
import { OpenSansText } from '../Typography';

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    borderRadius: 8,
    backgroundColor: 'black',
  },
  pressed: {
    opacity: 0.25,
  },
  text: {
    fontSize: 18,
    color: Colors.white,
  },
});

const Button = (props: ButtonProps) => {
  return (
    <Pressable
      style={({pressed}) =>
        pressed ? [styles.button, styles.pressed] : styles.button
      }
      {...props}>
      <OpenSansText style={styles.text} variant="SemiBold">{props.title}</OpenSansText>
    </Pressable>
  );
};

export default Button;
