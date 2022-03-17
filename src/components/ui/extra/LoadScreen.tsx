import React from 'react';

import { loadsScreenStyles } from '../../../styles/extra/loadsScreenStyles';

// Styles Material ui
import { CircularProgress, Typography, Grid } from '@mui/material';

export const LoadScreen = () => {

    const styles = loadsScreenStyles;

    return (
        <Grid sx={ styles.container } >
            
            <Typography variant="h5" gutterBottom >Cargando</Typography>

            <CircularProgress />
            
        </Grid>
    )
}
