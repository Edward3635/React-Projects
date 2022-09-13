const initialState = {
	usersData: [],
	pageSize: 5,
	totalUsersCount: 0,
	currentPage: 1
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
		case 'SET_USERS': return { ...state, usersData: action.usersData };
		case 'SET_CURRENT_PAGE': return { ...state, currentPage: action.currentPage };
		case 'SET_TOTAL_USERS_COUNT': return {...state, totalUsersCount:action.totalUsersCount};
		default: return state;
	}
};

export default friendsReducer;

export const followAC = (userId) => ({ type: 'FOLLOW', userId });
export const unfollowAC = (userId) => ({ type: 'UNFOLLOW', userId });
export const setUsersAC = (usersData) => ({ type: 'SET_USERS', usersData });
export const setCurrentPageAC = (currentPage) => ({ type: 'SET_CURRENT_PAGE', currentPage });
export const setTotalUsersCountAC = (totalUsersCount) => ({ type: 'SET_TOTAL_USERS_COUNT', totalUsersCount });