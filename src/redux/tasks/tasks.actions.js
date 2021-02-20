import TasksTypes from './tasks.types';

export const addTask = (task) => {
    return {
        type: TasksTypes.ADD_TASK,
        payload: task
    }
}

export const deleteTask = (id) => {
    return {
        type: TasksTypes.DELETE_TASK,
        payload: id
    }
}
