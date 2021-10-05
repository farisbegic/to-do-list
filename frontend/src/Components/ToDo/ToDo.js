import React from 'react';
import { Section, ToDoBox, HeadingWrapper, HeadingSection, Heading, Description, ToDos, Task, TaskText, TaskCheck, ToDoInput } from "./ToDo.elements";

const ToDo = () => {
    const today = new Date();
    const date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
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
                        <Task>
                            <TaskText>Go to the Gym</TaskText>
                            <TaskCheck type="checkbox"/>
                        </Task>
                    </ToDos>
                    <ToDoInput />
                </ToDoBox>
            </Section>
        </>
    );
};

export default ToDo;