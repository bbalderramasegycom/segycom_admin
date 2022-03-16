import { Route, Routes } from "react-router"
import { DashboardViwe } from '../views/DashboardViwe';
import { Navbar } from '../ui/header/Navbar';

import { MenuDrawer } from '../ui/header/MenuDrawer';
import { Box, Toolbar } from "@mui/material";
import { Stock } from "../views/Stock";
import { Container } from "@mui/material";


export const DashboardRoutes = () => {
    return (
        <>

            <Navbar />

            <MenuDrawer />
            
            <Toolbar />
            {/* <Box component="main" sx={{display: 'flex', flexGrow: 1, width: { xl: `calc(100% - 240px)` }, float: 'right'}}> */}
            <Container maxWidth={false} disableGutters sx={{display: 'flex', flexGrow: 1, width: { xl: `calc(100% - 240px)` }, float: 'right'}}>
                <Routes>
                    <Route path="/inicio" element={ <DashboardViwe /> } />
                    <Route path="/almacen" element={ <Stock /> } />
                    <Route path="/" element={ <DashboardViwe /> } />
                </Routes>

            </Container>
                
            {/* </Box> */}
            
        </>
    )
}
