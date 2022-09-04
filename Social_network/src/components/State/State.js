import profileReducer from './profileReducer';
import messagesReducer from './messagesReducer';
import sideBarReducer from './sideBarReducer';
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
		this._state.profilePage = profileReducer(this._state.profilePage, action)
		this._state.messagesPage = messagesReducer(this._state.messagesPage, action)
		this._state.sideBarFriends = sideBarReducer(this._state.sideBarFriends, action)
		this._callSubscriber(this._state);
	}


};

export default store;