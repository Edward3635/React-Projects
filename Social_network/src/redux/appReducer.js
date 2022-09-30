import { getAuthorization } from "./authReducer";

const initialState = {
	initialized: false
};
const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'INITIALIZED__SUCCESS': return { ...state, initialized: true };
		default: return state;
	}
};

export default appReducer;
export const initializedSuccess = () => ({ type: 'INITIALIZED__SUCCESS' });


export const initializeApp = () => dispatch => {
	const promise = dispatch(getAuthorization())
	Promise.all([promise]).then(() => {
		dispatch(initializedSuccess())
	});
};
