import TasksTypes from './tasks.types';


const intialState = {
    tasks: JSON.parse(localStorage.getItem('tasks')) ? JSON.parse(localStorage.getItem('tasks')) : []
}
const tasksReducer = (state = intialState, {type, payload}) => {
    switch (type) {
        case TasksTypes.ADD_TASK:
            // Persist Tasks to localStorage
            localStorage.setItem('tasks', JSON.stringify([...state.tasks,payload]));
            return {...state, tasks:[...state.tasks, { ...payload }]}
        case TasksTypes.DELETE_TASK:
            // Persist Deleted Task to localStorage
            localStorage.setItem('tasks', JSON.stringify([...state.tasks.filter(taks => taks.id !== payload)]));
            return {...state, tasks:state.tasks.filter(task => task.id !== payload)}
        default:
            return {...state}
    }
}

export default tasksReducer;