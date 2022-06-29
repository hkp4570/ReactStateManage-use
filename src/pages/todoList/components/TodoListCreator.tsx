import React, {BaseSyntheticEvent, useState} from 'react';
import {RecoilRoot, useSetRecoilState} from "recoil";
import {todoListState} from "@/recoil/todolist";

let id = 0;

function getId() {
    return id++;
}

const TodoListCreator = () => {
    const [inputValue, setInputValue] = useState('');
    const setTodoList = useSetRecoilState(todoListState);
    const getInputValue = (event: BaseSyntheticEvent) => {
        setInputValue(event.target.value)
    }
    const addItem = () => {
        setTodoList(oldTodoList => [...oldTodoList, {
            id: getId(),
            text: inputValue,
            isComplete: false
        }])
        setInputValue('');
    }
    return (
        <RecoilRoot>
            <input type="text" value={inputValue} onChange={e => getInputValue(e)}/>
            <button onClick={addItem}>add</button>
        </RecoilRoot>
    );
};

export default TodoListCreator;
