import { Box, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { menuDrawerClosed } from '../../state/actions/uiAction';
import { menuDrawerStyles } from '../../../styles/ui/menu/menuDrawerStyles';

interface Props {
    window?: () => Window;
}

interface Ui {
    ui: {
        menuState: boolean
    }
}

export const MenuDrawer = (props: Props) => {

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
            <Link to="/inicio">
                <List>
                    <ListItem button >
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText>
                            Inicio
                        </ListItemText>
                    </ListItem>
                </List>
            </Link>
            <Link to="/">
                <List>
                    <ListItem button >
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText>
                            Almacen
                        </ListItemText>
                    </ListItem>
                </List>
            </Link>
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
