import { Dispatch } from "react";
import { FILTER_REDUCER_ENUM } from "../reducers/filterReducer";
import { IActionType } from "./types";
import { IRootState } from "../index";
import { IChars } from "../../dto/IChar";
import { paginateAllChars } from "./charReducerActions";
import { CHAR_REDUCER_ENUM } from "../reducers/charReducer";
import { PAGINATION_REDUCER_ENUM } from "../reducers/paginationReducer";

const filterCharByInput = async (inputText: string, allChars: IChars[][]) => {
  return new Promise<IChars[]>((resolve, _) => {
    const filtered = allChars
      .flatMap((e) => e)
      .filter((f) => {
        const filterName = f.name
          .toLowerCase()
          .includes(inputText.toLowerCase().trim());
        return filterName;
      });
    resolve(filtered);
  });
};

export function changeFilterInput(dispatch: Dispatch<any>, payload: string) {
  dispatch({ type: FILTER_REDUCER_ENUM.CHANGE_TEXT, payload });
  dispatch(async (_: any, getState: () => IRootState) => {
    const { filterReducer, charReducer } = getState();
    const itens_page = 15;
    if (filterReducer.inputText.length > 0) {
      const filtrados = await filterCharByInput(
        filterReducer.inputText,
        charReducer.cached
      );

      const paginated = await paginateAllChars(filtrados, itens_page);
      dispatch({ type: CHAR_REDUCER_ENUM.FILL_CHARS, payload: paginated });
      dispatch({
        type: PAGINATION_REDUCER_ENUM.UPDATE,
        payload: { total: Math.round(charReducer.cached.flatMap((e)=>e).length / itens_page), actual: 0 }
      });
    } else {
      dispatch({
        type: CHAR_REDUCER_ENUM.FILL_CHARS,
        payload: charReducer.cached
      });

      console.log( "depois do filtro",charReducer.cached.length);

      dispatch({
        type: PAGINATION_REDUCER_ENUM.UPDATE,
        payload: {
          total: Math.round(charReducer.cached.flatMap((e)=>e).length / itens_page),
          actual: 0
        }
      });
    }
  });
}
