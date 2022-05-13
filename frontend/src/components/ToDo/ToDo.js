import React, {useEffect, useState} from 'react';
import {
    Description,
    Heading,
    HeadingSection,
    HeadingWrapper,
    Section,
    Task,
    TaskButtons,
    TaskCheck,
    TaskText,
    ToDoBox,
    ToDoInput,
    ToDos,
    ToDoSubmitBox
} from "./ToDo.elements";
import {useDispatch, useSelector} from "react-redux";
import {AiOutlineDelete} from 'react-icons/ai';
import {addToDo, getToDo, removeToDo, updateToDo} from "../../features/todo/toDoSlice";

const ToDo = () => {
    const [todo, setToDo] = useState("");

    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos.todos);

    const today = new Date();
    const date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();

    useEffect(() => {
        dispatch(getToDo());
    }, [dispatch]);

    const handleUpdate = (todo) => {
        const newToDo = {
            id: todo.id,
            isCompleted: !todo.isCompleted
        };
        dispatch(updateToDo(newToDo))
    }

    const handleDelete = (todo) => {
        console.log(todo);
        dispatch(removeToDo(todo));
    }

    const handleSubmit = (input) => {
        input.preventDefault();
        const newToDo = {
            Name: todo
        };
        dispatch(addToDo(newToDo));
        setToDo("")
    }

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
                                        <TaskCheck type="checkbox" defaultChecked={todo.isCompleted} onClick={() => handleUpdate(todo)}/>
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