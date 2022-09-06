import { useQuery } from 'react-query';
import { MovieType } from '../common/types';
import api from './api';

type fetchMovieById = (movieId: string) => Promise<MovieType>;

const fetchMovie: fetchMovieById = async (movieId: string) => {
  const response = api.get(
    `/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}`
  );
  return (await response).data;
};

const useFetchMovieById = (movieId: string) =>
  useQuery(['movie', movieId], () => fetchMovie(movieId));

export default useFetchMovieById;
