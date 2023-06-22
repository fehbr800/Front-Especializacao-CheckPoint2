import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import listReducer from "./reducers/list-reducers";

const combine = combineReducers({resposta: listReducer});

export type RootState = {
    resposta: {
        resposta: [];
    };
};

export const store = legacy_createStore(combine, applyMiddleware(thunk));

// export const store: Store<RootState> = createStore(combine);

