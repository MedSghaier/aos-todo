import { combineReducers } from 'redux';
import authReducer from './auth/auth.reducer';
import tasksReducer from './tasks/tasks.reducer';

const rootReducer = combineReducers({tasks: tasksReducer, auth: authReducer});

export default rootReducer;