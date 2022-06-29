import React, {BaseSyntheticEvent} from 'react';
import {RecoilRoot, useRecoilState} from "recoil";
import {TodoListItemType, todoListState} from "@/recoil/todolist";

const TodoItem = ({item}: { item: TodoListItemType }) => {
    const [todoList, setTodoList] = useRecoilState(todoListState);
    const getNewList = (key: 'text' | 'isComplete', value: unknown) => {
        return todoList.map(ele => {
            if (ele.id === item.id) {
                return {...ele, [key]: value}
            }
            return ele;
        })
    }
    const editTodoItem = (event: BaseSyntheticEvent) => {
        const newList = getNewList('text', event.target.value)
        setTodoList(newList);
    }
    const checkTodoItem = (event: BaseSyntheticEvent) => {
        const newList = getNewList('isComplete', event.target.checked)
        setTodoList(newList);
    }
    const deleteTodoItem = () => {
        const newList = todoList.filter(ele => ele.id !== item.id);
        setTodoList(newList);
    }
    return (
        <RecoilRoot>
            <div>
                <input type="text" value={item.text} onChange={editTodoItem}/>
                <input type="checkbox" checked={item.isComplete} onChange={checkTodoItem}/>
                <button onClick={deleteTodoItem}>X</button>
            </div>
        </RecoilRoot>
    );
};

export default TodoItem;
