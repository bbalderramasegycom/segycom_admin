import { Route, Routes } from "react-router"
import { DashboardViwe } from '../views/DashboardViwe';
import { Navbar } from '../ui/header/Navbar';
<<<<<<< HEAD
import { MenuDrawer } from '../ui/header/MenuDrawer';
import { Box, Toolbar } from "@mui/material";
=======
>>>>>>> 09d9aa3 (Dachboard components created)
import { Stock } from "../views/Stock";

export const DashboardRoutes = () => {
    return (
        <>

            <Navbar />

            <MenuDrawer />
            
            <Toolbar />
            <Box component="main" sx={{display: 'flex', flexGrow: 1, width: { xl: `calc(100% - 240px)` }, float: 'right'}}>
                
                <Routes>
                    <Route path="/inicio" element={ <DashboardViwe /> } />
                    <Route path="/Almacen" element={ <Stock /> } />
                    <Route path="/" element={ <DashboardViwe /> } />
                </Routes>
            </Box>
            
        </>
    )
}
