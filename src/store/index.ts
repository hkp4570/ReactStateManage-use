import {configureStore} from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice';
import userReducer from '../features/user/userSlice';

export const store = configureStore({
    // reducer: counterReducer,
    reducer:{
        counter: counterReducer,
        user: userReducer,
    },
    // 如果需要使用内置之外的中间件
    // middleware: (getDefaultMiddleware) => {
    //     return getDefaultMiddleware().concat('另外的中间件');
    // }
});

export type RootStore = ReturnType<typeof store.getState>;
export type APPDispatch = typeof store.dispatch;
