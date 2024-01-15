import { configureStore } from '@reduxjs/toolkit';
import favoriteReducer from '../features/favorites/favoritesSlice';
import moviesReducer from '../features/movies/moviesSlice';

export const store = configureStore({
  reducer: {
    favorites: favoriteReducer,
    movies: moviesReducer
  }
});
