import React from 'react';
import {Pressable, Text} from 'react-native';
import {colors, styles} from '../../config/theme/app-theme';

interface Props {
  label: string;
  color?: string;
  large?: boolean;
  balckText?: boolean;
  onPress: () => void;
}

export const CalculatorButton = ({
  label,
  color = colors.darkGray,
  large = false,
  balckText = false,
  onPress,
}: Props) => {
  return (
    <Pressable
      onPress={() => onPress()}
      style={({pressed}: {pressed: boolean}) => ({
        ...styles.button,
        backgroundColor: color,
        opacity: pressed ? 0.8 : 1,
        width: large ? 180 : 80,
        alignItems: large ? 'flex-start' : 'center',
        paddingLeft: large ? 20 : 0,
      })}>
      <Text
        style={{...styles.buttonText, color: balckText ? 'black' : 'white'}}>
        {label}
      </Text>
    </Pressable>
  );
};
