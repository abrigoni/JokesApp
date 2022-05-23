import React, { FC } from 'react'
import { Text, StyleSheet } from 'react-native';


const FONT_NAME = "OpenSans";
type TextVariants = "Bold" | "Regular";
type TextSizes = "H1" | "H2";


interface Props {
  variant?: TextVariants;
  size: TextSizes;
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

const OpenSansText: FC<Props> = ({children, variant = "Regular", size}) => {
  return (
    <Text style={[sizesStyle[size], variantsStyle[variant]]}>{children}</Text>
  );
};

export default OpenSansText