import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const toDoSlice = createSlice({
    name: "ToDo",
    initialState: initialState,
    reducers: {
        addToDo: {
            reducer: (state, action) => {
                state.push(action.payload);
                return state;
            }
        },
    }
});

export const { addToDo } = toDoSlice.actions;
export default toDoSlice.reducer;