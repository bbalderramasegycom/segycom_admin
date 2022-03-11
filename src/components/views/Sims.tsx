
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
import { SimsStyles } from '../../styles/views/SimsStyles';

function createData(
    id: number,
    telefono: number,
    cuentaPadre: string,
    iccid: number,
    activacion: string,
    registro: string,
    estado: boolean,
    inactivo: string,
  ) {
    return {id, telefono, cuentaPadre, iccid, activacion, registro, estado, inactivo};
  }
  
  const rows = [
    createData(1, 6142569856, 'gps', 865256548325600, '2017/10/30', '2019/03/26', true, ''),
    createData(1, 6142569856, 'gps', 865256548325600, '2017/10/30', '2019/03/26', true, ''),
    createData(1, 6142569856, 'gps', 865256548325600, '2017/10/30', '2019/03/26', true, ''),
    createData(1, 6142569856, 'gps', 865256548325600, '2017/10/30', '2019/03/26', true, ''),
    createData(1, 6142569856, 'gps', 865256548325600, '2017/10/30', '2019/03/26', true, ''),
    createData(1, 6142569856, 'gps', 865256548325600, '2017/10/30', '2019/03/26', true, ''),

  ];

export const Sims = () => {

    const styles= SimsStyles;

    return (
        
        <>
        <Grid container sx={styles.mainGrid}>
            <Grid container item alignItems="center" xs={12} sx={styles.dashStyles } >
                <Typography variant="h6">Telefonía</Typography>
            </Grid>
            <Grid item xs={12} >
                <Paper elevation={3} sx={styles.padTable}>
                    <Grid container item xs={12} >
                        <Grid xs={6} sx={styles.marTable}>  
                            <Typography variant="h6">Tabla con datos de Sims</Typography>  
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
                                <TableCell align="right">Numero de Teléfono</TableCell>
                                <TableCell align="right">Cuent Padre</TableCell>
                                <TableCell align="right">ICCID</TableCell>
                                <TableCell align="right">Fecha de Activación </TableCell>
                                <TableCell align="right">Fecha de Registro </TableCell>
                                <TableCell align="right">Estado </TableCell>
                                <TableCell align="right">Fecha inactivo </TableCell>
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
                                <TableCell align="right">{row.telefono}</TableCell>
                                <TableCell align="right">{row.cuentaPadre}</TableCell>
                                <TableCell align="right">{row.iccid}</TableCell>
                                <TableCell align="right">{row.activacion}</TableCell>
                                <TableCell align="right">{row.registro}</TableCell>
                                <TableCell align="right">{row.estado}</TableCell>
                                <TableCell align="right">{row.inactivo}</TableCell>
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
