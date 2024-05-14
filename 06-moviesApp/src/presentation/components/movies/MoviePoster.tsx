import React from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import {Movie} from '../../../core/entities/movie.entity';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStaackParams } from '../../navigation/Navigation';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

export const MoviePoster = ({movie, height = 420, width = 300}: Props) => {
  const navigation = useNavigation<NavigationProp<RootStaackParams>>();
  return (
    <Pressable
      onPress={() => navigation.navigate('Details', {movieId: movie.id})}
      style={({pressed}) => ({
        width,
        height,
        opacity: pressed ? 0.9 : 1,
        marginHorizontal: 4,
        paddingBottom: 20,
        paddingHorizontal: 7,
      })}>
      <View style={style.imageContaienr}>
        <Image source={{uri: movie.poster}} style={style.image} />
      </View>
    </Pressable>
  );
};

const style = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 18,
  },
  imageContaienr: {
    flex: 1,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
  },
});
