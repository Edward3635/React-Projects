import { usersAPI } from "../api/api";

const initialState = {
	id: null,
	email: null,
	login: null,
	isFetching: false,
	isAuthorized: false
};
const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_USER_DATA': return { ...state, ...action.data, isAuthorized: true };
		case 'TOGGLE_IS_FETCHING': return { ...state, isFetching: action.isFetching };
		default: return state;
	}
};

export default authReducer;
export const setAuthUserData = data => ({ type: 'SET_USER_DATA', data });
export const toggleIsFetching = isFetching => ({ type: 'TOGGLE_IS_FETCHING', isFetching });
export const getAuthorization = () => {
	return dispatch => {
		usersAPI.getAuthorization().then(response => {
			response.resultCode === 0 ? dispatch(setAuthUserData(response.data)) :
				alert(response.messages.join());

		});
	}
};