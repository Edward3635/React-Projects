import { TypedUseSelectorHook, useDispatch } from 'react-redux';
import { AppDispatch, ReducersState } from '../store/store';
import { useSelector } from 'react-redux';


export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useTypedSelector: TypedUseSelectorHook<ReducersState> = useSelector;