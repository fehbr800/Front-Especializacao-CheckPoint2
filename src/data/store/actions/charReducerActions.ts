import { Dispatch } from "react";
import { IChars, ICharsFullResponse } from "../../dto/IChar";
import { CHAR_REDUCER_ENUM } from "../reducers/charReducer";
import { PAGINATION_REDUCER_ENUM } from "../reducers/paginationReducer";
import { IRootState } from "..";

async function fetchAllChars() {
  try {
    const firstResponse = await fetch(
      "https://rickandmortyapi.com/api/character/"
    );
    const firstResponseJson: ICharsFullResponse = await firstResponse.json();

    const maxChars = firstResponseJson.info.count;

    let queryParams = "";

    for (let x = 0; x < maxChars; x++) {
      if (x === 0) {
        queryParams += (x + 1).toString();
      } else {
        queryParams += `,${x + 1}`;
      }
    }
    const finalResponse = await fetch(
      `https://rickandmortyapi.com/api/character/${queryParams}`
    );
    const finalResponseJson: IChars[] = await finalResponse.json();
    return finalResponseJson;
  } catch (err) {
    return [];
  }
}

export async function paginateAllChars(
  chars: IChars[],
  perPage: number
): Promise<IChars[][]> {
  return new Promise((resolve, reject) => {
    try {
      const chunckedArray: IChars[][] = [];

      const chunkSize = perPage;
      for (let i = 0; i < chars.length; i += chunkSize) {
        const chunk = chars.slice(i, i + chunkSize);
        chunckedArray.push(chunk);
      }
      resolve(chunckedArray);
    } catch (err) {
      reject(err);
    }
  });
}

export function fillChars(dispatch: Dispatch<any>) {
  const itens_page = 15;

  dispatch(async () => {
    const allChars = await fetchAllChars();
    const paginated = await paginateAllChars(allChars, itens_page);
    dispatch({
      type: CHAR_REDUCER_ENUM.FILL_CHARS_AND_CACHED,
      payload: paginated
    });

    dispatch({
      type: PAGINATION_REDUCER_ENUM.UPDATE,
      payload: { total: Math.round(allChars.length / itens_page) }
    });
  });
}

export async function updateIcharsFavorites(originalChars: IChars[][], actualChar: IChars): Promise<IChars[][]> {
  return new Promise((resolve) => {
      const charsToModify = [...originalChars]
      console.log(charsToModify)

      for (let i = 0; i < charsToModify.length; i++) {
        for (let j = 0; j < charsToModify[i].length; j++) {
            if (charsToModify[i][j].id === actualChar.id){
              originalChars[i][j].isFavorite = !actualChar.isFavorite;
            }
        }
      }
      resolve(charsToModify)
  })
}

export function tooggleFavorite(dispatch:Dispatch<any>, payload:IChars){
  dispatch( async (_: any, getState: () => IRootState)=>{
    const root = getState()
    const modifiedChars = await updateIcharsFavorites(root.charReducer.cached, payload)
    dispatch ({type:CHAR_REDUCER_ENUM.UPDATE_FAVORITE, payload: modifiedChars })
  })
}

export function clearAllFavorites(dispatch: Dispatch<any>) {
  dispatch((_: any, getState: () => IRootState) => {
    const root = getState();
    const clearedFavorites = root.charReducer.cached.map((item) => [...item.map((char) => {
      return { ...char, isFavorite: false }
    })])

    dispatch({type: CHAR_REDUCER_ENUM.UPDATE_FAVORITE, payload: clearedFavorites })
  })
}
