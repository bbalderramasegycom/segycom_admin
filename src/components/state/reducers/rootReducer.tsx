import { combineReducers } from 'redux';
import { authReducer } from './authReducer';

const rootReducer = combineReducers({

    auth: authReducer,
    // TODO: reducers 
});

export default rootReducer;

export type State = ReturnType<typeof rootReducer>