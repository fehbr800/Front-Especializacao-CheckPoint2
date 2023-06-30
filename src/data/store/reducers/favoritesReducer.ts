import { AnyAction } from "@reduxjs/toolkit";
import { IChars } from "../../dto/IChar";

export enum CHARREDUCERENUM {
    FILL_CHARS = "FILL_CHARS",
    REMOVE_CHARS = "REMOVE_CHARS",
    CLEAR_CHARS = "CLEAR_CHARS"
}

const INITIAL_STATE: IChars[] = []

export default function favoritesReducer(state = INITIAL_STATE, action: AnyAction): IChars[] {
    switch(action.type) {
        case CHARREDUCERENUM.FILL_CHARS:
            return action.payload as IChars[];
            case CHARREDUCERENUM.REMOVE_CHARS:
              return state.filter((char: IChars)=> char.id !== action.payload);
            case CHARREDUCERENUM.CLEAR_CHARS:
              return [];
        default:
            return state
    }
}
