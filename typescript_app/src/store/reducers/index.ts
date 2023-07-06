import { combineReducers } from "redux";
import userReducer from "./UserReducer";

const reducers = combineReducers({
	user: userReducer
});
export default reducers;
export type ReducersState = ReturnType <typeof reducers>