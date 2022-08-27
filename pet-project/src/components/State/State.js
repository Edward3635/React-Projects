const state = {
	profilePage: {
		postData: [
			{ id: 1, msg: 'This is my first post!', likesCount: 32 },
			{ id: 2, msg: 'Hello there!', likesCount: 10 }
		]
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
		]
	}
};

export default state;