import {createAction, createReducer, PayloadAction} from "@reduxjs/toolkit";

type TodoItem = { index: number, title: string }
const initialState: TodoItem[] = [
    {
        index: 1,
        title: 'todo1'
    },
    {
        index: 2,
        title: 'todo2'
    },
    {
        index: 3,
        title: 'todo3'
    },
]
const addItemAction = createAction<TodoItem>('ADD_ITEM');
// ? addItemAction({}); 文档可添加参数
const reducer = createReducer(initialState, (builder) => {
    builder.addCase(addItemAction, (state, action:PayloadAction<TodoItem>) => {
        state.push({index:4,title:'todo4'})
    })
})
