import React from 'react';
import { Section, ToDoBox, HeadingWrapper, HeadingSection, Heading, Description, ToDos, Task, TaskText, TaskCheck, ToDoInput, ToDoSubmitBox, TaskButtons } from "./ToDo.elements";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import instance from "../../App/todoApi";
import { useDispatch } from "react-redux";
import { addToDo, toggleComplete } from "../../Features/ToDo/toDoSlice";
import { AiOutlineDelete } from 'react-icons/ai';

const ToDo = () => {
    const [todo, setToDo] = useState("");
    const dispatch = useDispatch();

    // Load all todos

    useEffect(() => {
        instance
            .get("/task")
            .then(response => {
                dispatch(addToDo(response.data))
            });
    });

    // Update todo

    const handleCompleteClick = (todo) => {
        const updateToDo = {
            Id: todo.id,
            Name: todo.name,
            IsCompleted: !todo.isCompleted
        };
        instance.put(`/task/${todo.id}`, updateToDo)
                .then(response => dispatch(addToDo(todo)))
        window. location. reload()
    }

    const handleDelete = (todo) => {
        console.log(todo);
        instance.delete(`/task/${todo.id}`)
            .then(response => console.log(response));
        window. location. reload()
    }

    const handleSubmit = (input) => {
        input.preventDefault();
        const requestToDo = { Name: todo };
        instance.post("/task", requestToDo)
                .then(response => dispatch(addToDo(todo)))
                .catch(error => console.log(error))
        window. location. reload()
    }

    const today = new Date();
    const date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
    const todos = useSelector((state) => state.todos[0]);

    console.log(todos);

    return (
        <>
            <Section>
                <ToDoBox>
                    <HeadingWrapper>
                        <HeadingSection>
                            <Heading>TO DO</Heading>
                            <Description>Things that need to be done at {date}</Description>
                        </HeadingSection>
                    </HeadingWrapper>
                    <ToDos>
                        {
                            todos ? (todos.map((todo) => (
                                <Task key={todo.id}>
                                    <TaskText style={todo.isCompleted ? {textDecoration: 'line-through'} : {textDecoration: 'none'}}>{todo.name}</TaskText>
                                    <TaskButtons>
                                        <TaskCheck type="checkbox" defaultChecked={todo.isCompleted} onClick={() => handleCompleteClick(todo)}/>
                                        <AiOutlineDelete style={{marginBottom: "3px", cursor: "pointer"}} onClick={() => handleDelete(todo)} />
                                    </TaskButtons>
                                </Task>
                            ))) : ""
                        }
                    </ToDos>
                    <ToDoSubmitBox onSubmit={handleSubmit}>
                            <ToDoInput type="text" value={todo} onChange={(e) => setToDo(e.target.value) } />
                    </ToDoSubmitBox>
                </ToDoBox>
            </Section>
        </>
    );
};

export default ToDo;