import { Dispatch } from 'react';
import {api} from '../../services/api.js';

export const fetchTodos= () => {
    return async (dispatch: Dispatch<any>) => {
        const response = await api.get('/character');
        console.log(response)
        dispatch({type:"GET_ALL", payload:response.data.results});
    } 
};