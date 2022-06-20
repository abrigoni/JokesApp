import React from 'react';
import {Text, StyleSheet} from 'react-native';

const FONT_NAME = 'OpenSans';
type TextVariants = 'Bold' | 'Regular' | 'SemiBold';
type TextSizes = 'H1' | 'H2' | 'Body';

type OpenSansTextProps = {
  children: React.ReactNode;
  variant?: TextVariants;
  size?: TextSizes;
  onPress?: () => void;
  style?: any;
}

const sizesStyle = StyleSheet.create({
  H1: {
    fontSize: 30,
  },
  H2: {
    fontSize: 24,
  },
  Body: {
    fontSize: 17,
  },
});

const variantsStyle = StyleSheet.create({
  Bold: {
    fontFamily: `${FONT_NAME}-Bold`,
  },
  SemiBold: {
    fontFamily: `${FONT_NAME}-SemiBold`,
  },
  Regular: {
    fontFamily: `${FONT_NAME}-Regular`,
  },
});

const OpenSansText = ({
  children,
  variant = 'Regular',
  size = "Body",
  onPress,
  style,
}: OpenSansTextProps) => {
  return (
    <Text style={[sizesStyle[size], variantsStyle[variant], style]} onPress={onPress}>
      {children}
    </Text>
  );
};

export default OpenSansText;
