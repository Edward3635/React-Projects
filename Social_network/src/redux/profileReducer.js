import { usersAPI } from "../api/api";

const initialState = {
	postData: [
		{ id: 2, msg: 'Hello there!', likesCount: 10 },
		{ id: 1, msg: 'This is my first post!', likesCount: 32 }
	],
	newPostText: '',
	profile: null,
	isFetching: false,
	status: ''
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_POST':
			const newPost = {
				id: state.postData[0].id + 1,
				msg: state.newPostText,
				likesCount: 1
			};
			return { ...state, postData: [newPost, ...state.postData], newPostText: '' };

		case 'UPDATE_NEW_POST_TEXT': return { ...state, newPostText: action.newText };
		case 'SET_USER_PROFILE': return { ...state, profile: action.profile }
		case 'TOGGLE_IS_FETCHING': return { ...state, isFetching: action.isFetching };
		case 'SET_USER_STATUS': return { ...state, status: action.status };

		default: return state;

	}
};

export default profileReducer;

export const addPost = () => ({ type: 'ADD_POST' });
export const updateNewPostText = text => ({ type: 'UPDATE_NEW_POST_TEXT', newText: text });
export const setUserProfile = profile => ({ type: 'SET_USER_PROFILE', profile });
export const toggleIsFetching = isFetching => ({ type: 'TOGGLE_IS_FETCHING', isFetching });
export const setUserStatus = status => ({ type: 'SET_USER_STATUS', status });

export const getUserProfile = (userId) => {
	return dispatch => {
		dispatch(toggleIsFetching(true));
		usersAPI.getUserProfile(userId).then(data => {
			dispatch(setUserProfile(data));
			dispatch(toggleIsFetching(false));
		});
	};
};
export const getUserStatus = userId => dispatch => {
	usersAPI.getUserStatus(userId).then(response => {
		dispatch(setUserStatus(response.data));
	});
};
export const updateUserStatus = status => dispatch => {
	usersAPI.updateUserStatus(status).then(response => {
		if (response.data.resultCode === 0) {
			dispatch(setUserStatus(status));
		}
	});
};