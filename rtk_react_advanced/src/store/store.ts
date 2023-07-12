import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from './reducers/UserSlice';
import { postAPI } from "../services/PostService";

const reducers = combineReducers({
	userReducer,
	[postAPI.reducerPath]: postAPI.reducer
});

export const store =  configureStore({
		reducer: reducers,
		middleware: (getMiddleWare) => getMiddleWare().concat(postAPI.middleware)
	});


export type ReducersState = ReturnType<typeof reducers>
// export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = typeof store.dispatch
// export type AppDispatch = AppStore['dispatch'] analog