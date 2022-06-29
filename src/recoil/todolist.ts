import {atom} from "recoil";

export type TodoListItemType = {
    id: number,
    text: string,
    isComplete: boolean
}
export const todoListState = atom<TodoListItemType[]>({
    key: 'todoListState',
    default: [],
})

