import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {MovieDBMovie} from '../../../infrastructure/interfaces/movie-db.responses';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';
import {FullMovie} from '../../entities/movie.entity';

export const getMovieByIdUseCase = async (
  fetcher: HttpAdapter,
  movieId: number,
): Promise<FullMovie> => {
  try {
    const movieInfo = await fetcher.get<MovieDBMovie>(`/${movieId}`);
    return MovieMapper.fromMovieDBToEnitty(movieInfo);
  } catch (error) {
    throw new Error(`Cannot get movie by it : ${movieId}`);
  }
};
