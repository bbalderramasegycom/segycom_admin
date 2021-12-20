import { AppBar, Avatar, IconButton, Toolbar, Tooltip, Typography } from '@mui/material'
import { Box } from '@mui/system'
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import { useDispatch } from 'react-redux';
import { logout } from '../../state/actions/authAction';
import { useState } from 'react';
import { MenuItems } from './MenuItems';

export const Navbar = () => {

    const dispatch = useDispatch();

    const [menuUser, setMenuUser] = useState<null | HTMLElement>(null);
    
    const handleLogout = () => {
        dispatch( logout() );
    }

    const handleMenuUser = (event: React.MouseEvent<HTMLElement>) => {
        setMenuUser(event.currentTarget);
    }

    const handleMenuUserClose = () => {
        setMenuUser(null);
    }

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" color="primary">
                    <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        SEGYCOM Admin
                    </Typography>
                    <Tooltip title="Account settings">
                        <IconButton
                            size="large"
                            color="inherit"
                            aria-label="user"
                            onClick={handleMenuUser}
                            >
                            <Avatar sx={{ bgcolor: "#424242" }}>B</Avatar>
                        </IconButton>
                    </Tooltip>
                    <IconButton
                        size="large"
                        color="inherit"
                        aria-label="user"
                    >
                        <SettingsIcon />
                    </IconButton>
                    {/* <Typography variant="body1" component="div" >
                        Bryan Balderrama
                    </Typography> */}
                    {/* <Button color="inherit" onClick={ handleLogout }>Logout</Button> */}
                    </Toolbar>
                </AppBar>
            </Box>

            <MenuItems anchorEl={menuUser} open={Boolean(menuUser)} close={handleMenuUserClose}/>
        </>
    )
}
