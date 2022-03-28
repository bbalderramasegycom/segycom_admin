import { types } from '../types/types';

const initialState = {
    
}

export const almacenReducer = ( state = initialState, action: any) => {
    switch (action.type){
        case types.almacenGetItems:
            return {
                
            };
        default:
            return state;
    } 
}