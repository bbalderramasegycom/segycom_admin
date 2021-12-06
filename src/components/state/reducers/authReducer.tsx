import { Auth } from '../../../interfaces/reducersInterfaces/authInterface';
import { types } from '../types/types';

export const authReducer = ( state = {}, action: Auth) => {
    switch (action.type){
        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName
            };
        case types.logout:
            return { };
        default:
            return state;
    } 
}