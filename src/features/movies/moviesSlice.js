import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movies: []
}

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addItem: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.movies = action.payload
      // state.total = state.total + action.payload.price
    },
    deleteItem: (state, action) => {

    }
  },
});

// Action creators are generated for each case reducer function
export const { addItem, deleteItem } = moviesSlice.actions

export default moviesSlice.reducer;

