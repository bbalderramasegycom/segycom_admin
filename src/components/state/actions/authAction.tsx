import { Dispatch } from 'redux';
import { fetchSinToken } from '../../../helpers/fetch';
import { types } from '../types/types';

export const startLogin = ( email: string, password: string) => {

    return async(dispatch: Dispatch) => {

        const resp = await fetchSinToken( 'auth/login', { correo: email, password }, 'post'  );

        if( resp.token ){
            localStorage.setItem( 'token', resp.token );
            localStorage.setItem( 'token-init-time', new Date().getTime().toString() );

            dispatch( login( resp.user.uid, resp.user.nombre ));
        }else{
            dispatch( loginError() );
        }

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

const loginError = () => {
    return {
        type: types.loginError,
    }
}

export const startLogout = () => {
    return ( dispatch: Dispatch ) => {
        localStorage.clear();
        dispatch( logout() );
    }
}

const logout = () => {
    return {
        type: types.logout,
    }
}
