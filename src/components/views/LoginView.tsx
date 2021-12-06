import { Button, Grid } from "@mui/material";
import { useDispatch } from "react-redux"
import { loginStyles } from "../../styles/views/loginStyles";
import { startLogin } from "../state/actions/authAction";


export const LoginView = () => {

    const styles = loginStyles;
    
    const dispatch = useDispatch();

    const handleLogin = () => {
        dispatch( startLogin() );
    }

    return (
        <>
            <Grid container spacing={0} sx={styles.loginContainer} justifyContent="center" alignItems="center">
                <Grid container direction="column" justifyContent="center" alignItems="center" sx={styles.loginGrid}> 
                    <Grid item xs={3} sx={{ bgcolor:"blue"}}>
                            ejemplo1
                    </Grid>
                    <Grid item xs={3} sx={{ bgcolor:"red"}}>
                        ejemplo2 
                    </Grid>
                </Grid>



            </Grid>
        </>
    )
}
