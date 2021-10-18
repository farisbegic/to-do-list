import React from 'react';
import { Section, ToDoBox, HeadingWrapper, HeadingSection, Heading, Description, ToDos, Task, TaskText, TaskCheck, ToDoInput } from "./ToDo.elements";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import instance from "../../App/todoApi";
import { useDispatch } from "react-redux";
import {addToDo} from "../../Features/ToDo/toDoSlice";

const ToDo = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        instance
            .get("/task")
            .then(response => {
                dispatch(addToDo(response.data))
            });
    }, [dispatch]);

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
                                    <TaskCheck type="checkbox" defaultChecked={todo.isCompleted}/>
                                </Task>
                            ))) : ""
                        }
                    </ToDos>
                    <ToDoInput />
                </ToDoBox>
            </Section>
        </>
    );
};

export default ToDo;