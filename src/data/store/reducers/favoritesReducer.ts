import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IChars } from "../../dto/IChar";

interface FavoritesState {
  characters: IChars[];
}

const initialState: FavoritesState = {
  characters: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    fillChars(state, action: PayloadAction<IChars[]>) {
      state.characters = action.payload;
    },
    clearChars(state) {
      state.characters = [];
    },
    addFavorite(state, action: PayloadAction<IChars>) {
      state.characters.push(action.payload);
    },
    removeFavorite(state, action: PayloadAction<number>) {
      state.characters = state.characters.filter(
        (char) => char.id !== action.payload
      );
    },
  },
});

export const {
  fillChars,
  clearChars,
  addFavorite,
  removeFavorite,
} = favoritesSlice.actions;

export default favoritesSlice.reducer;
