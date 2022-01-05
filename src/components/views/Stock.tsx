
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { StockStyles } from '../../styles/views/StockStyle';
import { Grid } from '@mui/material';

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
        </>
    )
}
