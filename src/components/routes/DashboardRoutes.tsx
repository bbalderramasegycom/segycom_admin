import { Route, Routes } from "react-router"
import { DashboardViwe } from '../views/DashboardViwe';
import { Navbar } from '../ui/header/Navbar';
import { Stock } from "../views/Stock";

export const DashboardRoutes = () => {
    return (
        <>

            <Navbar />

            <div>
                <Routes>
                    <Route path="/inicio" element={ <DashboardViwe /> } />
                    <Route path="/Almacen" element={ <Stock /> } />
                    <Route path="/" element={ <DashboardViwe /> } />
                </Routes>
            </div>
            
        </>
    )
}
