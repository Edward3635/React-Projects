import { combineReducers } from "redux";
import userReducer from "./UserReducer";
import todoReducer from "./todoReducer";

const reducers = combineReducers({
	user: userReducer,
	todo: todoReducer
});
export default reducers;
export type ReducersState = ReturnType<typeof reducers>