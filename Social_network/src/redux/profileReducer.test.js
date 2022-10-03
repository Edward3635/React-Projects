import profileReducer, { addPost, removePost } from "./profileReducer";

const state = {
	postData: [
		{ id: 2, msg: 'Hello there!', likesCount: 10 },
		{ id: 1, msg: 'This is my first post!', likesCount: 32 }
	]
};

test('+1 new post', () => {
	// 1) Test data
	const action = addPost('myTest');

	// 2) Action
	const newState = profileReducer(state, action)

	// 3) Expectation
	expect(newState.postData.length).toBe(3);

});

test('New post body:', () => {
	// 1) Test data
	const action = addPost('myTest');

	// 2) Action
	const newState = profileReducer(state, action)

	// 3) Expectation
	expect(newState.postData[0].msg).toBe('myTest');

});

test('-1 post', () => {
	// 1) Test data
	const action = removePost(1);

	// 2) Action
	const newState = profileReducer(state, action)

	// 3) Expectation
	expect(newState.postData.length).toBe(1);

});
