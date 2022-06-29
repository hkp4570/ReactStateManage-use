import React, {BaseSyntheticEvent} from 'react';
import {useRecoilState} from "recoil";
import {todoListFilterState} from "@/recoil/todolist";

const TodoListFilter = () => {
    const [filter, setFilter] = useRecoilState(todoListFilterState);
    const updateFilter = (event:BaseSyntheticEvent) => {
        setFilter(event.target.value);
    }
    return (
        <div>
            <select value={filter} onChange={updateFilter}>
                <option value="show all">all</option>
                <option value="show complete">complete</option>
                <option value="show unComplete">unComplete</option>
            </select>
        </div>
    );
};

export default TodoListFilter;
