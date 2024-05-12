import React from 'react';
import {StyleSheet, View} from 'react-native';

export const HomeworkScreen = () => {
  return (
    <View style={style.container}>
      <View style={[style.box, style.purpleBox]} />
      <View style={[style.box, style.orangeBox]} />
      <View style={[style.box, style.blueBox]} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28425B',
    //Tarea 2
    // justifyContent: 'center',
    // flexDirection: 'column-reverse',
    //Fin tarea 2

    //Tarea 3
    // flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent: 'center',
    //Fin tarea 3

    //Tarea 4
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'space-between',
    //Fin tarea 4

    //Tarea 5
    // flexDirection: 'row-reverse',
    // alignItems: 'flex-start',
    // justifyContent: 'space-between',
    //Fin tarea 5

    //Tarea 6
    // flexDirection: 'column-reverse',
    //Fin tarea 6

    //Tarea 7
    // flexDirection: 'column-reverse',
    // alignItems: 'center',
    // justifyContent: 'center',
    //Fin tarea 7

    //Tarea 8
    // flexDirection: 'column-reverse',
    // alignItems: 'center',
    // justifyContent: 'center',
    //Fin tarea 8

    //Tarea 9
    // flexDirection: 'column-reverse',
    // alignItems: 'center',
    // justifyContent: 'center',
    //Fin tarea 9

    //Tarea 10
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'center',
    //Fin tarea 10
  },
  box: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',

    //Tarea 5
    // height: '100%',
    //Fin tarea 5

    //Tarea 6
    // width: '100%',
    //Fin tarea 6
  },
  purpleBox: {
    backgroundColor: '#28C4D9',
    //Tarea 2
    // width: '100%',
    //Fin tarea 2

    //Tarea 3
    // position: 'relative',
    // top: 200,
    //Fin tarea 3

    //Tarea 4
    // alignSelf: 'flex-end',
    //Fin tarea 4

    //Tarea 6
    // flex: 2,
    //Fin tarea 6
  },
  orangeBox: {
    backgroundColor: '#F0A23B',
    //Tarea #1
    // flex: 1,
    //Fin tarea #1

    //Tarea 3
    // alignSelf: 'flex-start',
    //Fin tarea 3

    //Tarea 6
    // flex: 1,
    //Fin tarea 6

    //Tarea 7
    // position: 'relative',
    // left: 100,
    //Fin tarea 7

    //Tarea 8
    // position: 'relative',
    // left: 100,
    //Fin tarea 8

    //Tarea 10
    position: 'relative',
    top: 50,
    //Fin tarea 10
  },
  blueBox: {
    backgroundColor: '#5856D6',

    //Tarea 3
    // alignSelf: 'flex-end',
    // position: 'relative',
    // bottom: 200,
    //Fin tarea 3

    //Tarea 4
    // alignSelf: 'flex-start',
    //Fin tarea

    //Tarea 6
    // flex: 1,
    //Fin tarea 6

    //Tarea 8
    // position: 'relative',
    // bottom: 100,
    //Fin tarea 8
  },
});
