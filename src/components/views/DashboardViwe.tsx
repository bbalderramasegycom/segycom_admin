import { Grid, Typography } from "@mui/material";
import { DashboardStyles } from "../../styles/views/DatshboardStyles";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CallIcon from '@mui/icons-material/Call';
import Inventory2Icon from '@mui/icons-material/Inventory2'; 
import { LineChart } from "../ui/dashboard/LineChart";
import { StatusBox } from "../ui/dashboard/StatusBox";
import { PieChart } from "../ui/dashboard/PieChart";
import { Tables } from "../ui/tables/Tables";



export const DashboardViwe = () => {
    
    const styles= DashboardStyles;

    return (
        <>
            
            <Grid container sx={styles.mainBox}>
                
                <Grid container item alignItems="center" xs={12} sx={styles.dashStyles} >
                    <Typography variant="h6">Dashboard</Typography>
                    
                    <Typography variant="body2">SEGYCOM</Typography>
                </Grid>
                
                <StatusBox  
                    quantity={5} 
                    title='Atlas de GPS en este mes' 
                    icon={ <DirectionsCarIcon sx={styles.sizeIcons} color="disabled" /> } 
                    color='#00c0ef' 
                />

                <StatusBox 
                    quantity={14}    
                    title='Altas de Sim este mes' 
                    icon={ <CallIcon sx={styles.sizeIcons} color="disabled" /> } 
                    color='#00a65a' 
                />

                <StatusBox 
                    quantity={2}    
                    title='Cuentas Totales Activas' 
                    icon={ <PeopleAltIcon sx={styles.sizeIcons} color="disabled"/> } 
                    color='#f39c12' 
                />

                <StatusBox 
                    quantity={58}   
                    title='Productos en Almacén' 
                    icon={ <Inventory2Icon sx={styles.sizeIcons} color="disabled" /> } 
                    color='#dd4b39' 
                />
                
            
                <Grid xs={12} md={6} sx={styles.tableBox}>
                    <LineChart 
                        color='rgb(0, 192, 239)' 
                        bgcolor='rgba(0, 192, 239, 0.5)' 
                        title='GPS' 
                        dataDb={[10, 5, 6, 9, 15, 20, 14, 20, 25, 23, 10, 26]}
                    />
                </Grid>

                <Grid xs={12} md={6} sx={styles.tableBox}>
                    <LineChart 
                        color='rgb(0, 166, 90)' 
                        bgcolor='rgba(0, 166, 90, 0.5)' 
                        title='TELEFONÍA' 
                        dataDb={[10, 5, 6, 9, 15, 20, 1, 20, 30, 25, 26, 10]}
                    />
                </Grid>

                <Grid xs={12} md={3}  sx={styles.tableBox}>
                    <PieChart />
                </Grid>


                <Grid xs={12} md={9} sx={styles.tableBox}>
                    <Tables  />
                </Grid>


            </Grid>
        </>
    )
}
