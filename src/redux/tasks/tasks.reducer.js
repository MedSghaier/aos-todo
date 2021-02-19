import TasksTypes from './tasks.types';


const intialState = {
    tasks: []
}
const tasksReducer = (state = intialState, {type, payload}) => {
    switch (type) {
        case TasksTypes.ADD_TASK:
            return {...state, tasks:[...state.tasks, { ...payload }]}
        default:
            return {...state}
    }
}

export default tasksReducer;