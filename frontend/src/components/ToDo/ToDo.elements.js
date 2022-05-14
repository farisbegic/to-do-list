import styled from "styled-components";

export const Section = styled.div`
    background-color: #A9A9A9;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const ToDoBox = styled.div`
    margin: 40px 0;
    padding: 20px;
    width: 460px;
    background: #F8F9FA;
    border-radius: 16px;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04);
`;

export const HeadingWrapper = styled.div`
    display: flex;
    &:before {
        content: '';
        padding: 5px;
        border-radius: 3px;
        margin-right: 15px;
        background: #F76568;
    }
`;

export const HeadingSection = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`;

export const Heading = styled.h1`
    font-family: "Notable";
    font-weight: normal;
    font-size: 24px;
    line-height: 31px;
    color: #313131;
    padding: 5px 0;
`;

export const Description = styled.h4`
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    color: #757575;
`;

export const ToDos = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    margin: 20px 0;
    padding: 20px 0;
    max-height: 400px;
    overflow: auto;
`;

export const Task = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 420px;
    background: #FFFFFF;
    border-radius: 16px;
    margin: 5px 0;
    padding: 10px 27px;
`;

export const TaskText = styled.p`
    font-family: Roboto;
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
    line-height: 160%;
    color: #000000;
`;

export const TaskCheck = styled.input``;

export const ToDoSubmitBox = styled.form`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const TaskButtons = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 40px;
`;

export const ToDoInput = styled.input.attrs(props => ({
    type: "text"
}))`
    width: 100%;
    border: 0;
    background: none;
    border-bottom: 1px solid rgba(0,0,0,0.4);
    outline: none;
    padding: 5px;
    font-family: "Roboto", sans-serif;
    color: rgba(0,0,0,0.7);
`;

export const ToDoSubmit = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F66568;
    border: 0;
    box-shadow: 1px 3px 3px 1px rgba(0,0,0,0.16);
    border-radius: 50%;
    height: 30px;
    width: 30px;
    cursor: pointer;
`;