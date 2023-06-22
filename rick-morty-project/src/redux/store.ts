import { createStore, applyMiddleware, combineReducers, Store } from "redux";
import thunk from "redux-thunk";
import listReducer from "./reducers/list-reducers";

const combine = combineReducers({ info: listReducer });

export type RootState = {
    info: {
      resposta:[];
    };
  };
  

  export const store: Store<RootState> = createStore(combine, applyMiddleware(thunk));

// export const store = createStore(combine, applyMiddleware(thunk));
