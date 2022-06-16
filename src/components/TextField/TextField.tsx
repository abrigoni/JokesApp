import React, { useState } from "react";
import { Dimensions, StyleSheet, TextInput, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import IconButton from '../IconButton';

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 44,
    paddingHorizontal: width*0.03,
    borderColor: 'black',
    borderBottomWidth: 1,
    marginVertical: 16,
  },
  input: {
    flex: 1,
    paddingLeft: 16,
  },
});

interface Props {
  secure?: boolean;
  name: string;
  placeholder: string;
  value: any;
  handleChange: (name: string, value: string) => void;
  iconLeft?: string;
  iconLeftSize?: number;
  iconRight?: string;
  handleIconRightPress?: () => void;
}

const TextField = ({secure = false, name, placeholder, value, handleChange, iconLeft, iconLeftSize = 20, iconRight, handleIconRightPress}: Props) => {

  return (
    <View style={styles.inputContainer}>
      {iconLeft && <Icon name={iconLeft} size={iconLeftSize} color={"#95a5a6"} />}
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={'#95a5a6'}
        autoCorrect={false}
        secureTextEntry={secure}
        style={styles.input}
        value={value}
        onChangeText={handleChange.bind(this, name)}
      />
      {iconRight && handleIconRightPress && <IconButton name={iconRight} size={20} onPress={handleIconRightPress} />}
    </View>
  )
};

export default TextField;
