import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorites: [],
}

function getIndex(item, arr){
    return arr.findIndex(arrItem => arrItem.id === item.id);
}

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.favorites = [...state.favorites, action.payload];
      // state.total = state.total + action.payload.price
    },
    deleteFavorite: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.favorites.splice(getIndex(action.payload, state.favorites), 1);
      // state.total = state.total - action.payload.price;
    }
  },
});

// Action creators are generated for each case reducer function
export const { addFavorite, deleteFavorite } = favoritesSlice.actions

export default favoritesSlice.reducer;

