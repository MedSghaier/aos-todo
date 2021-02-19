import { combineReducers } from 'redux';
import tasksReducer from './tasks/tasks.reducer';
const rootReducer = combineReducers({tasks: tasksReducer});

export default rootReducer;