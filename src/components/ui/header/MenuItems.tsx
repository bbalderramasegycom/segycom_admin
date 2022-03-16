import { Divider, ListItemIcon, Menu, MenuItem, Avatar  } from '@mui/material';
import Logout from '@mui/icons-material/Logout';
import { useDispatch } from 'react-redux';
import { startLogout } from '../../state/actions/authAction';
import { menuItemsStyles } from '../../../styles/ui/header/menuItemsStyles';


interface Props {
    anchorEl: HTMLElement | null,
    open: boolean,
    close: () => void,
}

export const MenuItems = ({anchorEl, open, close}: Props) => {

    const dispatch = useDispatch();

    const styles = menuItemsStyles;

    const handleLogout = () => {
        dispatch( startLogout() );
    }

    return (
        <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={close}
            onClick={close}
            PaperProps={{
            elevation: 0,
            sx: styles.menuItem,
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
            <MenuItem>
                <Avatar sx={{ bgcolor: "#424242" }}>B</Avatar> Cuenta
            </MenuItem>
            {/* <MenuItem>
             My account
            </MenuItem> */}
            <Divider />
            
            <MenuItem onClick={ handleLogout }>
                <ListItemIcon>
                    <Logout fontSize="small" />
                </ListItemIcon>
                Cerrar sesión
            </MenuItem>
        </Menu>
    )
}
