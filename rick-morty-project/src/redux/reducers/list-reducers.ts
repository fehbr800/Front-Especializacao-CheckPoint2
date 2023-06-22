import { Action } from "./types";

type InitialState = {
  resposta: {
    "id": number;
    "name": string;
    "status": string;
    "species": string;
    "type": string;
    "gender": string;
    "origin": {
      "name": string;
      "url": string;
    },
    "location": {
      "name": string;
      "url": string
    }, 
    "image": string;
    "episode": [string],
    "url": string;
    "created": string;
  }[];
  pages: number;
  error ?: string;
}

const initialState: InitialState = {
    resposta: [],
    pages: 1,
    // error: "",
};

export default function listReducer(state = initialState, action: Action){

    const copyState = { ...state };

    switch(action.type){
        case "GET_ALL":
            return {
                ...copyState,
                resposta: action.payload
              };
            
            default: return state;
    }
}

