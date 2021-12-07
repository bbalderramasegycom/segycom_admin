import { BrowserRouter, Routes, Route } from "react-router-dom"
import { LoginView } from "../views/LoginView"
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"
import { CssBaseline } from '@mui/material';
import { DashboardRoutes } from './DashboardRoutes';

export const AppRoutes = () => {

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
