import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movies: []
}

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    fetchMovie: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.movies= [...state.movies, action.payload];      // state.total = state.total + action.payload.price
    },
    saveMovie: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.movies= [...state.favorites, action.payload];      // state.total = state.total + action.payload.price
    }


  }
});

// Action creators are generated for each case reducer function
export const { fetchMovie, } = moviesSlice.actions

export default moviesSlice.reducer;

