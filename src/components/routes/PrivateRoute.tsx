
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { AuthState } from '../../interfaces/reducersInterfaces/authInterface';

export const PrivateRoute = ({ children }: { children: JSX.Element }) => {

    const { uid } = useSelector((state: AuthState) => state.auth)

    return uid
        ? children
        : <Navigate to="/login" />
}