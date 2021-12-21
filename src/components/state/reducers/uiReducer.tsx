
import { types } from '../types/types';

interface Ui {
    type: string,
}

const initialState = {
    menuState: false
}

export const uiReducer = ( state = {initialState}, action: Ui) => {
    switch (action.type){
        case types.menuDrawerOpen:
            return {
                menuState: true
            };
        case types.menuDrawerClosed:
            return { 
                menuState: false
            };
        default:
            return state;
    } 
}