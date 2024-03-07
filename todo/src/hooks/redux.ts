import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux'
import { AppDispatch,ReducersState } from '../redux/store'

export const useAppDisptach = (): AppDispatch => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<ReducersState> = useSelector
