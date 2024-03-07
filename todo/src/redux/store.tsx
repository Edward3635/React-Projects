import appSlice from './appSlice'
import { combineReducers, configureStore, EnhancedStore } from '@reduxjs/toolkit'

const reducers = combineReducers({
  app: appSlice
})

const setupStore = ():EnhancedStore => {
  return configureStore({
    reducer: reducers
  })
}

export type ReducersState = ReturnType<typeof reducers>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

export default setupStore
