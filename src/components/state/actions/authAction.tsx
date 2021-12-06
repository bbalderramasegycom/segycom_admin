import { Dispatch } from 'redux';
import { types } from '../types/types';

export const startLogin = () => {
    return (dispatch: Dispatch) => {

        setTimeout(() => {
            dispatch( login('1234', 'Bryan') );
        }, 1000);
    }
}

const login = (uid: string, displayName: string) => {
    return {
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
}

export const logout = () => {
    return {
        type: types.logout,
    }
}
