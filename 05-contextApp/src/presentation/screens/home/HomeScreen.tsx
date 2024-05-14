import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../../../config/app-theme';
import {useProfile} from '../../store/profile-store';
import {useCounterStore} from '../../store/counter-store';

export const HomeScreen = () => {
  const name = useProfile(state => state.name);
  const email = useProfile(state => state.email);
  const count = useCounterStore(state => state.count);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.title}>{email}</Text>
      <Text style={styles.title}>Count: {count}</Text>
    </View>
  );
};