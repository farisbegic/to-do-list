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

export const removeToDo = createAsyncThunk("todo/removeToDo", async (todo) => {
    return await instance.delete(`/task/${todo.id}`)
})

export const updateToDo = createAsyncThunk("todo/updateToDo", async (todo) => {
    return await instance.put(`/task/${todo.id}`, todo)
})

export const toDoSlice = createSlice({
    name: "todo",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getToDo.fulfilled, (state, { payload }) => {
            state.todos = payload.data;
        })
        builder.addCase(addToDo.fulfilled, (state, { payload }) => {
            state.todos.push(payload.data);
        })
        builder.addCase(updateToDo.fulfilled, (state, { payload }) => {
            const index = state.todos.findIndex(todo => todo.id === payload.data.id);
            state.todos[index] = payload.data;
        })
        builder.addCase(removeToDo.fulfilled, (state, { payload }) => {
            const index = state.todos.findIndex(todo => todo.id === payload.data.id);
            state.todos.splice(index, 1);
        })
    }
});

export default toDoSlice.reducer;