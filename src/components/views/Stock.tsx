
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableFooter from '@mui/material/TableFooter';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
import { StockStyles } from '../../styles/views/StockStyle';

import { Grid, IconButton } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';
// import ContentCopyIcon from '@mui/icons-material/ContentCopy';
// import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
// import FeedIcon from '@mui/icons-material/Feed';
import AddIcon from '@mui/icons-material/Add';
// import ClearIcon from '@mui/icons-material/Clear';
import { useEffect, useState } from 'react';
import { fetchConToken } from '../../helpers/fetch';
// import { useNavigate } from 'react-router-dom';
// import { TablePaginationAction } from '../ui/tables/TablePagination';
// import TablePagination from '@mui/material/TablePagination';
import MUIDataTable, {MUIDataTableColumn,
    MUIDataTableOptions} from 'mui-datatables';
import { LoadScreen } from '../ui/extra/LoadScreen';


// interface dataItems {
//     id_item: number,
//     modelo: string,
//     descripcion: string,
//     total: number,
//     medida: string,
//     cantidad_almacen1: number, 
//     ubicacion_almacen1: string,
//     cantidad_almacen2: number,
//     ubicacion_almacen2: string,
//     mostrador: number,
//     comentarios: string,
//     activo: string,
//     log: string,
// } 

