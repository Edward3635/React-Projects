const initialState = {
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
};

const messagesReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD-MESSAGE':
			const newMessage = {
				id: state.messageData.length + 1,
				message: state.newMessageText
			};
			return {
				...state,
				messageData: [...state.messageData, newMessage],
				newMessageText: ''
			};

		case 'UPDATE-NEW-MESSAGE-TEXT': return {
			...state,
			newMessageText: action.newText
		};


		default: return state;
	}
};

export default messagesReducer;

export const addMessageActionCreator = () => ({ type: 'ADD-MESSAGE' });

export const updateNewMessageTextActionCreator = (text) => ({ type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text });