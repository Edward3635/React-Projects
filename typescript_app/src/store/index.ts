import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import userReducer from "./reducers/UserReducer";
import todoReducer from "./reducers/todoReducer";

export const reducers = combineReducers({
	user: userReducer,
	todo: todoReducer
});
export type ReducersState = ReturnType<typeof reducers>

const store = createStore(reducers, applyMiddleware(thunk));
export default store;