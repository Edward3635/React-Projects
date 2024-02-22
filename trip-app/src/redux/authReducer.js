// import { weatherAPI } from 'api/api';
// import { createUniqueIdGenerator } from 'utils/utils';

const initialState = {
	userData: null
};
const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_USER': return { ...state, userData: action.payload };
		case 'LOGOUT':
			return {
				...state, userData: {}
			};
		default: return state;
	}
};

export default authReducer;

export const setUser = payload => ({ type: 'SET_USER', payload });
export const logout = id => ({ type: 'LOGOUT', id });



// export const addTrip = ({ city, startDate, endDate }) => async dispatch => {
// 	try {
// 		dispatch(toggleIsLoading(true));
// 		const response = await weatherAPI.getTripForecast(city, startDate, endDate);
// 		if (response) {
// 			const generateUniqueId = createUniqueIdGenerator();
// 			dispatch(setTrip({ ...response, id: generateUniqueId() }))
// 		}
// 		else console.error('Error: Response does not contain valid data');
// 		dispatch(toggleIsLoading(false));
// 		dispatch(toggleIsOpenModal(false))
// 	}
// 	catch (error) {
// 		console.error('Error fetching data:', error);
// 	}
// };