
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { StockStyles } from '../../styles/views/StockStyle';
import { Button,  Grid, IconButton, TextField, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import FeedIcon from '@mui/icons-material/Feed';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';

function createData(
    name: string,
    modelo: string,
    marca: string,
    categoria: string,
    descripcion: string,
    cantidad: number,
    ubicacion: string,
  ) {
    return {name, modelo, marca, categoria, descripcion, cantidad, ubicacion };
  }
  
  const rows = [
    createData('nombre', 'MODELO ', 'marca', 'categoria', 'descripcion', 4, 'A'),
    createData('nombre', 'MODELO ', 'marca', 'categoria', 'descripcion', 4, 'A'),
    createData('nombre', 'MODELO ', 'marca', 'categoria', 'descripcion', 4, 'A'),
    createData('nombre', 'MODELO ', 'marca', 'categoria', 'descripcion', 4, 'A'),
    createData('nombre', 'MODELO ', 'marca', 'categoria', 'descripcion', 4, 'A'),

  ];

export const Stock = () => {

    const styles= StockStyles;

    return (
        
        <>
        <Grid container sx={styles.mainGrid}>
            <Grid container item alignItems="center" xs={12} sx={styles.dashStyles } >
                <Typography variant="h6">Almacen</Typography>
                                
                <Typography variant="body2">Inventario</Typography>
            </Grid>
            <Grid item xs={12} >
                <Paper elevation={3} sx={styles.padTable}>
                    <Grid container item xs={12} >
                        <Grid xs={6} sx={styles.marTable}>  
                            <Typography variant="h6">Tabla con datos de Almacen</Typography>  
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
                                <TableCell>Nombre</TableCell>
                                <TableCell align="right">Modelo</TableCell>
                                <TableCell align="right">Marca</TableCell>
                                <TableCell align="right">Categoria</TableCell>
                                <TableCell align="right">Descripcion </TableCell>
                                <TableCell align="right">Cantidad </TableCell>
                                <TableCell align="right">Ubicacion </TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.modelo}</TableCell>
                                <TableCell align="right">{row.marca}</TableCell>
                                <TableCell align="right">{row.categoria}</TableCell>
                                <TableCell align="right">{row.descripcion}</TableCell>
                                <TableCell align="right">{row.cantidad}</TableCell>
                                <TableCell align="right">{row.ubicacion}</TableCell>
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
