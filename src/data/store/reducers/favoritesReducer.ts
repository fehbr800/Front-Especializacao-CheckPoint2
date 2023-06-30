import { AnyAction } from "@reduxjs/toolkit";
import { IChars } from "../../dto/IChar";

export enum CHARREDUCERENUM {
  FILL_CHARS = "FILL_CHARS",
  REMOVE_CHARS = "REMOVE_CHARS",
  CLEAR_CHARS = "CLEAR_CHARS",
}

// Função para carregar os favoritos do armazenamento
export const loadFavorites = (): IChars[] => {
    const favoritesString = localStorage.getItem("favorites");
    if (favoritesString) {
      return JSON.parse(favoritesString);
    }
    return [];
  };

const INITIAL_STATE: IChars[] = loadFavorites();

export default function favoritesReducer(
  state = INITIAL_STATE,
  action: AnyAction
): IChars[] {
  switch (action.type) {
    case CHARREDUCERENUM.FILL_CHARS:
      const filledChars = action.payload as IChars[];
      saveFavorites(filledChars);
      return filledChars;
    case CHARREDUCERENUM.REMOVE_CHARS:
      const charIdToRemove = action.payload;
      const updatedState = state.filter((char: IChars) => char.id !== charIdToRemove);
      saveFavorites(updatedState);
      return updatedState;
    case CHARREDUCERENUM.CLEAR_CHARS:
      clearFavorites();
      return [];
    default:
      return state;
  }
}

// Função para salvar os favoritos no armazenamento
export const saveFavorites = (favorites: IChars[]) => {
  localStorage.setItem("favorites", JSON.stringify(favorites));
};



// Função para limpar os favoritos do armazenamento
export const clearFavorites = () => {
  localStorage.removeItem("favorites");
};
