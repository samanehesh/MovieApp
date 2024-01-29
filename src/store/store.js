import { configureStore } from '@reduxjs/toolkit';
import favoriteReducer from '../features/favorites/favoritesSlice';
import watchlaterReducer from '../features/watchlater/watchlaterSlice';

import moviesReducer from '../features/movies/moviesSlice';

export const store = configureStore({
  reducer: {
    favorites: favoriteReducer,
    watchlater: watchlaterReducer,
    movies: moviesReducer
  }
});
