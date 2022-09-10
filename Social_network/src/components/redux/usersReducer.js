const initialState = {
	usersData: [
		// {
		// 	id: 1, followed: true, name: 'Homer', status: "I'm designer from Poland", location: {
		// 		country: 'Poland', city: 'Wrocław'
		// 	}
		// },
		// {
		// 	id: 2, followed: false, name: 'Mary', status: 'Help me to choose dress', location: {
		// 		country: 'Switzerland', city: 'Bern	'
		// 	}
		// },
		// {
		// 	id: 3, followed: false, name: 'James', status: 'Look at my page!', location: {
		// 		country: 'Spain', city: 'Barcelona'
		// 	}
		// },
		// {
		// 	id: 4, followed: true, name: 'Jennifer', status: 'Do you want new friends? Add me!', location: {
		// 		country: 'Ukraine', city: 'Lviv'
		// 	}
		// },
		// {
		// 	id: 5, followed: true, name: 'Richard', status: 'Leave me alone...', location: {
		// 		country: 'Romania', city: 'Bucharest'
		// 	}
		// },
		// {
		// 	id: 6, followed: false, name: 'Scott', status: 'Buongiorno!', location: {
		// 		country: 'France', city: 'Paris'
		// 	}
		// }
	]
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
			userData: state.usersData.map(user => {
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