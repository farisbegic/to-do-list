import { configureStore } from '@reduxjs/toolkit'
import toDoReducer from '../features/todo/toDoSlice'

export const store = configureStore({
    reducer: {
        todos: toDoReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})