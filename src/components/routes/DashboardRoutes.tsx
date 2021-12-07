import { Route, Routes } from "react-router"
import { DashboardViwe } from '../views/DashboardViwe';
import { Navbar } from '../ui/header/Navbar';

export const DashboardRoutes = () => {
    return (
        <>

            <Navbar />

            <div>
                <Routes>
                    <Route path="/inicio" element={ <DashboardViwe /> } />
                    <Route path="/" element={ <DashboardViwe /> } />
                </Routes>
            </div>
            
        </>
    )
}
