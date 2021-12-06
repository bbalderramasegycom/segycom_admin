import { Button } from "@mui/material";
import { useDispatch } from "react-redux"
import { startLogin } from "../state/actions/authAction";


export const LoginView = () => {
    
    const dispatch = useDispatch();

    const handleLogin = () => {
        dispatch( startLogin() );
    }

    return (
        <div>
            <h1>Login</h1>
            <Button variant="contained" onClick={ handleLogin }>Login</Button>
        </div>
    )
}
