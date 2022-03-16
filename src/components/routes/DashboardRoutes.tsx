import { Route, Routes } from "react-router"
import { DashboardViwe } from '../views/DashboardViwe';
import { Navbar } from '../ui/header/Navbar';

import { Box, Toolbar } from "@mui/material";
import { Stock } from "../views/Stock";
import { MenuDrawer } from '../ui/header/MenuDrawer';
import { Container, Toolbar } from "@mui/material";
import { Units } from "../views/Units";
import { Sims } from "../views/Sims";
import { Accounts } from "../views/accounts";
import { Devices } from "../views/devices";
import { Storage } from "../views/storage";
import { Subaccounts } from "../views/subaccounts";
import { ParentAccounts } from "../views/parentAccounts";


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
                    <Route path="/unidades" element={ <Units /> } />
                    <Route path="/sims" element={ <Sims /> } />
                    <Route path="/cuentas" element={ <Accounts /> } />
                    <Route path="/subcuentas" element={ <Subaccounts /> } />
                    <Route path="/dispositivos" element={ <Devices /> } />
                    <Route path="/cuentaspadre" element={ <ParentAccounts /> } />
                    <Route path="/almacenamiento" element={ <Storage /> } />

                    <Route path="/" element={ <DashboardViwe /> } />
                </Routes>

            </Container>
                
            {/* </Box> */}
            
        </>
    )
}
