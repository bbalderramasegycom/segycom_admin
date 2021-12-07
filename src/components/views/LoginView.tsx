import { Button, Chip, Divider, Grid } from "@mui/material";
import { useDispatch } from "react-redux"
import { images } from "../../assets/images";
import { loginStyles } from "../../styles/views/loginStyles";
import { startLogin } from "../state/actions/authAction";


export const LoginView = () => {

    const styles = loginStyles;

    const { logoLogin } = images.logos;
    
    const dispatch = useDispatch();

    const handleLogin = () => {
        dispatch( startLogin() );
    }

    return (
        <>
            <Grid container spacing={0} justifyContent="center" alignItems="center" sx={styles.loginContainer}>
                <Grid container direction="column" justifyContent="center" alignItems="center" sx={styles.loginGrid}> 
                    <Grid container item xs={8} sx={styles.loginDivider} alignItems="center" >
                            <img src={logoLogin.img} alt={logoLogin.title} style={styles.imgLogo} />
                    </Grid>
                    <Grid item xs={3} >
                         <Button onClick={handleLogin} variant="contained" sx={styles.btnLogin}>Login </Button>
                    </Grid>
                </Grid>
                



            </Grid>
        </>
    )
}
