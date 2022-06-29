import React from 'react';
import {useRecoilValue} from "recoil";
import {todoListStateState} from "@/recoil/todolist";

const TodoListState = () => {
    const {totalNum,totalCompleteNum,totalUnCompleteNum,percentCompleted} = useRecoilValue(todoListStateState);
    return (
        <div>
            <ul>
                <li>total items: {totalNum}</li>
                <li>items complete: {totalCompleteNum}</li>
                <li>items not complete: {totalUnCompleteNum}</li>
                <li>percent complete: {Math.round(percentCompleted)}%</li>
            </ul>
        </div>
    );
};

export default TodoListState;
