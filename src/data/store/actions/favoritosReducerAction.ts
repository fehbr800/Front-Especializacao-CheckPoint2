import { CHARREDUCERENUM } from "../reducers/favoritesReducer";
import { IChars } from "../../dto/IChar";
import { AnyAction } from "@reduxjs/toolkit";

export const fillChars = (chars: IChars[]): AnyAction => {
  return {
    type: CHARREDUCERENUM.FILL_CHARS,
    payload: chars,
  };
};

export const removeChars = (charId: number): AnyAction => {
  return {
    type: CHARREDUCERENUM.REMOVE_CHARS,
    payload: charId,
  };
};

export const clearChars = (): AnyAction => {
  return {
    type: CHARREDUCERENUM.CLEAR_CHARS,
  };
};


export type FavoritesAction = ReturnType<
  typeof fillChars | typeof removeChars | typeof clearChars
>;
