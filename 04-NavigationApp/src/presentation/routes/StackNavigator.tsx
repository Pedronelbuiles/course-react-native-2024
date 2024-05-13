import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/home/HomeScreen';
import {ProductsScreens} from '../screens/products/ProductsScreens';
import {SettingsScreen} from '../screens/settings/SettingsScreen';
import {HeaderComponent} from '../components/header/Header';
import {ProductScreen} from '../screens/products/ProductScreen';

export type RootStackParams = {
  Home: undefined;
  Products: undefined;
  Product: {id: number; name: string};
  Settings: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
        header: () => <HeaderComponent />,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Products" component={ProductsScreens} />
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};
