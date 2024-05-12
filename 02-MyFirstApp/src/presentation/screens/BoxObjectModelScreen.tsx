import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>BoxObjectScreen</Text> */}
      <View style={styles.purpleBox}>
        <Text style={{color: 'white'}}>Hello world</Text>
      </View>
      {/* <View style={styles.purpleBox}></View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    flex: 1,
  },
  title: {
    fontSize: 30,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderWidth: 10,
  },
  purpleBox: {
    height: 30,
    marginHorizontal: 20,
    marginVertical: 50,
    backgroundColor: 'purple',
    padding: 5,
  },
});
