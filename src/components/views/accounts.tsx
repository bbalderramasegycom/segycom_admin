
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button,  Grid, IconButton, TextField, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import FeedIcon from '@mui/icons-material/Feed';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import { UnitsStyles } from '../../styles/views/UnitsStyles';

function createData(
    id: number,
    nombre: string,
    unidades: number,
    subcuentas: number,
    ciudad: string,
    estado: string,
    pais: string,
    latitud: string,
    longitud: string,
    activo: string,
    fbaja: string,
    registro: string


  ) {
    return {id, nombre, unidades, subcuentas, ciudad, estado, pais, latitud, longitud, activo, fbaja, registro};
  }
  
  const rows = [
    createData(1, 'SEGYCOM', 3, 2, 'Chihuahua', 'Chihuahua', 'Mexico', '28.632996', '-106.069099', 'activo', '2019-03-27','2019-01-23 11:27:43'),
    createData(2, 'SEGYCOM', 3, 2, 'Chihuahua', 'Chihuahua', 'Mexico', '28.632996', '-106.069099', 'activo', '2019-03-27','2019-01-23 11:27:43'),
    createData(3, 'SEGYCOM', 3, 2, 'Chihuahua', 'Chihuahua', 'Mexico', '28.632996', '-106.069099', 'activo', '2019-03-27','2019-01-23 11:27:43'),
    createData(4, 'SEGYCOM', 3, 2, 'Chihuahua', 'Chihuahua', 'Mexico', '28.632996', '-106.069099', 'activo', '2019-03-27','2019-01-23 11:27:43'),


  ];

export const Accounts = () => {

    const styles= UnitsStyles;

    return (
        
        <>
        <Grid container sx={styles.mainGrid}>
            <Grid container item alignItems="center" xs={12} sx={styles.dashStyles } >
                <Typography variant="h6">Unidades</Typography>
                                
                <Typography variant="body2">SEGYCOM</Typography>
            </Grid>
            <Grid item xs={12} >
                <Paper elevation={3} sx={styles.padTable}>
                    <Grid container item xs={12} >
                        <Grid xs={6} sx={styles.marTable}>  
                            <Typography variant="h6">Tabla con datos de Cuenta</Typography>  
                        </Grid>
                        <Grid container item direction="row" justifyContent="flex-end" alignItems="center" sx={styles.marTable} xs={6}>
                            <TextField id="standard-basic" label="Buscar" variant="standard" />
                            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                                <SearchIcon />
                            </IconButton>
                    </Grid>

                    <Grid container xs={12} >
                        <Grid item xs={6} sx={styles.marTable}>
                            <Button variant="contained" size="small" startIcon={<ContentCopyIcon />}>Copiar</Button>
                            <Button variant="contained" size="small" startIcon={<FeedIcon />} sx={styles.margExcel}>Excel</Button>
                            <Button variant="contained" size="small" startIcon={<PictureAsPdfIcon />}>PDF</Button>
                        </Grid>

                        <Grid container item direction="row" justifyContent="flex-end" alignItems="center" xs={6} sx={styles.btnAddDelete}>                  
                            <IconButton aria-label="delete" size="large">
                                 <AddIcon />
                            </IconButton>
                            <IconButton aria-label="delete" size="large">
                                 <ClearIcon />
                            </IconButton>  
                        </Grid>
                    </Grid>
                    </Grid>

                    <Grid container item xs={12} sx={styles.tablestyles} justifyItems='center' >   
                        <TableContainer component={Paper}>
                        <Table  aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell>Id</TableCell>
                                <TableCell align="right">Nombre</TableCell>
                                <TableCell align="right">Unidades</TableCell>
                                <TableCell align="right">Subcuentas</TableCell>
                                <TableCell align="right">Ciudad </TableCell>
                                <TableCell align="right">Estado</TableCell>
                                <TableCell align="right">País </TableCell>
                                <TableCell align="right">Latitud </TableCell>
                                <TableCell align="right">Longitud </TableCell>
                                <TableCell align="right">Activo </TableCell>
                                <TableCell align="right">Fecha Baja </TableCell>
                                <TableCell align="right">Fecha Registro </TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell align="right">{row.nombre}</TableCell>
                                <TableCell align="right">{row.unidades}</TableCell>
                                <TableCell align="right">{row.subcuentas}</TableCell>
                                <TableCell align="right">{row.ciudad}</TableCell>
                                <TableCell align="right">{row.estado}</TableCell>
                                <TableCell align="right">{row.pais}</TableCell>
                                <TableCell align="right">{row.latitud}</TableCell>
                                <TableCell align="right">{row.longitud}</TableCell>
                                <TableCell align="right">{row.activo}</TableCell>
                                <TableCell align="right">{row.fbaja}</TableCell>
                                <TableCell align="right">{row.registro}</TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                        </TableContainer>
                    </Grid>
                </Paper>
            </Grid>
        </Grid> 
        </>
    )
}
