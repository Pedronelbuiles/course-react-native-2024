import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Text} from 'react-native';
import {RootStaackParams} from '../../navigation/Navigation';
import {UseMovie} from '../../hooks/UseMovie';
import {MovieHeader} from '../../components/movie/MovieHeader';
import {MovieDetails} from '../../components/movie/MovieDetails';
import {ScrollView} from 'react-native-gesture-handler';

interface Props extends StackScreenProps<RootStaackParams, 'Details'> {}

export const DetailsScreen = ({route}: Props) => {
  // const {movieId} = useRoute().params;
  const {movieId} = route.params;
  const {isLoading, movie, castState = []} = UseMovie(movieId);
  console.log(movie);

  if (isLoading) {
    return <Text>Cargando...</Text>;
  }
  return (
    <ScrollView>
      <MovieHeader
        poster={movie?.poster!}
        originalTitle={movie?.originalTitle!}
        title={movie?.title!}
      />
      <MovieDetails movie={movie!} cast={castState} />
    </ScrollView>
  );
};
