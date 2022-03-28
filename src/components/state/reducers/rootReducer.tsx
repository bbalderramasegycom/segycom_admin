import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { uiReducer } from './uiReducer';
import { almacenReducer } from './almacenReducer';

const rootReducer = combineReducers({

    auth: authReducer,
    ui: uiReducer,
    almacen: almacenReducer,
    // TODO: reducers 
});

export default rootReducer;

export type State = ReturnType<typeof rootReducer>