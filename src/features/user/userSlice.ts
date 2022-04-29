import {createSlice} from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState:{
        value:0
    },
    reducers:{
        addOne:(state,action) => {
            state.value += 1;
        }
    }
})

export const {addOne} = userSlice.actions;
export default userSlice.reducer;
