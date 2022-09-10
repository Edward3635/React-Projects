const initialState = {
	postData: [
		{ id: 2, msg: 'Hello there!', likesCount: 10 },
		{ id: 1, msg: 'This is my first post!', likesCount: 32 }
	],
	newPostText: ''
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD-POST':
			const newPost = {
				id: state.postData[0].id + 1,
				msg: state.newPostText,
				likesCount: 1
			};
			return {
				...state,
				postData: [newPost, ...state.postData],
				newPostText: ''
			};

		case 'UPDATE-NEW-POST-TEXT': return {
			...state,
			newPostText: action.newText
		};

		default: return state;

	}
};

export default profileReducer;

export const addPostActionCreator = () => {
	return {
		type: 'ADD-POST'
	};
};

export const updateNewPostTextActionCreator = (text) => {
	return {
		type: 'UPDATE-NEW-POST-TEXT',
		newText: text
	};
};