const initialState = {
	postData: [
		{ id: 2, msg: 'Hello there!', likesCount: 10 },
		{ id: 1, msg: 'This is my first post!', likesCount: 32 }
	],
	newPostText: '',
	profile: null,
	isFetching: false
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

		default: return state;

	}
};

export default profileReducer;

export const addPost = () => ({ type: 'ADD_POST' });
export const updateNewPostText = text => ({ type: 'UPDATE_NEW_POST_TEXT', newText: text });
export const setUserProfile = profile => ({ type: 'SET_USER_PROFILE', profile });
export const toggleIsFetching = isFetching => ({ type: 'TOGGLE_IS_FETCHING', isFetching })