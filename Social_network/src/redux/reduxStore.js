import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import profileReducer from './profileReducer';
import messagesReducer from './messagesReducer';
import sideBarReducer from './sideBarReducer';
import usersReducer from './usersReducer';
import authReducer from "./authReducer";
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
	profilePage: profileReducer,
	messagesPage: messagesReducer,
	sideBarFriends: sideBarReducer,
	friendsPage: usersReducer,
	authorization: authReducer
});
let store = createStore(reducers, applyMiddleware(thunkMiddleware));
export default store;