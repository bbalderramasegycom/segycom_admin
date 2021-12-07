import { useDispatch } from "react-redux"
import { logout } from "../state/actions/authAction";


export const DashboardViwe = () => {

    const dispatch = useDispatch();
    
    const handleLogout = () => {
        dispatch( logout() );
    }

    console.log("dashboard")

    return (
        <div>
            <h1>Dashboard</h1>
        </div>
    )
}
