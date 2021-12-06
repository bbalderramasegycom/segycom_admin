// import { useContext } from 'react';

import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { AuthState } from '../../interfaces/reducersInterfaces/authInterface';

export const PublicRoute = ({ children }: { children: JSX.Element }) => {

    const { uid } = useSelector((state: AuthState) => state.auth)

    console.log(children)

    return uid
        ? <Navigate to="/inicio" />
        : children

}