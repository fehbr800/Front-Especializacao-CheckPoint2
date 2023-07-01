import { AnyAction } from "@reduxjs/toolkit";
import { IChars, ICharsReducer } from "../../dto/IChar";

export enum CHAR_REDUCER_ENUM {
  FILL_CHARS = "FILL_CHARS",
  CLEAR_CHARS = "CLEAR_CHARS",
  FILL_CHARS_AND_CACHED = "FILL_CACHED",
  UPDATE_FAVORITE = "UPDATE_FAVORITE"
}

const INITIAL_STATE: ICharsReducer = { toShow: [], cached: [] };

export default function charReducer(
  state = INITIAL_STATE,
  action: AnyAction
): ICharsReducer {
  switch (action.type) {
    case CHAR_REDUCER_ENUM.FILL_CHARS:
      return { ...state, toShow: action.payload };
    case CHAR_REDUCER_ENUM.FILL_CHARS_AND_CACHED:
      return { ...state, cached: action.payload, toShow: action.payload };
    case CHAR_REDUCER_ENUM.UPDATE_FAVORITE:
      return {...state, cached: action.payload};
    default:
      return state;
  }
}
