import { types } from '../types/types';


export const menuDrawerOpen = () => {
    return {
        type: types.menuDrawerOpen,
    }
}

export const menuDrawerClosed = () => {
    return {
        type: types.menuDrawerClosed,
    }
}
