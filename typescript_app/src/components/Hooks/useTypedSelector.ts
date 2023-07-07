import { TypedUseSelectorHook, useSelector } from "react-redux";
import { ReducersState } from "../../store/reducers";

export const useTypedSelector: TypedUseSelectorHook<ReducersState> = useSelector;