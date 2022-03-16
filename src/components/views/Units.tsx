
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
    imei: number,
    nombre: string,
    cuenta: string,
    dispositivos: string,
    telefono: number,
    fecha: string,
    plataforma: string,
    registro: string,
    estado: boolean,
    baja: string, 

  ) {
    return {id, imei, nombre, cuenta, dispositivos, telefono, fecha, plataforma, registro, estado, baja};
  }
  
  const rows = [
    createData(1, 54586465, 'nombre', 'cuenta', 'dispositivo', 6145642536, '12/5/2021', 'plataforma', '25/2/2019', true, ''),
    createData(1, 54586465, 'nombre', 'cuenta', 'dispositivo', 6145642536, '12/5/2021', 'plataforma', '25/2/2019', true, ''),
    createData(1, 54586465, 'nombre', 'cuenta', 'dispositivo', 6145642536, '12/5/2021', 'plataforma', '25/2/2019', true, ''),
    createData(1, 54586465, 'nombre', 'cuenta', 'dispositivo', 6145642536, '12/5/2021', 'plataforma', '25/2/2019', true, ''),
    createData(1, 54586465, 'nombre', 'cuenta', 'dispositivo', 6145642536, '12/5/2021', 'plataforma', '25/2/2019', true, ''),

  ];

export const Units = () => {

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
                            <Typography variant="h6">Tabla con datos de Gps</Typography>  
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
                                <TableCell align="right">IMEI</TableCell>
                                <TableCell align="right">Nombre</TableCell>
                                <TableCell align="right">Cuenta</TableCell>
                                <TableCell align="right">Dispositivo </TableCell>
                                <TableCell align="right">Telélefono</TableCell>
                                <TableCell align="right">Fecha Creado </TableCell>
                                <TableCell align="right">Plataforma </TableCell>
                                <TableCell align="right">Fecha Registro </TableCell>
                                <TableCell align="right">Estado </TableCell>
                                <TableCell align="right">Fecha Baja </TableCell>
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
                                <TableCell align="right">{row.imei}</TableCell>
                                <TableCell align="right">{row.nombre}</TableCell>
                                <TableCell align="right">{row.cuenta}</TableCell>
                                <TableCell align="right">{row.dispositivos}</TableCell>
                                <TableCell align="right">{row.telefono}</TableCell>
                                <TableCell align="right">{row.fecha}</TableCell>
                                <TableCell align="right">{row.plataforma}</TableCell>
                                <TableCell align="right">{row.registro}</TableCell>
                                <TableCell align="right">{row.estado}</TableCell>
                                <TableCell align="right">{row.baja}</TableCell>
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
