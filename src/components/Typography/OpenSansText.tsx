import React, { FC } from 'react'
import { Text, StyleSheet, ViewStyle, StyleProp } from 'react-native';


const FONT_NAME = "OpenSans";
type TextVariants = "Bold" | "Regular";
type TextSizes = "H1" | "H2";


interface Props {
  variant?: TextVariants;
  size: TextSizes;
  style?: StyleProp<ViewStyle>;
}

const sizesStyle = StyleSheet.create({
  H1: {
    fontSize: 30,
  },
  H2: {
    fontSize: 24,
  },
});

const variantsStyle = StyleSheet.create({
  Bold: {
    fontFamily: `${FONT_NAME}-Bold`,
  },
  Regular: {
    fontFamily: `${FONT_NAME}-Regular`,
  },
});

const OpenSansText: FC<Props> = ({children, variant = "Regular", size, style}) => {
  return (
    <Text style={[sizesStyle[size], variantsStyle[variant], style]}>{children}</Text>
  );
};

export default OpenSansText