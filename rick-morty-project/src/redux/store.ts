import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import listReducer from "./reducers/list-reducers";

const combine = combineReducers({info: listReducer});
export type RootState = {info: {resposta: []}}
export const store = legacy_createStore(combine, applyMiddleware(thunk));

