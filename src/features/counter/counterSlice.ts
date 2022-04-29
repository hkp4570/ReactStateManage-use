import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {addOne} from '../user/userSlice';
import {APPDispatch} from "@/store";
// https://redux-toolkit.js.org/usage/usage-guide
type StateType = {
    value:number
}
const initialState:StateType = {
    value: 0,
}
export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        increment(state){
            state.value += 1;
        },
        decrement(state){
            state.value -= 1;
        },
        incrementByAmount(state,{payload}:PayloadAction<number>){
            state.value += payload;
        },
    },
    // 扩展reduces
    extraReducers: (builder) => {
        // @ts-ignore
        builder.addCase([addOne],(state,action) => {})
        builder.addCase(asyncIncrement.fulfilled,(state,action) => {
            state.value += action.payload;
        })
    }
})
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const asyncIncrement = createAsyncThunk('',async () => {
        await new Promise(resolve => {
            setTimeout(resolve, 1000)
        })
        return 1
    }
)

export default counterSlice.reducer;

/**
 * 类型 action reducer 可以是不同的文件 也可以写在同一文件中
 * reducer可以通过Switch来匹配type 也可以通过对象对应键匹配type
 * 使用createSlice则可统一
 */
