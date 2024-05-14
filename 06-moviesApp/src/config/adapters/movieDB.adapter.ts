import {AxiosAdapter} from './http/axios.adapter';

export const movieDBFetcher = new AxiosAdapter({
  baseUrl: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '8557dbb056a82ddc1a9379098da36b7d',
    language: 'es',
  },
});
