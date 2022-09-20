const initialState =
	[
		{ id: 1, name: 'Homer' },
		{ id: 2, name: 'Mary' },
		{ id: 3, name: 'James' },
		{ id: 4, name: 'Jennifer' },
		{ id: 5, name: 'Eric' },
		{ id: 6, name: 'Scott' }
	];

const sideBarReducer = (state = initialState, action) => {
	return state;
};

export default sideBarReducer;