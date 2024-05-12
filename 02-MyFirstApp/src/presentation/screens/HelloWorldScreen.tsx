import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {
  name?: string;
}

export default ({name = 'world'}: Props) => {
  return (
    <View style={Styles.container}>
      <Text numberOfLines={1} ellipsizeMode="tail" style={Styles.title}>
        Hello, {name}
      </Text>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 45,
    textAlign: 'center',
    color: 'black',
    padding: 20,
  },
});
