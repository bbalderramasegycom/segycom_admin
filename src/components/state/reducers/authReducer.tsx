import { Auth } from '../../../interfaces/reducersInterfaces/authInterface';
import { types } from '../types/types';

const initialState = {
    loginError: false
}

export const authReducer = ( state = initialState, action: Auth) => {
    switch (action.type){
        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName,
                error: false,
                logged: true
            };
        case types.logout:
            return { 
                logged: false,
                error: false,
            };
        case types.loginError: 
            return {
                error: true,
                logged: false
            }
        default:
            return state;
    } 
}