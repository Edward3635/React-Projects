import { combineReducers, legacy_createStore as createStore } from "redux";
import profileReducer from './profileReducer';
import messagesReducer from './messagesReducer';
import sideBarReducer from './sideBarReducer';

let reducers = combineReducers({
	profilePage: profileReducer,
	messagesPage: messagesReducer,
	sideBarFriends: sideBarReducer
});
let store = createStore(reducers);
export default store;