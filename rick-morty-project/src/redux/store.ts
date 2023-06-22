import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import listReducer from "./reducers/list-reducers";

const combine = combineReducers({ info: listReducer });

export const store = createStore(combine, applyMiddleware(thunk));
