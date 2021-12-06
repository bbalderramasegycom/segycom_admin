import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { DashboardViwe } from "../views/DashboardViwe"
import { LoginView } from "../views/LoginView"
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"
import { ErrorView } from '../views/ErrorView';
import { CssBaseline } from '@mui/material';

export const AppRoutes = () => {

    const dispatch = useDispatch();

    // useEffect(() => {
    //     if(localStorage.getItem('user') !== undefined){
    //         // dispatch
    //     }
    // }, [])
    

    return (
        <BrowserRouter>
        <CssBaseline />
            <Routes>
                <Route path="/login" element={
                    <PublicRoute>
                        <LoginView />
                    </PublicRoute>
                } />

                <Route path="/inicio" element={
                    <PrivateRoute>
                        <DashboardViwe />
                    </PrivateRoute>
                } />

                <Route path="/*" element={
                    <PrivateRoute>
                        <ErrorView />
                    </PrivateRoute>
                } />

                

                
            </Routes>
        </BrowserRouter>
    )
}
