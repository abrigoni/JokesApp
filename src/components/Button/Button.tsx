import React, { FC } from 'react'
import { Pressable, Text, StyleSheet } from 'react-native';
import { Colors } from '../../utils/colors';

type Props = {
  title: string;
};

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

const Button: FC<Props> = ({title}) => {
  return (
    <Pressable style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  )
}

export default Button