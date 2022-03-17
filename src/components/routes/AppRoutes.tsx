import { BrowserRouter, Routes, Route } from "react-router-dom"
import { LoginView } from "../views/LoginView"
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"
import { CssBaseline } from '@mui/material';
import { DashboardRoutes } from './DashboardRoutes';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { startChecking } from '../state/actions/authAction';
import { AuthState } from '../../interfaces/reducersInterfaces/authInterface';
import { LoadScreen } from '../ui/extra/LoadScreen';

export const AppRoutes = () => {

    const dispatch = useDispatch();
    const { checking } = useSelector((state: AuthState) => state.auth)

    useEffect(() => {
        dispatch( startChecking() );
    }, [dispatch]);

    if( checking ){
        return (<LoadScreen />);
    }

    return (
        <BrowserRouter>
        <CssBaseline />
            <Routes>
                <Route path="/login" element={
                    <PublicRoute>
                        <LoginView />
                    </PublicRoute>
                } />
                <Route path="/*" element={
                    <PrivateRoute>
                        <DashboardRoutes />
                    </PrivateRoute>
                } />   
            </Routes>
        </BrowserRouter>
    )
}
