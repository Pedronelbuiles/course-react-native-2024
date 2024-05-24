import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Cast} from '../../../core/entities/cast.entity';

interface Props {
  actor: Cast;
}

export const CastActor = ({actor}: Props) => {
  return (
    <View style={style.container}>
      <Image source={{uri: actor.avatar}} style={style.actorImage} />

      <View style={style.actorInfo}>
        <Text style={style.actorName}>{actor.name}</Text>
        <Text style={style.actorCharacter}>{actor.character}</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    marginRight: 10,
    paddingLeft: 10,
    display: 'flex',
    flexDirection: 'column',
    width: 100,
  },
  actorImage: {
    width: 100,
    height: 150,
    borderRadius: 10,
  },
  actorInfo: {
    marginLeft: 10,
    marginTop: 4,
  },
  actorName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  actorCharacter: {
    fontSize: 12,
    opacity: 0.7,
  },
});
