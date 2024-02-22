import React from 'react';
import loupe from 'img/commonIcons/loupe.png';
import cl from './inputSearchTrip.module.scss';

const InputSearchTrip = ({ searchInput, handleSearchInputChange }) => {
	return (
		<div className={cl.searchTripWrapper}>
			<img className={cl.loupe} src={loupe} alt="loupe" />
			<input className={cl.searchTrip} type="text" value={searchInput} onChange={handleSearchInputChange} placeholder='Search your trip' />
		</div>
	)
}

export default InputSearchTrip