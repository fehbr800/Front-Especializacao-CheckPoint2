import { Dispatch } from 'redux';
import {api} from '../../services/api.js';
import { Action } from '../reducers/types.js';

export const fetchTodos= () => {
    return async (dispatch: Dispatch<Action>) => {
        const response = await api.get('/character');
        dispatch({type:"GET_ALL", payload:response.data.results});
    } 
};

