import { Button, Chip, Divider, Grid, TextField } from "@mui/material";
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
                    <Grid container xs={6}  alignItems="center" sx={styles.loginBottom}>
                            
                        <img src={logoLogin.img} alt={logoLogin.title} style={styles.imgLogo} />
                            
                    </Grid>
                    
                    <Grid container xs={6} direction="column" justifyContent="center" alignItems="center" >
                            <Grid item xs={2} sx={styles.loginBottom}> 
                                    <Divider/>
                            </Grid>
                            <Grid item xs={3} sx={styles.loginBottom}> 
                                <TextField
                                    id="outlined-required"
                                    label="Usuario"
                                    size="small"
                                />
                            </Grid>
                            <Grid item xs={3} sx={styles.loginBottom}> 
                                <TextField  
                                    id="outlined-password-input"
                                    label="Contraseña"
                                    type="password"
                                    autoComplete="current-password"
                                    size="small"
                                 />
                            </Grid>
                            <Grid item xs={4} sx={styles.loginBottom}> 
                                <Button onClick={handleLogin} fullWidth variant="contained" sx={styles.btnLogin}>Iniciar sesión </Button>
                            </Grid>
                    </Grid>
                </Grid>


            </Grid>
        </>
    )
}
