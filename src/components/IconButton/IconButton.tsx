import React from 'react';
import {Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {IconProps} from 'react-native-vector-icons/Icon';


const IconButton = ({onPress, ...props}: IconProps) => {
  return (
    <Pressable onPress={onPress}>
      <Icon {...props} />
    </Pressable>
  );
};

export default IconButton;