export const Stock = () => {

    const styles= StockStyles;
    const [items, setItems] = useState([])
//     const [from, setFrom] = useState(0);
//     const [to, setTo] = useState(15)
//     // const urlNavigate = useNavigate();

//     const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(10);

  // Avoid a layout jump when reaching the last page with empty rows.
//   const emptyRows =
//     page > 0 ? Math.max(0, (1 + page) * rowsPerPage - items.length) : 0;

    const getAccesories = async() => {
        // urlNavigate(`?from=${from}&to=${to}`);
        const resp = await fetchConToken( `almacen/items` );
        const data = await resp.data;
        setItems(data);
    }

    useEffect(() => {
        getAccesories();
    }, [])

//   const handleChangePage = (
//     event: React.MouseEvent<HTMLButtonElement> | null,
//     newPage: number,
//   ) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (
//     event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
//   ) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };
  const options: MUIDataTableOptions = {
    responsive: 'vertical',
    downloadOptions: {
        filterOptions: {
          useDisplayedColumnsOnly: true,
          useDisplayedRowsOnly: true
        }
      },
    //   onRowsDelete: (e: any) => {
    //     if(window.confirm("Desea borrar el elemento?") === true) {

    //     }else{
    //         return false
    //     }
        
        
    //   },
    //   jumpToPage: true,
      onRowClick: (e: any) => {
        alert(e);
      },
    //   customToolbar: () => {
    //     return (
    //       <IconButton
    //         onClick={() => {
    //           alert("hola");
    //         }}
    //       >
    //         <AddIcon />
    //       </IconButton>
    //     );
    //   },
      onTableChange: (action: any, state: any) => {
        console.log(action);
        console.dir(state);
      },
      textLabels: {
        body: {
          noMatch: "Lo siento, no se encontro información",
          toolTip: "Ordenar",
          columnHeaderTooltip: (column: any) => `Ordenar por ${column.label}`
        },
        pagination: {
          next: "Siguiente Página",
          previous: "Página anterior",
          rowsPerPage: "Filas por página:",
          jumpToPage: "Página",
          displayRows: "of"
        },
        toolbar: {
          search: "Buscar",
          downloadCsv: "Descargar CSV",
          print: "Imprimir",
          viewColumns: "Ver columnas",
          filterTable: "Filtro"
        },
        filter: {
          all: "Todo",
          title: "FILTROS",
          reset: "LIMPIAR"
        },
        viewColumns: {
          title: "Mostrar columnas",
          titleAria: "Mostrar/Ocultar columnas"
        },
        selectedRows: {
          text: "Fila(s) seleccionada(s)",
          delete: "Borrar",
          deleteAria: "Borrar filas seleccionadas"
        }
      }
  };

  const data = [
    ["Gabby George", "Business Analyst", "Minneapolis"],
    [
      "Aiden Lloyd",
      "Business Consultant for an International Company and CEO of Tony's Burger Palace",
      "Dallas"
    ],
    ["Jaden Collins", "Attorney", "Santa Ana"],
    ["Franky Rees", "Business Analyst", "St. Petersburg"],
    ["Aaren Rose", 'null', "Toledo"],
    ["Johnny Jones", "Business Analyst", "St. Petersburg"],
    ["Jimmy Johns", "Business Analyst", "Baltimore"],
    ["Jack Jackson", "Business Analyst", "El Paso"],
    ["Joe Jones", "Computer Programmer", "El Paso"],
    ["Jacky Jackson", "Business Consultant", "Baltimore"],
    ["Jo Jo", "Software Developer", "Washington DC"],
    ["Donna Marie", "Business Manager", "Annapolis"]
  ];

//   const columns: MUIDataTableColumn[] = [
//     { name: "modelo", label: 'Modelo', options: { filter: false, empty: true } },
//     { name: 'descripcion', label: 'Descripcion', options: { filter: false, empty: true } },
//     { name: 'total', label: 'Total', options: { filter: false, empty: true } },
//     { name: 'medida', label: 'Medida' },
//     { name: 'cantidad_almacen1', label: 'Cantidad A1', options: { filter: false, empty: true }},
//     { name: 'ubicacion_almacen1', label: 'Ubicacion A1'},
//     { name: 'cantidad_almacen2', label: 'Cantidad A2', options: { filter: false, empty: true }},
//     { name: 'ubicacion_almacen2', label: 'Ubicacion A2' },
//     { name: 'mostrador', label: 'Mostrador', options: { filter: false, empty: true }},
//     { name: 'comentarios', label: 'Comentarios', options: { filter: false, empty: true } },
//   ];  

    const columns = [
        { name: "Name", options: { filterOptions: { fullWidth: true } } },
        "Title",
        "Location"
    ];
    
    return (
        
        <>

        <Grid container sx={styles.mainGrid}>
            {/* <Grid container item alignItems="center" xs={12} sx={styles.dashStyles } >
                <Typography variant="h6">Almacen</Typography>
                                
                <Typography variant="body2">Inventario</Typography>
            </Grid> */}
            <Grid item xs={12} >

                {
                    data.length > 0 && (
                        <MUIDataTable
                            title={"Almacen"}
                            data={data}
                            columns={columns}
                            options={options}
                        />
                    )
                }
                
                

                





                {/* <Paper elevation={3} sx={styles.padTable}>
                    <Grid container item xs={12} >
                        <Grid xs={6} sx={styles.marTable}>  
                            <Typography variant="h6">Almacen</Typography> 
                            <Typography variant="body2">Inventario</Typography> 
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
                        <Table aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell align="center">id</TableCell>
                                <TableCell align="left">modelo</TableCell>
                                <TableCell align="left">descripcion</TableCell>
                                <TableCell align="center">total</TableCell>
                                <TableCell align="left">medida</TableCell>
                                <TableCell align="left">almacen 1</TableCell>
                                <TableCell align="left">almacen 2</TableCell>
                                <TableCell align="center">mostrador</TableCell>
                                <TableCell align="left">comentarios</TableCell>
                               
                                
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {(rowsPerPage > 0
                                ? items.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                : items
                            ).map((row: dataItems) => (
                                <TableRow
                                    key={row.id_item}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row" align="center">
                                        {row.id_item}
                                    </TableCell>
                                    <TableCell align="left">{row.modelo}</TableCell>
                                    <TableCell align="left">{row.descripcion}</TableCell>
                                    <TableCell align="center">{row.total}</TableCell>
                                    <TableCell align="left">{row.medida}</TableCell>
                                    <TableCell align="left">{row.cantidad_almacen1}-{row.ubicacion_almacen1}</TableCell>
                                    <TableCell align="left">{row.cantidad_almacen2}-{row.ubicacion_almacen2}</TableCell>
                                    <TableCell align="center">{row.mostrador}</TableCell>
                                    <TableCell align="left">{row.comentarios}</TableCell>
                                    
                                </TableRow>
                            ))}
                            {emptyRows > 0 && (
                                <TableRow style={{ height: 53 * emptyRows }}>
                                <TableCell colSpan={6} />
                                </TableRow>
                            )}
                            </TableBody>
                            <TableFooter>
                                <TableRow>
                                    <TablePagination
                                        rowsPerPageOptions={[10, 15, 20, { label: 'Todos', value: -1 }]}
                                        labelRowsPerPage={'Filas por página:'}
                                        colSpan={9}
                                        count={items.length}
                                        rowsPerPage={rowsPerPage}
                                        page={page}
                                        SelectProps={{
                                            inputProps: {
                                            'aria-label': 'rows per page',
                                            },
                                            native: true,
                                        }}
                                        onPageChange={handleChangePage}
                                        onRowsPerPageChange={handleChangeRowsPerPage}
                                        ActionsComponent={TablePaginationAction}
                                    />
                                </TableRow>
                            </TableFooter>
                        </Table>
                        </TableContainer>
                    </Grid>
                </Paper> */}
            </Grid>

        </Grid> 
        </>
    )
}
