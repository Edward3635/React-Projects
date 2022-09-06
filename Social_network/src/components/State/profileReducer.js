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
			state.postData.unshift(newPost)
			state.newPostText = '';
			return state;

		case 'UPDATE-NEW-POST-TEXT':
			state.newPostText = action.newText;
			return state;

		default:
			return state;
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