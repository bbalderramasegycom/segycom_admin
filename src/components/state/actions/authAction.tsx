import { Dispatch } from 'redux';
import { fetchSinToken } from '../../../helpers/fetch';
import { types } from '../types/types';
// import { startLoading, stopLoading } from './uiAction';
import { User } from '../../../interfaces/reducersInterfaces/authInterface';

export const startLogin = ( email: string, password: string) => {

    return async(dispatch: Dispatch) => {

        const resp = await fetchSinToken( 'auth/login', { correo: email, password }, 'post'  );

        if( resp.token ){
            localStorage.setItem( 'token', resp.token );
            localStorage.setItem( 'token-init-time', new Date().getTime().toString() );

            dispatch( login( {uid: resp.user.uid,  displayName: resp.user.nombre} ));
        }else{
            dispatch( loginError() );
        }


    }
}

// export const startChecking = () => {
//     return async(dispatch: Dispatch) => {

//         const resp =  await requestWithToken( 'auth/renew' );
        
//         if( resp !== undefined ){
//             localStorage.setItem( 'token', resp.token );
//             localStorage.setItem( 'token-init-time', (new Date().getTime()).toString() );

//             dispatch( login({
//                 uid: resp.uid,
//                 displayName: resp.nombre
//             }) );

//         }else{
//             dispatch( errorLogin() );
//             dispatch( checkingFinish() );
//         }
//     }
// }


const loginError = () => {
    return {
        type: types.loginError,
    }
}

// const checkingFinish = () => ({ type: types.authCheckingFinish });

const login = ( user: User ) => {
    return {
        type: types.login,
        payload: user

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
