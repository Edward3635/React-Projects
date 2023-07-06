import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import CashReducer from './CashReducer';
import CustomerReducer from './CustomerReducer';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

let reducers = combineReducers({
	cash: CashReducer,
	customers: CustomerReducer
});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
export default store;