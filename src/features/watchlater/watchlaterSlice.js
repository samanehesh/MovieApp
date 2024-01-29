import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  watchlater: [],
}

function getIndex(item, arr){
    return arr.findIndex(arrItem => arrItem.id === item.id);
}

export const watchlaterSlice = createSlice({
  name: 'watchlater',
  initialState,
  reducers: {
    addToWatch: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.watchlater = [...state.watchlater, action.payload];
      // state.total = state.total + action.payload.price
    },
    deleteToWatch: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.watchlater.splice(getIndex(action.payload, state.watchlater), 1);
      // state.total = state.total - action.payload.price;
    }
  },
});

// Action creators are generated for each case reducer function
export const { addToWatch, deleteToWatch } = watchlaterSlice.actions

export default watchlaterSlice.reducer;

