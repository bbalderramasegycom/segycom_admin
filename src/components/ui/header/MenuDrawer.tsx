import { Box, Collapse, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { menuDrawerClosed } from '../../state/actions/uiAction';
import { menuDrawerStyles } from '../../../styles/ui/menu/menuDrawerStyles';
import { useState } from "react";
import MapIcon from '@mui/icons-material/Map';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PeopleIcon from '@mui/icons-material/People';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import PieChartIcon from '@mui/icons-material/PieChart';
import { ExpandLess, ExpandMore } from "@mui/icons-material";

interface Props {
    window?: () => Window;
}

interface Ui {
    ui: {
        menuState: boolean
    }
}

export const MenuDrawer = (props: Props) => {

    const [openGps, setOpenGps] = useState(false);

    const [openPhone, setOpenPhone] = useState(false);

    const boton1 = () => {
        setOpenGps(!openGps);
    };

      const boton2 = () => {
        setOpenPhone(!openPhone);
      };

    const styles = menuDrawerStyles;

    const dispatch = useDispatch()
    
    const { window } = props;

    const container = window !== undefined ? () => window().document.body : undefined;

    const { menuState } = useSelector((state: Ui) => state.ui)

    const handleMenuDrawerClosed = () => {
        dispatch( menuDrawerClosed() );
    }

    const drawer = (
        <>
            <Toolbar />
            <Divider />
            <Link to="/inicio" style={{ textDecoration: 'none' , color: 'inherit' }}>
                <List >
                    <ListItem button >
                        <ListItemIcon>
                            <PieChartIcon />
                        </ListItemIcon>
                        <ListItemText>
                            Inicio
                        </ListItemText>
                    </ListItem>
                </List>
            </Link>
                <List>
                        <ListItem button onClick={boton1}>
                            <ListItemIcon>
                                <MapIcon />
                            </ListItemIcon>
                            <ListItemText>
                                GPS
                            </ListItemText>
                            {openGps ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Link to="/unidades" style={{ textDecoration: 'none' , color: 'inherit' }}>
                        <Collapse in={openGps} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                <DirectionsCarIcon />
                                </ListItemIcon>
                                <ListItemText primary="Unidades " />
                            </ListItemButton>
                            </List>
                        </Collapse>
                        </Link>
                        <Link to="/cuentas" style={{ textDecoration: 'none' , color: 'inherit' }}>
                    <Collapse in={openGps} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                            <PeopleAltIcon />
                            </ListItemIcon>
                            <ListItemText primary="Cuentas " />
                        </ListItemButton>
                        </List>
                    </Collapse>
                    </Link>
                    <Link to="/subcuentas" style={{ textDecoration: 'none' , color: 'inherit' }}>
                    <Collapse in={openGps} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                            <PeopleIcon />
                            </ListItemIcon>
                            <ListItemText primary="Subcuentas " />
                        </ListItemButton>
                        </List>
                    </Collapse>
                    </Link>
                    <Link to="/dispositivos" style={{ textDecoration: 'none' , color: 'inherit' }}>
                    <Collapse in={openGps} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                            <PhoneIphoneIcon />
                            </ListItemIcon>
                            <ListItemText primary="Dispositivos " />
                        </ListItemButton>
                        </List>
                    </Collapse>
                    </Link>
                </List>
                <List>
                        <ListItem button onClick={boton2}>
                            <ListItemIcon>
                                <LocalPhoneIcon />
                            </ListItemIcon>
                            <ListItemText>
                                Telefonía
                            </ListItemText>
                            {openPhone ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Link to="/sims" style={{ textDecoration: 'none' , color: 'inherit' }}>
                        <Collapse in={openPhone} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                <ContactPhoneIcon />
                                </ListItemIcon>
                                <ListItemText primary="Sims " />
                            </ListItemButton>
                            </List>
                        </Collapse>
                        </Link>
                        <Link to="/cuentaspadre" style={{ textDecoration: 'none' , color: 'inherit' }}>
                    <Collapse in={openPhone} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                            <AccountTreeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Cuentas Padre " />
                        </ListItemButton>
                        </List>
                    </Collapse>
                    </Link>
                </List>
                <List>
                <Link to="/almacen" style={{ textDecoration: 'none' , color: 'inherit' }}>
                        <ListItem button >
                            <ListItemIcon>
                                <Inventory2Icon />
                            </ListItemIcon>
                            <ListItemText>
                                Almacen
                            </ListItemText>
                        </ListItem>
                    </Link>
                </List>
            
            <Divider />
        </>
    );
    
    return (
        <Box
            component="nav"
            sx={ styles.menuBox }
        >
            <Drawer
                sx={ styles.menuDrawerTemporary }
                container={container}
                open={menuState}
                onClose={handleMenuDrawerClosed}
                variant="temporary"
                anchor="left"
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
            >
                {drawer}
            </Drawer>

            <Drawer
                variant="permanent"
                sx={ styles.menuDrawerPermanent}
                open
            >
                {drawer}
            </Drawer>
            
        </Box>
    )
}
