import { createAction } from "@reduxjs/toolkit";
import { IChars } from "../../dto/IChar";

export enum FavoritesActionTypes {
  ADD_FAVORITE = "ADD_FAVORITE",
  REMOVE_FAVORITE = "REMOVE_FAVORITE",
  CLEAR_FAVORITES = "CLEAR_FAVORITES",
}

export const addFavorite = createAction<IChars>(FavoritesActionTypes.ADD_FAVORITE);
export const removeFavorite = createAction<number>(FavoritesActionTypes.REMOVE_FAVORITE);
export const clearFavorites = createAction(FavoritesActionTypes.CLEAR_FAVORITES);
