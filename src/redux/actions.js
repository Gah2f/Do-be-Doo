import { ADD_TODO, FILTER_TODO, MARK_ALL_COMPLETED, MARK_COMPLETED, MARK_INCOMPLETED, REMOVE_TODO, TOGGLE_TODO, UPDATE_SEARCH_TERM } from './actionTypes';


export const addTodo = (text) => ({
    type : ADD_TODO,
    payload : {text}
})

export const toggleTodo = (id) => ({
    type : TOGGLE_TODO,
    payload : {id}
})

export const removeTodo = (id) => ({
    type : REMOVE_TODO,
    payload : {id}
})

export const markCompleted = (id) => ({
    type : MARK_COMPLETED,
    payload : {id}
})

export const markInCompleted = (id) => ({
    type : MARK_INCOMPLETED,
    payload : {id}
})

export const filterTodo = (filter) => ({
    type : FILTER_TODO,
    payload : {filter}
})

export const markAllCompleted = ( ) => ({
    type : MARK_ALL_COMPLETED,  
})

export const updateSearchTerm = (searchTerm) => ({
    type : UPDATE_SEARCH_TERM,
    payload : {searchTerm}
})