import { useQuery } from 'react-query';
import { MovieType } from '../common/types';
import api from './api';

type PaginateFetch = (page: number) => Promise<MovieType[]>;

const fetchPaginatedMovies: PaginateFetch = async (page = 1) => {
  const { data } = await api.get(
    `/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
  );
  return data.results;
};

const usePaginatedFetchMovies = (page: number) =>
  useQuery(['movies', page], () => fetchPaginatedMovies(page), {
    keepPreviousData: true,
  });
export default usePaginatedFetchMovies;
