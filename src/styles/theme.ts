import { createTheme } from "@mui/material";

// Global styles configurations
export const themeConfig = createTheme ({
    // typography: {
    //     fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
    //     h1: {
    //         fontSize: '5rem',
    //     },
    //     h2: {
    //         fontWeight: 600,
    //     },
    //     h4: {
    //         fontWeight: 600,
            
    //     }
    // },
    palette: {
        primary: {
            light: '#c34339',
            main: '#8c0712',
            dark: '#590000',
            contrastText: '#ffffff',
        },
        secondary: {
            light: '#6b6b6b',
            main: '#404040',
            dark: '#1a1a1a',
            contrastText: '#ffffff',
        },
    },
});