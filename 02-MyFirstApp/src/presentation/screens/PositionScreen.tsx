import React from 'react';
import {StyleSheet, View} from 'react-native';

export const PositionScreen = () => {
  return (
    <View style={style.constainer}>
      <View style={style.greeBox} />
      <View style={style.purpleBox} />
      <View style={style.orangeBox} />
    </View>
  );
};

const style = StyleSheet.create({
  constainer: {
    flex: 1,
    // height: 150,
    // width: 300,
    backgroundColor: '#28C4D9',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  purpleBox: {
    width: 100,
    height: 100,
    backgroundColor: '#5856D6',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    bottom: 0,
  },
  orangeBox: {
    width: 100,
    height: 100,
    backgroundColor: '#F0A23B',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    right: 0,
  },
  greeBox: {
    // width: 100,
    // height: 100,
    backgroundColor: 'green',
    borderWidth: 10,
    borderColor: 'white',
    // position: 'absolute',
    // bottom: 0,
    // right: 0,
    // top: 0,
    // left: 0,
    ...StyleSheet.absoluteFillObject,
  },
});
