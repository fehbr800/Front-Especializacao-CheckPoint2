import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { IRootState } from "..";
import { PAGINATION_REDUCER_ENUM } from "../reducers/paginationReducer";

type PaginationAction = "NEXT" | "BACK";

export function PaginationGoTo(
  dispatch: Dispatch<any>,
  action: PaginationAction
) {
  switch (action) {
    case "NEXT":
      dispatch((_: any, getState: () => IRootState) => {
        const root = getState();

        if (root.paginationReducer.actual < root.paginationReducer.total) {
          dispatch({
            type: PAGINATION_REDUCER_ENUM.UPDATE,
            payload: { actual: root.paginationReducer.actual + 1 }
          });
        }
      });
      break;
    case "BACK":
      dispatch((_: any, getState: () => IRootState) => {
        const root = getState();

        if (root.paginationReducer.actual > 0) {
          dispatch({
            type: PAGINATION_REDUCER_ENUM.UPDATE,
            payload: { actual: root.paginationReducer.actual - 1 }
          });
        }
      });
      break;
  }
}
