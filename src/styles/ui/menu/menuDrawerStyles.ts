
export const menuDrawerStyles = {
    menuBox: {
        width: { xl: 240 },
        flexShrink: { xl: 0 } 
        
    },
    menuDrawerTemporary: {
        display: { xs: 'block', xl: 'none' },
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
    },
    menuDrawerPermanent: {
        display: { xs: 'none', xl: 'block' },
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
    },

}