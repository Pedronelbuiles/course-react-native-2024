import React from 'react';
import {Platform, Pressable, StyleSheet, Text} from 'react-native';

interface Props {
  label: string;
  onPress?: () => void;
  onLongPress?: () => void;
}

export const PrimaryButton = ({label, onPress, onLongPress}: Props) => {
  return (
    <Pressable
      onPress={() => onPress && onPress()}
      onLongPress={() => onLongPress && onLongPress()}
      style={({pressed}: {pressed: boolean}) => [
        styles.pressable,
        pressed && styles.pressablePressed,
      ]}>
      <Text style={{color: Platform.OS === 'android' ? 'white' : '#4746AB'}}>
        {label}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressable: {
    backgroundColor: Platform.OS === 'android' ? '#5856D6' : 'white',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 10,
  },
  pressablePressed: {
    backgroundColor: Platform.OS === 'android' ? '#4746AB' : 'white',
  },
});
