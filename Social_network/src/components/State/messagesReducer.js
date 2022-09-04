const messagesReducer = (state, action) => {

	switch (action.type) {
		case 'ADD-MESSAGE':
			const newMessage = {
				id: state.messageData.length + 1,
				message: state.newMessageText
			};
			state.messageData.push(newMessage)
			state.newMessageText = ''
			return state;

		case 'UPDATE-NEW-MESSAGE-TEXT':
			state.newMessageText = action.newText;
			return state;

		default:
			return state;
	}
};

export default messagesReducer;

export const addMessageActionCreator = () => {
	return {
		type: 'ADD-MESSAGE'
	};
};

export const updateNewMessageTextActionCreator = (text) => {
	return {
		type: 'UPDATE-NEW-MESSAGE-TEXT',
		newText: text
	};
}