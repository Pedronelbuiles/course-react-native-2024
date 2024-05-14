import React, {useEffect} from 'react';
import {Pressable, Text, View} from 'react-native';
import {styles} from '../../../config/app-theme';
import {useNavigation} from '@react-navigation/native';
import {useCounterStore} from '../../store/counter-store';

export const SettingsScreen = () => {
  const navigation = useNavigation();
  const count = useCounterStore(state => state.count);
  const incrementBy = useCounterStore(state => state.incrementBy);
  useEffect(() => {
    navigation.setOptions({
      title: 'Count: ' + count,
    });
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Count: {count}</Text>

      <Pressable onPress={() => incrementBy(1)} style={styles.primaryButton}>
        <Text>+1</Text>
      </Pressable>

      <Pressable onPress={() => incrementBy(-1)} style={styles.primaryButton}>
        <Text>-1</Text>
      </Pressable>
    </View>
  );
};
