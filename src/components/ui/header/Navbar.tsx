import { AppBar, Avatar, IconButton, Toolbar, Tooltip, Typography } from '@mui/material'
import { Box } from '@mui/system'
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import { useDispatch } from 'react-redux';
// import { logout } from '../../state/actions/authAction';
import { useState } from 'react';
import { MenuItems } from './MenuItems';
import { menuDrawerOpen } from '../../state/actions/uiAction';
import { images } from "./../../../assets/images";
import { navbarStyles } from '../../../styles/ui/header/navbarStyles';

export const Navbar = () => {

    const dispatch = useDispatch();

    const [menuUser, setMenuUser] = useState<null | HTMLElement>(null);
    const { logoNavbar } = images.logos;
    const styles = navbarStyles;
    
    // const handleLogout = () => {
    //     dispatch( logout() );
    // }

    const handleMenuUser = (event: React.MouseEvent<HTMLElement>) => {
        setMenuUser(event.currentTarget);
    }

    const handleMenuUserClose = () => {
        setMenuUser(null);
    }

    const handleMenuDrawerOpen = () => {
        dispatch( menuDrawerOpen() );
    }

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar  color="primary" position="fixed"
                    sx={{
                    width: { xl: `calc(100% - 240px)` },
                    ml: { xl: `240px` },
                    }}
                >
                    <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2, display: { xl: 'none' } }}
                        onClick={ handleMenuDrawerOpen }
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <img src={logoNavbar.img} alt={logoNavbar.title} style={styles.logoNavbar}/>

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
