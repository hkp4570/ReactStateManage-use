import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
    reducer: counterReducer,
});

export type RootStore = ReturnType<typeof store.getState>;
export type APPDispatch = typeof store.dispatch;
