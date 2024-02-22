import { weatherAPI } from 'api/api';
import { createUniqueIdGenerator } from 'utils/utils';

const initialState = {
	trips: [
	],
	forecastToday: {
		days: []
	},
	selectedTrip: null,
	searchFilter: null,
	filterByStartDate: false,
	isOpenModal: false,
	isLoading: false,
};
const mainReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_TRIP': return { ...state, trips: [...state.trips, action.payload] };
		case 'REMOVE_TRIP':
			return {
				...state,
				trips: state.trips.filter((trip) => action.id !== trip.id)
			};
		case 'UPDATE_FORECAST_TODAY': return { ...state, forecastToday: action.payload };
		case 'SELECTED_TRIP': return { ...state, selectedTrip: action.payload };

		case 'UPDATE_SEARCH_FILTER':
			if (action.payload === null) return { ...state, searchFilter: null }
			const searchFilter = state.trips.filter(location => location.address.toLowerCase()
				.includes(action.payload.toLowerCase()));
			return { ...state, searchFilter };

		case 'CHANGE_SORT_FILTER':
			let filterBy, defaultFilter;
			if (action.payload.event === 'StartDate') {
				filterBy = action.payload.trips
					.filter(trip => trip.days[0].datetime)
					.slice()
					.sort((a, b) => a.days[0].datetime.localeCompare(b.days[0].datetime));
				defaultFilter = true

			}

			if (action.payload.event === 'Default') {
				if (action.payload.filteredSearchDefault) {
					filterBy = state.trips.filter(obj1 =>
						action.payload.trips.some(obj2 => obj2.address === obj1.address)
					);
				} else {
					filterBy = action.payload.trips
					defaultFilter = false
				}
			}

			return { ...state, filterByStartDate: defaultFilter, searchFilter: filterBy };

		case 'UPDATE_SORT_FILTER':
			let filterUpdated = (action.payload ? state.searchFilter : state.trips).filter(trip => trip.days[0].datetime).slice()
				.sort((a, b) => a.days[0].datetime.localeCompare(b.days[0].datetime));

			return { ...state, searchFilter: filterUpdated };

		case 'TOGGLE_IS_OPEN_MODAL': return { ...state, isOpenModal: action.payload };
		case 'IS_LOADING': return { ...state, isLoading: action.payload };
		default: return state;
	}
};

export default mainReducer;
export const setTrip = payload => ({ type: 'SET_TRIP', payload });
export const removeTrip = id => ({ type: 'REMOVE_TRIP', id });
export const updateForecastToday = payload => ({ type: 'UPDATE_FORECAST_TODAY', payload });
export const updateSearchFilter = payload => ({ type: 'UPDATE_SEARCH_FILTER', payload });
export const updateSortFilter = (payload = null) => ({ type: 'UPDATE_SORT_FILTER', payload });
export const changeSortFilter = payload => ({ type: 'CHANGE_SORT_FILTER', payload });
export const selectTrip = payload => ({ type: 'SELECTED_TRIP', payload });
export const toggleIsOpenModal = payload => ({ type: 'TOGGLE_IS_OPEN_MODAL', payload });
export const toggleIsLoading = payload => ({ type: 'IS_LOADING', payload });



export const addTrip = ({ city, startDate, endDate }) => async dispatch => {
	try {
		dispatch(toggleIsLoading(true));
		const response = await weatherAPI.getTripForecast(city, startDate, endDate);
		if (response) {
			const generateUniqueId = createUniqueIdGenerator();
			dispatch(setTrip({ ...response, id: generateUniqueId() }))
		}
		else console.error('Error: Response does not contain valid data');
		dispatch(toggleIsLoading(false));
		dispatch(toggleIsOpenModal(false))
	}
	catch (error) {
		console.error('Error fetching data:', error);
	}
};

export const getUpdateForecastToday = ({ city, date }) => async dispatch => {
	try {
		const response = await weatherAPI.getForecastToday(city, date);
		if (response) dispatch(updateForecastToday(response));
		else console.error('Error: Response does not contain valid data');
	}
	catch (error) {
		console.error('Error fetching data:', error);
	}
};