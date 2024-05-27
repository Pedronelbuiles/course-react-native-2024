import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {RootStaackParams} from '../../navigation/Navigation';
import {UseMovie} from '../../hooks/UseMovie';
import {MovieHeader} from '../../components/movie/MovieHeader';
import {MovieDetails} from '../../components/movie/MovieDetails';
import {ScrollView} from 'react-native-gesture-handler';
import {FullScreenLoader} from '../../components/loaders/FullScreenLoader';

interface Props extends StackScreenProps<RootStaackParams, 'Details'> {}

export const DetailsScreen = ({route}: Props) => {
  // const {movieId} = useRoute().params;
  const {movieId} = route.params;
  const {isLoading, movie, castState = []} = UseMovie(movieId);

  if (isLoading) {
    return <FullScreenLoader />;
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
