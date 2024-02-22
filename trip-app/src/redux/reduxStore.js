import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { thunk } from 'redux-thunk';
import mainReducer from "./mainReducer";
import { composeWithDevTools } from '@redux-devtools/extension';
import authReducer from './authReducer';

let reducers = combineReducers({
	main: mainReducer,
	auth: authReducer
});
let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;