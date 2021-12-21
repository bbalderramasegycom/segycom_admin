import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { uiReducer } from './uiReducer';

const rootReducer = combineReducers({

    auth: authReducer,
    ui: uiReducer,
    // TODO: reducers 
});

export default rootReducer;

export type State = ReturnType<typeof rootReducer>