import React from 'react';
import {useRecoilValue} from "recoil";
import {filteredTodoListState} from '@/recoil/todolist';
import TodoItem from "./components/TodoItem";
import TodoListCreator from "@pages/todoList/components/TodoListCreator";
import TodoListFilter from "@pages/todoList/components/TodoListFilter";
import TodoListState from "@pages/todoList/components/TodoListState";

const TodoList = () => {
    const todoList = useRecoilValue(filteredTodoListState);
    return (
        <div>
            <TodoListState/>
            <TodoListFilter/>
            <TodoListCreator/>
            {
                todoList.map(todoItem => <TodoItem key={todoItem.id} item={todoItem}/>)
            }
        </div>

    );
};

export default TodoList;
