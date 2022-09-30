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
		case 'RESET_USER_DATA': return { ...initialState };
		default: return state;
	}
};

export default authReducer;
export const setAuthUserData = data => ({ type: 'SET_USER_DATA', data });
export const resetAuthUserData = () => ({ type: 'RESET_USER_DATA' });
export const toggleIsFetching = isFetching => ({ type: 'TOGGLE_IS_FETCHING', isFetching });

export const getAuthorization = () => dispatch => {
	return usersAPI.getAuthorization().then(response => {
		if (response.resultCode === 0) dispatch(setAuthUserData(response.data));

	});
};
export const signIn = (obj, setStatus) => dispatch => {
	dispatch(toggleIsFetching(true));
	usersAPI.signIn(obj).then(response => {
		if (response.data.resultCode === 0) dispatch(getAuthorization())
		else setStatus(response.data.messages)
		dispatch(toggleIsFetching(false));
	});
};
export const logout = () => dispatch => {

	dispatch(toggleIsFetching(true));
	usersAPI.logout().then(response => {
		if (response.data.resultCode === 0) dispatch(resetAuthUserData());
		dispatch(toggleIsFetching(false));
	});
};