import React, { FC } from 'react'
import { Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { IconProps } from 'react-native-vector-icons/Icon';

interface Props {
  iconProps: IconProps;
  onPress?: () => void;
}

const IconButton: FC<Props> = ({onPress, iconProps}) => {
  return (
    <Pressable onPress={onPress}>
      <Icon {...iconProps} />
    </Pressable>
  );
};

export default IconButton