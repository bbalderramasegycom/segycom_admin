import { Auth } from '../../../interfaces/reducersInterfaces/authInterface';
import { types } from '../types/types';

const initialState = {
    loginError: false,
    loading: false,
    checking: true
}

export const authReducer = ( state = initialState, action: Auth) => {
    switch (action.type){
        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName,
                error: false,
                logged: true,
                checking: false
            };
        case types.logout:
            return { 
                logged: false,
                error: false,
                checking: false,
            };
        case types.loginError: 
            return {
                ...state,
                error: true,
                logged: false,
                loading: false
            }
        case types.loading: 
            return {
                ...state,
                loading: true,
            }
        case types.authCheckingFinish:
            return {
                ...state,
                checking: false
            }
        default:
            return state;
    } 
}