import { configureStore } from '@reduxjs/toolkit'
import toDoReducer from '../Features/ToDo/toDoSlice'

export const store = configureStore({
    reducer: {
        todos: toDoReducer,
    },
})