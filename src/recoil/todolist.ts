import {atom, selector} from "recoil";

export type TodoListItemType = {
    id: number,
    text: string,
    isComplete: boolean
}
export const todoListState = atom<TodoListItemType[]>({
    key: 'todoListState',
    default: [],
})

export type FilterType = 'show all' | 'show complete' | 'show unComplete'
export const todoListFilterState = atom<FilterType>({
    key: 'todoListFilterState',
    default: 'show all'
})
export const filteredTodoListState = selector({
    key: 'filteredTodoListState',
    get: ({get}) => {
        const filter = get(todoListFilterState);
        const list = get(todoListState);

        switch (filter) {
            case "show complete":
                return list.filter(item => item.isComplete)
            case "show unComplete":
                return list.filter(item => !item.isComplete)
            default:
                return list;
        }
    }
})
export const todoListStateState = selector({
    key: 'todoListStateState',
    get: ({get}) => {
        const list = get(todoListState);
        const totalNum = list.length;
        const totalCompleteNum = list.filter(item => item.isComplete).length;
        const totalUnCompleteNum = list.filter(item => !item.isComplete).length;
        const percentCompleted = totalNum === 0 ? 0 : totalCompleteNum / totalNum * 100;
        return {
            totalNum,
            totalCompleteNum,
            totalUnCompleteNum,
            percentCompleted
        }
    }
})

