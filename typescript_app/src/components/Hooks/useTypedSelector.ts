import { TypedUseSelectorHook, useSelector } from "react-redux";
import { ReducersState } from "../../store/reducers";

const useTypedSelector: TypedUseSelectorHook<ReducersState> = useSelector;
export default useTypedSelector;