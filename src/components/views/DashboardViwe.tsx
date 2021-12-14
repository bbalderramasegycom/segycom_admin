import { Grid, Typography } from "@mui/material";
import { useDispatch } from "react-redux"
import { DashboardStyles } from "../../styles/views/DatshboardStyles";
import { logout } from "../state/actions/authAction";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CallIcon from '@mui/icons-material/Call';
import Inventory2Icon from '@mui/icons-material/Inventory2';


export const DashboardViwe = () => {

    const dispatch = useDispatch();
    
    const styles= DashboardStyles;

    const handleLogout = () => {
        dispatch( logout() );
    }

    console.log("dashboard")

    return (
        <>
            
            <Grid container sx={styles.mainBox}>
                     <Grid container item alignItems="center" xs={12} sx={styles.dashStyles} >
                        <Typography variant="h6">Dashboard</Typography>
                        
                        <Typography variant="body2">SEGYCOM</Typography>
                     </Grid>
                    <Grid container xs={3} sx={[styles.quantityBox, styles.gpsBox]}>
                        <Grid xs={8} sx={styles.contentBox}>
                            <Typography variant="h4">0</Typography>
                            <Typography variant="body2">Altas de GPS en este mes </Typography>
                        </Grid>
                        <Grid xs={4} sx={styles.imageBox}>
                            <DirectionsCarIcon fontSize="large"/>
                        </Grid>
                        <Grid xs={12} sx={styles.linkBox} >
                            <Typography variant="caption">Mas Informacion</Typography> 
                            <ArrowCircleRightIcon fontSize="small"/>
                        </Grid>
                    </Grid>
                    <Grid  container xs={3} sx={[styles.quantityBox, styles.simsBox]}>
                    <Grid xs={8} sx={styles.contentBox}>
                            <Typography variant="h4">0</Typography>
                            <Typography variant="body2">Altas de Sim este mes  </Typography>
                        </Grid>
                        <Grid xs={4} sx={styles.imageBox}>
                            <CallIcon fontSize="large"/>
                        </Grid>
                        <Grid xs={12} sx={styles.linkBox} >
                            <Typography variant="caption">Mas Informacion</Typography> 
                            <ArrowCircleRightIcon fontSize="small"/>
                        </Grid>
                    </Grid>
                    <Grid  container xs={3} sx={[styles.quantityBox, styles.countBox]}>
                    <Grid xs={8} sx={styles.contentBox}>
                            <Typography variant="h4">2</Typography>
                            <Typography variant="body2">Cuentas Totales Activas  </Typography>
                        </Grid>
                        <Grid xs={4} sx={styles.imageBox}>
                            <PeopleAltIcon fontSize="large"/>
                        </Grid>
                        <Grid xs={12} sx={styles.linkBox} >
                            <Typography variant="caption">Mas Informacion</Typography> 
                            <ArrowCircleRightIcon fontSize="small"/>
                        </Grid>
                    </Grid>
                    <Grid  container xs={3} sx={[styles.quantityBox, styles.stockBox]}>
                    <Grid xs={8} sx={styles.contentBox}>
                            <Typography variant="h4">58</Typography>
                            <Typography variant="body2">Productos en AlmacénS </Typography>
                        </Grid>
                        <Grid xs={4} sx={styles.imageBox}>
                            <Inventory2Icon fontSize="large"/>
                        </Grid>
                        <Grid xs={12} sx={styles.linkBox} >
                            <Typography variant="caption">Mas Informacion</Typography> 
                            <ArrowCircleRightIcon fontSize="small"/>
                        </Grid>
                    </Grid>
                    
                    <Grid xs={6} sx={styles.tableBox}>
                        tabla GPS
                    </Grid>
                    <Grid xs={6} sx={styles.tableBox}>
                        tabla Telefonia
                    </Grid>
                    <Grid xs={6} sx={styles.tableBox}>
                        tabla Dispositivos Gps
                    </Grid>
                    <Grid xs={6} sx={styles.tableBox}>
                        tabla de Almacen 
                    </Grid>


            </Grid>
        </>
    )
}
