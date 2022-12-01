import { usersAPI } from "../api/api";

const initialState = {
	id: null,
	email: null,
	login: null,
	isFetching: false,
	isAuthorized: false,
	captcha: null
};
const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_USER_DATA': return { ...state, ...action.data, isAuthorized: true };
		case 'TOGGLE_IS_FETCHING': return { ...state, isFetching: action.isFetching };
		case 'RESET_USER_DATA': return { ...initialState };
		case 'GET_CAPTCHA_URL_SUCCESS': return { ...state, captcha: action.url };
		default: return state;
	}
};

export default authReducer;
export const setAuthUserData = data => ({ type: 'SET_USER_DATA', data });
export const resetAuthUserData = () => ({ type: 'RESET_USER_DATA' });
export const toggleIsFetching = isFetching => ({ type: 'TOGGLE_IS_FETCHING', isFetching });
export const getCaptchaUrlSeccess = (url) => ({ type: 'GET_CAPTCHA_URL_SUCCESS', url });

export const getAuthorization = () => async dispatch => {
	let response = await usersAPI.getAuthorization();
	if (response.resultCode === 0) dispatch(setAuthUserData(response.data));


};
export const signIn = (obj, setStatus) => async dispatch => {
	dispatch(toggleIsFetching(true));
	let response = await usersAPI.signIn(obj);
	if (response.data.resultCode === 0) dispatch(getAuthorization())
	else {
		if (response.data.resultCode === 10) {
			dispatch(getCaptchaUrl());
		}
		setStatus(response.data.messages);
		dispatch(toggleIsFetching(false));

	}
};
export const logout = () => async dispatch => {

	dispatch(toggleIsFetching(true));
	let response = await usersAPI.logout();
	if (response.data.resultCode === 0) dispatch(resetAuthUserData());
	dispatch(toggleIsFetching(false));
};

export const getCaptchaUrl = () => async dispatch => {
	const response = await usersAPI.getCaptchaUrl();
	const captcha = response.data.url;
	dispatch(getCaptchaUrlSeccess(captcha));
};