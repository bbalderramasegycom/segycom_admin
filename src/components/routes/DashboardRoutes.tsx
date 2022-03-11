import { Route, Routes } from "react-router"
import { DashboardViwe } from '../views/DashboardViwe';
import { Navbar } from '../ui/header/Navbar';
<<<<<<< HEAD
import { MenuDrawer } from '../ui/header/MenuDrawer';
<<<<<<< HEAD
import { Box, Toolbar } from "@mui/material";
=======
>>>>>>> 09d9aa3 (Dachboard components created)
import { Stock } from "../views/Stock";
=======
import { Container, Toolbar } from "@mui/material";
>>>>>>> 4019a00 (Reorganized Dashboard)

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
