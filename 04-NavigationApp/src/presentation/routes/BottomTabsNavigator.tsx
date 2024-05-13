import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Tab1Screen} from '../screens/tabs/Tab1Screen';
import {globalColors} from '../theme/theme';
import {HeaderComponent} from '../components/header/Header';
import {Text} from 'react-native';
import {TopTabsNavigator} from './TopTabsNavigator';
import {StackNavigator} from './StackNavigator';
import { IonIcon } from '../components/shared/IonIcon';

const Tab = createBottomTabNavigator();

export const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: globalColors.background,
      }}
      screenOptions={{
        header: () => <HeaderComponent />,
        tabBarLabelStyle: {
          marginBottom: 5,
        },
        headerStyle: {
          elevation: 0,
          borderColor: 'transparent',
          shadowColor: 'transparent',
        },
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarActiveTintColor: globalColors.primary,
      }}>
      <Tab.Screen
        name="Tab1"
        options={{
          title: '',
          tabBarIcon: ({color}) => (
            <IonIcon name="accessibility-outline" color={color} />
          ),
        }}
        component={Tab1Screen}
      />
      <Tab.Screen
        name="Tab2"
        options={{
          title: '',
          tabBarIcon: ({color}) => (
            <IonIcon name="airplane-outline" color={color} />
          ),
        }}
        component={TopTabsNavigator}
      />
      <Tab.Screen
        name="Tab3"
        options={{
          title: '',
          tabBarIcon: ({color}) => (
            <IonIcon name="bar-chart-outline" color={color} />
          ),
        }}
        component={StackNavigator}
      />
    </Tab.Navigator>
  );
};
