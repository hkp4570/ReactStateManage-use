import React from 'react';
import {useRecoilValue} from "recoil";
import {todoListState} from '@/recoil/todolist';
import TodoItem from "./components/TodoItem";
import TodoItemCreator from "@pages/todoList/components/TodoItemCreator";

const TodoList = () => {
    const todoList = useRecoilValue(todoListState);
    return (
        <div>
            <TodoItemCreator/>
            {
                todoList.map(todoItem => <TodoItem key={todoItem.id} item={todoItem}/>)
            }
        </div>

    );
};

export default TodoList;
