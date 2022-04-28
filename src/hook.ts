import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import { RootStore, APPDispatch } from "./store";

export const useAppDispatch = () => useDispatch<APPDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootStore> = useSelector;