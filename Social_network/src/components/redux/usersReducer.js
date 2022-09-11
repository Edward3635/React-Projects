const initialState = {
	usersData: []
};
const friendsReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'FOLLOW': return {
			...state,
			usersData: state.usersData.map(user => {
				if (user.id === action.userId) return { ...user, followed: true };
				return user;
			})
		};
		case 'UNFOLLOW': return {
			...state,
			usersData: state.usersData.map(user => {
				if (user.id === action.userId) return { ...user, followed: false };
				return user;
			})
		};
		case 'SET_USERS': return { ...state, usersData: [...state.usersData, ...action.usersData] };
		default: return state;
	}
};

export default friendsReducer;

export const followAC = (userId) => ({ type: 'FOLLOW', userId });
export const unfollowAC = (userId) => ({ type: 'UNFOLLOW', userId });
export const setUsersAC = (usersData) => ({ type: 'SET_USERS', usersData });