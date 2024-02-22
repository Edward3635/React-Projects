import React, { useRef, useState } from 'react'
import { useEffect } from 'react';
import cl from 'components/Main/main.module.scss';
import LocationCard from '../Common/Locationcard/LocationCard';
import plus from 'img/commonIcons/plus.svg';
import TripInfo from './TripInfo/TripInfo';
import InputSearchTrip from './InputSearchTrip/InputSearchTrip';
import { useDispatch, useSelector } from 'react-redux';
import Modal from './Modal/Modal';
import { selectTrip, toggleIsOpenModal, addTrip, removeTrip, updateSearchFilter, changeSortFilter, updateSortFilter } from '../../redux/mainReducer';
import CityForecast from './CityForecast/CityForecast';
import Avatar from 'components/Common/Avatar/Avatar';
import Filter from './Filter/Filter';
import NavButtons from 'components/Common/NavButtons/NavButtons';

const Main = () => {
	const dispatch = useDispatch();
	const idSelectedTrip = useSelector(state => state.main.selectedTrip);
	const isOpenModal = useSelector(state => state.main.isOpenModal);
	const isLoading = useSelector(state => state.main.isLoading);
	const trips = useSelector(state => state.main.trips);
	let filteredTripsBySearch = useSelector(state => state.main.searchFilter);
	let filterByStartDate = useSelector(state => state.main.filterByStartDate);

	const selectedTrip = trips.find(trip => trip.id === idSelectedTrip);
	const [searchInput, setSearchInput] = useState('');

	const handleRemoveTrip = (id) => {
		if (idSelectedTrip === id) dispatch(selectTrip(null))
		dispatch(removeTrip(id));
		if (filteredTripsBySearch) dispatch(updateSearchFilter(searchInput));
	}
	const handleModal = () => dispatch(toggleIsOpenModal(!isOpenModal));

	const handleTripSelected = (id) => {
		dispatch(selectTrip(id === idSelectedTrip ? null : id))
	};
	const handleSearchInputChange = (event) => {
		dispatch(updateSearchFilter(event.target.value));
		setSearchInput(event.target.value)
		if (filterByStartDate) dispatch(updateSortFilter('dynamicState'));
		// if (idSelectedTrip >= 0) dispatch(selectTrip(null));
	};

	const handleSelectSort = (e) => {
		const event = e.target.value;
		if (searchInput) {
			dispatch(changeSortFilter({ event, trips: filteredTripsBySearch, filteredSearchDefault: true }));
		} else dispatch(changeSortFilter({ event, trips: trips }))
	};

	useEffect(() => {
		const parsedTrips = JSON.parse(localStorage.getItem('myTrips'));
		if (parsedTrips && parsedTrips.length) {
			parsedTrips.forEach(trip => {
				dispatch(addTrip({
					city: trip.address,
					startDate: trip.days[0].datetime,
					endDate: trip.days[trip.days.length - 1].datetime
				}));
			});
		}
		else { dispatch(addTrip({ city: 'Kyiv', startDate: '2024-02-27', endDate: '2024-03-06' })) }

	}, []);

	useEffect(() => {
		if (filterByStartDate) dispatch(updateSortFilter());
		localStorage.setItem('myTrips', JSON.stringify(trips));
	}, [trips])


	const tripsList = (filteredTripsBySearch || trips).map((trip) =>
		<LocationCard
			key={trip.id}
			address={trip.address}
			days={trip.days}
			isSelected={idSelectedTrip}
			handleTripSelected={handleTripSelected}
			id={trip.id}
			removeTrip={handleRemoveTrip}
		/>
	);


	const imageWidth = 190;
	const [scrollLeft, setScrollLeft] = useState(0);
	const visibleImages = 4;
	const galleryRef = useRef(null);
	const handleScrollLeft = () => {
		const newPosition = Math.max(scrollLeft - 220, 0);
		setScrollLeft(newPosition);
		galleryRef.current.scrollTo(newPosition, 0);
	};

	const handleScrollRight = () => {
		const maxScroll = (trips.length - visibleImages) * imageWidth + 600;
		const newPosition = Math.min(scrollLeft + 220, maxScroll);
		setScrollLeft(newPosition);
		galleryRef.current.scrollTo(newPosition, 0);
	};


	return (
		<>
			<div className={cl.main}>
				<div>
					<h3>Weather <span className={cl.bold}>Forecast</span></h3>
					<Avatar />
					<div className={cl.searchAndFilter}>
						<InputSearchTrip handleSearchInputChange={handleSearchInputChange} searchInput={searchInput} />
						<Filter handleSelectSort={handleSelectSort} />
					</div>

					{isLoading ? (
						<p>Loading...</p>
					) :
						(
							<div className={cl.trips} ref={galleryRef}>
								{tripsList}
								<div className={cl.addTrip} onClick={handleModal}>
									<div className={cl.addTripWrapper}>
										<img src={plus} alt="plus" />
										<div>Add trip</div>
									</div>
								</div>
							</div>
						)}
					<NavButtons handleScrollLeft={handleScrollLeft} handleScrollRight={handleScrollRight} />

					{idSelectedTrip !== null && <TripInfo days={selectedTrip.days} />}
				</div>
				{idSelectedTrip != null &&
					<CityForecast city={selectedTrip.address}
						isLoading={isLoading} startDate={selectedTrip.days[0].datetime} />}
			</div>
			{isOpenModal && <Modal handleModal={handleModal} isLoading={isLoading} setSearchInput={setSearchInput} />}

		</>
	)
}

export default Main