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
        
            case TasksTypes.UPDATE_TASK:
            // Update specific task by id
            let updatedTasks = state.tasks.map(task=> {
                if(task.id!==payload.id) {
                    return task
                }
                return {
                    ...task,
                    ...payload
                }
            })
            // Persist Update Tasks to localStorage
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
            return {...state, tasks:updatedTasks}
        default:
            return {...state}
    }
}

export default tasksReducer;