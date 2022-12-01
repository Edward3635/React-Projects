import { getAuthorization } from "./authReducer";

const initialState = {
	initialized: false,
	globalError: null
};
const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'INITIALIZED__SUCCESS': return { ...state, initialized: true };
		case 'GLOBAL_ERROR': return { ...state, globalError: action.rejectInfo };
		default: return state;
	}
};

export default appReducer;
export const initializedSuccess = () => ({ type: 'INITIALIZED__SUCCESS' });
export const globalErrorRequest = rejectInfo => ({ type: 'GLOBAL_ERROR', rejectInfo });


export const initializeApp = () => dispatch => {
	const promise = dispatch(getAuthorization())
	Promise.all([promise]).then(() => {
		dispatch(initializedSuccess())
	});
};
