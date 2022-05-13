import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import instance from "../../app/todoApi";

const initialState = {
    todos: []
}

export const getToDo = createAsyncThunk("todo/getToDo", async () => {
    return await instance.get("/task");
})

export const addToDo = createAsyncThunk("todo/addToDo", async (todo) => {
    return await instance.post("/task", todo);
})

export const toDoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        toggleComplete: (state, action) => {
            const index = state[0].findIndex((todo) => todo.id === action.payload.id);
            state[0][index].completed = action.payload.completed;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getToDo.fulfilled, (state, { payload }) => {
            state.todos = payload.data;
        })
        builder.addCase(addToDo.fulfilled, (state, { payload }) => {
            console.log(payload);
            state.todos.push(payload.data);
        })
    }
});

export default toDoSlice.reducer;