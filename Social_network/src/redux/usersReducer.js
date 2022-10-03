import { usersAPI } from "../api/api";

const initialState = {
	usersData: [],
	pageSize: 100,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: false,
	followingInProgress: []
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
		case 'TOGGLE_IS_FOLLOWING_PROGRESS': return {
			...state, followingInProgress: action.progress ?
				[...state.followingInProgress, action.userId] :
				[state.followingInProgress.filter(id => id !== action.userId)]

		};
		default: return state;
	}
};

export default friendsReducer;

export const followSuccess = userId => ({ type: 'FOLLOW', userId });
export const unfollowSuccess = userId => ({ type: 'UNFOLLOW', userId });
export const setUsers = usersData => ({ type: 'SET_USERS', usersData });
export const setCurrentPage = currentPage => ({ type: 'SET_CURRENT_PAGE', currentPage });
export const setTotalUsersCount = totalUsersCount => ({ type: 'SET_TOTAL_USERS_COUNT', totalUsersCount });
export const toggleIsFetching = isFetching => ({ type: 'TOGGLE_IS_FETCHING', isFetching });
export const toggleIsFollowingProgress = (progress, userId) => ({ type: 'TOGGLE_IS_FOLLOWING_PROGRESS', progress, userId });


export const getUsers = (currentPage, pageSize) => dispatch => {
	dispatch(toggleIsFetching(true));
	usersAPI.getUsers(currentPage, pageSize).then(data => {
		dispatch(toggleIsFetching(false));
		dispatch(setUsers(data.items));
		dispatch(setTotalUsersCount(data.totalCount));
	});
};

export const follow = (userId) => async dispatch => {
	followUnfollow(dispatch, userId, usersAPI.followOnUser(userId), followSuccess);
}

export const unfollow = (userId) => async dispatch => {
	followUnfollow(dispatch, userId, usersAPI.unfollowFromUser(userId), unfollowSuccess);
}

export const followUnfollow = async (dispatch, userId, apiMethod, actionCreator) => {
	dispatch(toggleIsFollowingProgress(true, userId))
	const response = await apiMethod;
	if (response.data.resultCode === 0) {
		dispatch(actionCreator(userId));
		dispatch(toggleIsFollowingProgress(false, userId))
	};
};

