import { Grid, Typography } from "@mui/material"
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { statusBoxStyle } from "../../../styles/ui/dashboard/statusBoxStyle";
import InfoIcon from '@mui/icons-material/Info';

interface Props {
    quantity: number,
    title: string,
    icon: JSX.Element,
    link?: string,
    color: string,
    
}


export const StatusBox = ({quantity, title, icon, link, color}: Props) => {
    
    const styles = statusBoxStyle; 

    return (
        <>
            <Grid container item xs={6} md={3} sx={styles.quantityBox}>
                
                <Grid container sx={{bgcolor: color, borderRadius: 1}}>
                    <Grid item xs={8} sx={styles.contentBox}>
                        <Typography  sx={styles.quantityNumber} variant="h4">{ quantity }</Typography>
                        <Typography variant="body2">{ title } </Typography>
                    </Grid>
                    <Grid container item justifyContent="center" alignItems="center" xs={4} sx={styles.imageBox}>
                        { icon }
                    </Grid>
                    <Grid container item alignItems="center" xs={12} sx={styles.linkBox} justifyContent="center" >
                        <Typography variant="caption">Más Información</Typography> 
                        <InfoIcon sx={styles.iconInfo} fontSize="small"/>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}
