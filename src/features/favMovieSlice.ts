import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { stat } from 'fs';
import { Action } from 'history';
import { MovieType } from '../common/types';
import Movie from '../pages/Movie';

type Movie = Omit<
  MovieType,
  'overview' | 'vote_average' | 'release_date' | 'runtime' | 'genres'
>;

interface FavoriteState {
  movies: Movie[];
}
const initialState: FavoriteState = {
  movies: [],
};

const addFavoritMovie = (
  state: FavoriteState,
  action: PayloadAction<Movie>
) => {
  const existingMovie = state.movies.find(
    (movie) => movie.id === action.payload.id
  );
  if (!existingMovie) {
    state.movies.push(action.payload);
  }
};

const removeFavoriteMovie = (
  state: FavoriteState,
  action: PayloadAction<number>
) => {
  const updateFavoriteList = state.movies.filter(
    (movie) => movie.id !== action.payload
  );
  state.movies = updateFavoriteList;
};

export const favotiesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    addFavoritMovie,
    removeFavoriteMovie,
  },
});

export const {
  addFavoritMovie: addFavorit,
  removeFavoriteMovie: removeFavorite,
} = favotiesSlice.actions;

export default favotiesSlice.reducer;
