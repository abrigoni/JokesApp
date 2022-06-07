import React from 'react';
import {Pressable, StyleSheet, ButtonProps, ViewStyle} from 'react-native';
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

const Button = ({style, ...props}: ButtonProps & { style: ViewStyle}) => {
  return (
    <Pressable
      style={({pressed}) =>
        pressed ? [styles.button, styles.pressed, style] : [styles.button, style]
      }
      {...props}>
      <OpenSansText style={styles.text} variant="SemiBold">{props.title}</OpenSansText>
    </Pressable>
  );
};

export default Button;
