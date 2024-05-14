import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {styles} from '../../../config/app-theme';
import {useProfile} from '../../store/profile-store';

export const ProfileScreen = () => {
  const name = useProfile(state => state.name);
  const email = useProfile(state => state.email);
  const changeProfile = useProfile(state => state.changeProfile);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.title}>{email}</Text>

      <Pressable
        onPress={() => useProfile.setState({name: 'Nel Moreno'})}
        style={styles.primaryButton}>
        <Text>Cambiar nombre</Text>
      </Pressable>

      <Pressable
        onPress={() => useProfile.setState({email: 'nel.moreno@nerv.com'})}
        style={styles.primaryButton}>
        <Text>Cambiar email</Text>
      </Pressable>

      <Pressable
        onPress={() => changeProfile('Pedro Builes', 'pedro.builes@nerv.com')}
        style={styles.primaryButton}>
        <Text>Regresar al original</Text>
      </Pressable>
    </View>
  );
};
