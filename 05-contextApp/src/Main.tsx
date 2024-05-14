import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {RootNavigator} from './presentation/navigators/RootNavigator';

export const Main = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};
