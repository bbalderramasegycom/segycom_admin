import { Alert, Button, Divider, Grid} from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { images } from "../../assets/images";
import { loginStyles } from "../../styles/views/loginStyles";
import { useState } from "react";
import { Field, Form, Formik, FormikProps } from "formik";
import * as yup from 'yup';
import { FormTextField } from '../ui/FormTextField';
import { startLogin, logout } from '../state/actions/authAction';
import { AuthState } from '../../interfaces/reducersInterfaces/authInterface';
import LoadingButton from '@mui/lab/LoadingButton';

interface FormValues {
    user: string,
    password: string,
}

export const LoginView = () => {

    const styles = loginStyles;
    const { logoLogin } = images.logos;

    const { error, loading } = useSelector((state: AuthState) => state.auth);

    const dispatch = useDispatch();
    
    
    const initialValues = {
        user: '',
        password: '',
    }
        
    const validationSchema = yup.object({
        user: yup.string()
            .required('El nombre de usuario es requerido'),
        password: yup.string()
            .required('La contraseña es requerida'),
    })
        
    const handleLogin = (e: FormValues) => {
        dispatch( startLogin( e.user, e.password ) );
    }

    const handleChange = () => {
        
        dispatch( logout() );

    }

    return (
        <>
            <Grid container direction="column" justifyContent="center"  alignItems="center" sx={styles.loginContainer}>

                <Grid container justifyContent="center" sx={styles.loginGrid}> 
                    <Grid container item xs={9} justifyContent="center" alignItems="center" sx={styles.sizeLoginTop}>
                            
                        <img src={logoLogin.img} alt={logoLogin.title} style={styles.imgLogo} />
                        <Grid item xs={12} > 
                            <Divider/>
                        </Grid>
                        
                    </Grid>
                    
                    <Grid container item xs={9} justifyContent="center" alignItems="center" sx={styles.sizeLoginBottom} >
                            
                        <Formik
                            initialValues={ initialValues }
                            validationSchema={ validationSchema }
                            onSubmit= { handleLogin }
                        >
                            {(formikProps: FormikProps<FormValues>) => (
                                <Form>
                                    <Grid container spacing={1}>
                                    <Grid item xs={12} > 
                                        <Field
                                            name="user"
                                            label="Correo"
                                            size="small"
                                            component={ FormTextField }
                                            onFocus ={ handleChange }
                                        />
                                    </Grid>
                                    <Grid item xs={12} > 
                                        <Field
                                            name="password"
                                            label="Contraseña"
                                            size="small"
                                            component={ FormTextField }
                                            onFocus ={ handleChange }
                                        />
                                    </Grid>
                                    <Grid item xs={12} sx={styles.btnLogin}> 
                                        {/* <Button type="submit" fullWidth variant="contained">Iniciar sesión</Button> */}
                                        <LoadingButton
                                            type="submit" fullWidth variant="contained"
                                            loading={ loading }
                                            loadingIndicator="Cargando..."
                                        >
                                            Iniciar sesión
                                        </LoadingButton>
                                    </Grid>
                                    </Grid>
                                </Form>
                            )}
                            
                        </Formik>
                    </Grid>
                    
                </Grid>
                
                { error &&  <Alert severity="error" sx={ styles.alertError }>Usuario o contraseña incorrectos</Alert> }                  

            </Grid>
        </>
    )
}
