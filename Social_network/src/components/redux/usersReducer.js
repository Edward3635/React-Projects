const initialState = {
	usersData: [],
	pageSize: 100,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: false
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
		case 'SET_TOTAL_USERS_COUNT': return { ...state, totalUsersCount: action.totalUsersCount };
		case 'TOGGLE_IS_FETCHING': return { ...state, isFetching: action.isFetching };
		default: return state;
	}
};

export default friendsReducer;

export const follow = userId => ({ type: 'FOLLOW', userId });
export const unfollow = userId => ({ type: 'UNFOLLOW', userId });
export const setUsers = usersData => ({ type: 'SET_USERS', usersData });
export const setCurrentPage = currentPage => ({ type: 'SET_CURRENT_PAGE', currentPage });
export const setTotalUsersCount = totalUsersCount => ({ type: 'SET_TOTAL_USERS_COUNT', totalUsersCount });
export const toggleIsFetching = isFetching => ({ type: 'TOGGLE_IS_FETCHING', isFetching })