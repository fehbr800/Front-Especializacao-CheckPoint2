import {api} from '../../services/api.js';

export const fetchTodos= () => {
    return async (dispatch: any) => {
        const response = await api.get('/character')
        dispatch({type:"GET_ALL",payload:response.data})
    } 
}