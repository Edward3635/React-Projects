import { usersAPI } from "../api/api";
import { globalErrorRequest } from "./appReducer";

const initialState = {
	postData: [
		{ id: 2, msg: 'Hello there!', likesCount: 10 },
		{ id: 1, msg: 'This is my first post!', likesCount: 32 }
	],
	profile: null,
	isFetching: false,
	status: ''
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_POST': return {
			...state, postData: [
				{ id: state.postData[0].id + 1, msg: action.post, likesCount: 1 },
				...state.postData]
		};

		case 'REMOVE_POST': return { ...state, postData: state.postData.filter(el => action.id !== el.id) }
		case 'SET_USER_PROFILE': return { ...state, profile: action.profile }
		case 'TOGGLE_IS_FETCHING': return { ...state, isFetching: action.isFetching };
		case 'SET_USER_STATUS': return { ...state, status: action.status };
		case 'SAVE_AVATAR_SUCCESS': return { ...state, profile: { ...state.profile, photos: action.photos } };

		default: return state;

	}
};

export default profileReducer;

export const addPost = post => ({ type: 'ADD_POST', post });
export const removePost = id => ({ type: 'REMOVE_POST', id });
export const setUserProfile = profile => ({ type: 'SET_USER_PROFILE', profile });
export const toggleIsFetching = isFetching => ({ type: 'TOGGLE_IS_FETCHING', isFetching });
export const setUserStatus = status => ({ type: 'SET_USER_STATUS', status });
export const saveAvatarSuccess = photos => ({ type: 'SAVE_AVATAR_SUCCESS', photos });



export const getUserProfile = (userId) => async dispatch => {
	dispatch(toggleIsFetching(true));
	let data = await usersAPI.getUserProfile(userId);
	dispatch(setUserProfile(data));
	dispatch(toggleIsFetching(false));
};

export const getUserStatus = userId => async dispatch => {
	let response = await usersAPI.getUserStatus(userId);
	dispatch(setUserStatus(response.data));
};
export const updateUserStatus = status => async dispatch => {
	try {
		let response = await usersAPI.updateUserStatus(status);
		if (response.data.resultCode === 0) {
			dispatch(setUserStatus(status));
		}
	} catch (error) {
		globalErrorRequest(error);
	}

};
export const saveAvatar = file => async dispatch => {
	let response = await usersAPI.saveAvatar(file);

	if (response.data.resultCode === 0) {
		dispatch(saveAvatarSuccess(response.data.data.photos))
	}
};

export const saveProfile = (profileData, setStatus) => async dispatch => {
	let response = await usersAPI.saveProfile(profileData);
	if (response.data.resultCode === 0) dispatch(getUserProfile(profileData.userId));
	else {
		setStatus(response.data.messages[0]);
		return Promise.reject(response.data.messages[0]);
	}
};

