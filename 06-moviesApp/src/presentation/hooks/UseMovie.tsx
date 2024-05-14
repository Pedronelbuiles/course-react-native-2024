import {useEffect, useState} from 'react';
import * as UseCases from '../../core/use-cases';
import {movieDBFetcher} from '../../config/adapters/movieDB.adapter';
import {FullMovie} from '../../core/entities/movie.entity';

export const UseMovie = (moviId: number) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState<FullMovie>();

  useEffect(() => {
    loadMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moviId]);

  const loadMovie = async () => {
    setIsLoading(true);
    const fullMovie = await UseCases.getMovieByIdUseCase(
      movieDBFetcher,
      moviId,
    );
    setMovie(fullMovie);
    setIsLoading(false);
  };

  return {
    isLoading,
    movie,
  };
};
