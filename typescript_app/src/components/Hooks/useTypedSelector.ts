import { TypedUseSelectorHook, useSelector } from "react-redux";
import { ReducersState } from "../../store/index";

export const useTypedSelector: TypedUseSelectorHook<ReducersState> = useSelector;