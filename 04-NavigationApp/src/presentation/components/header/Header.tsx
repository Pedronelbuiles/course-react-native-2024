import {
  DrawerActions,
  NavigationProp,
  useNavigation,
} from '@react-navigation/native';
import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {RootStackParams} from '../../routes/StackNavigator';
import {HamburguerMenu} from '../shared/HamburguerMenu';

export const HeaderComponent = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
      }}>
      <Pressable
        style={{
          position: 'absolute',
          left: 0,
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          padding: 7,
        }}
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
        <HamburguerMenu />
      </Pressable>
      <Text style={{fontSize: 24}}>Mi propio header mi fai</Text>
    </View>
  );
};
