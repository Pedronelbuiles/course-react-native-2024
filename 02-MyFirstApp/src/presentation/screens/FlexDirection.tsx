import React from 'react';
import {StyleSheet, View} from 'react-native';

export const FlexDirectionScreen = () => {
  return (
    <View style={style.container}>
      <View style={[style.box, style.box1]} />
      <View style={[style.box, style.box2]} />
      <View style={[style.box, style.box3]} />
      <View style={[style.box, style.box4]} />
      <View style={[style.box, style.box1]} />
      <View style={[style.box, style.box2]} />
      <View style={[style.box, style.box3]} />
      <View style={[style.box, style.box4]} />
      <View style={[style.box, style.box1]} />
      <View style={[style.box, style.box2]} />
      <View style={[style.box, style.box3]} />
      <View style={[style.box, style.box4]} />
      <View style={[style.box, style.box1]} />
      <View style={[style.box, style.box2]} />
      <View style={[style.box, style.box3]} />
      <View style={[style.box, style.box4]} />
      <View style={[style.box, style.box1]} />
      <View style={[style.box, style.box2]} />
      <View style={[style.box, style.box3]} />
      <View style={[style.box, style.box4]} />
      <View style={[style.box, style.box1]} />
      <View style={[style.box, style.box2]} />
      <View style={[style.box, style.box3]} />
      <View style={[style.box, style.box4]} />
      <View style={[style.box, style.box1]} />
      <View style={[style.box, style.box2]} />
      <View style={[style.box, style.box3]} />
      <View style={[style.box, style.box4]} />
      <View style={[style.box, style.box1]} />
      <View style={[style.box, style.box2]} />
      <View style={[style.box, style.box3]} />
      <View style={[style.box, style.box4]} />
      <View style={[style.box, style.box1]} />
      <View style={[style.box, style.box2]} />
      <View style={[style.box, style.box3]} />
      <View style={[style.box, style.box4]} />
      <View style={[style.box, style.box1]} />
      <View style={[style.box, style.box2]} />
      <View style={[style.box, style.box3]} />
      <View style={[style.box, style.box4]} />
      <View style={[style.box, style.box1]} />
      <View style={[style.box, style.box2]} />
      <View style={[style.box, style.box3]} />
      <View style={[style.box, style.box4]} />
      <View style={[style.box, style.box1]} />
      <View style={[style.box, style.box2]} />
      <View style={[style.box, style.box3]} />
      <View style={[style.box, style.box4]} />
      <View style={[style.box, style.box1]} />
      <View style={[style.box, style.box2]} />
      <View style={[style.box, style.box3]} />
      <View style={[style.box, style.box4]} />
      <View style={[style.box, style.box1]} />
      <View style={[style.box, style.box2]} />
      <View style={[style.box, style.box3]} />
      <View style={[style.box, style.box4]} />
      <View style={[style.box, style.box1]} />
      <View style={[style.box, style.box2]} />
      <View style={[style.box, style.box3]} />
      <View style={[style.box, style.box4]} />
      <View style={[style.box, style.box1]} />
      <View style={[style.box, style.box2]} />
      <View style={[style.box, style.box3]} />
      <View style={[style.box, style.box4]} />
      <View style={[style.box, style.box1]} />
      <View style={[style.box, style.box2]} />
      <View style={[style.box, style.box3]} />
      <View style={[style.box, style.box4]} />
      <View style={[style.box, style.box1]} />
      <View style={[style.box, style.box2]} />
      <View style={[style.box, style.box3]} />
      <View style={[style.box, style.box4]} />
      <View style={[style.box, style.box1]} />
      <View style={[style.box, style.box2]} />
      <View style={[style.box, style.box3]} />
      <View style={[style.box, style.box4]} />
      <View style={[style.box, style.box1]} />
      <View style={[style.box, style.box2]} />
      <View style={[style.box, style.box3]} />
      <View style={[style.box, style.box4]} />
      <View style={[style.box, style.box1]} />
      <View style={[style.box, style.box2]} />
      <View style={[style.box, style.box3]} />
      <View style={[style.box, style.box4]} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#969696',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    flexDirection: 'column',
    flexWrap: 'wrap',
    // gap: 10,
    // columnGap: 35,
  },
  box: {
    // flex: 1,
    width: 100,
    height: 100,
  },
  box1: {
    backgroundColor: '#5856D6',
    // top: -100,
  },
  box2: {
    alignSelf: 'flex-end',
    backgroundColor: '#4240a2',
  },
  box3: {
    backgroundColor: '#2e2d71',
    // top: 100,
  },
  box4: {
    backgroundColor: '#222115',
    // top: 100,
  },
});
