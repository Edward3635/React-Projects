const store = {
	_state: {
		profilePage: {
			postData: [
				{ id: 2, msg: 'Hello there!', likesCount: 10 },
				{ id: 1, msg: 'This is my first post!', likesCount: 32 }
			],
			newPostText: ''
		},
		messagesPage: {
			dialogData: [
				{ id: 1, name: 'Homer' },
				{ id: 2, name: 'Mary' },
				{ id: 3, name: 'James' },
				{ id: 4, name: 'Jennifer' },
				{ id: 5, name: 'Richard' },
				{ id: 6, name: 'Scott' }
			],
			messageData: [
				{ id: 1, message: 'Hey!' },
				{ id: 2, message: "What's up?" },
				{ id: 3, message: 'Are you busy?' }
			],
			newMessageText: ''
		},
		sideBarFriends: [
			{ id: 1, name: 'Homer' },
			{ id: 2, name: 'Mary' },
			{ id: 3, name: 'James' },
			{ id: 4, name: 'Jennifer' },
			{ id: 5, name: 'Eric' },
			{ id: 6, name: 'Scott' }
		]
	},
	_callSubscriber: '',

	getState() {
		return this._state;
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},
	dispatch(action) {
		if (action.type === 'ADD-POST') {
			const newPost = {
				id: this._state.profilePage.postData[0].id + 1,
				msg: this._state.profilePage.newPostText,
				likesCount: 1
			};
			this._state.profilePage.postData.unshift(newPost)
			this._state.profilePage.newPostText = '';
			this._callSubscriber(this._state);

		} else if (action.type === 'UPDATE-NEW-POST-TEXT') {
			this._state.profilePage.newPostText = action.newText;
			this._callSubscriber(this._state);

		} else if (action.type === 'ADD-MESSAGE') {
			const newMessage = {
				id: this._state.messagesPage.messageData.length + 1,
				message: this._state.messagesPage.newMessageText
			};
			this._state.messagesPage.messageData.push(newMessage)
			this._state.messagesPage.newMessageText = '';
			this._callSubscriber(this._state);


		} else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
			this._state.messagesPage.newMessageText = action.newText;
			this._callSubscriber(this._state);
		}
	}


};

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

export default store;