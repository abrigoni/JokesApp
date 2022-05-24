import React, { FC } from 'react'
import { Pressable, Text, StyleSheet, ButtonProps } from 'react-native';
import { Colors } from '../../utils/colors';

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    borderRadius: 8,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 18,
    fontFamily: 'OpenSans-SemiBold',
    color: Colors.white,
  },
});

const Button: FC<ButtonProps> = (props) => {
  return (
    <Pressable style={styles.button} {...props}>
      <Text style={styles.text}>{props.title}</Text>
    </Pressable>
  )
}

export default Button