import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

export const toDoSlice = createSlice({
    name: "ToDo",
    initialState,
    reducers: {
        addToDo: (state, action) => {
            state.push(action.payload);
            return state;
        },
        toggleComplete: (state, action) => {
            const index = state[0].findIndex((todo) => todo.id === action.payload.id);
            state[0][index].completed = action.payload.completed;
        }
    }
});

export const { addToDo, toggleComplete } = toDoSlice.actions;
export default toDoSlice.reducer;