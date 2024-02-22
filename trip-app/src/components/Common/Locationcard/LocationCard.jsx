import React from 'react'
import cl from './locationCard.module.scss';
import { showDatetime } from 'utils/utils';
import imgRemoveTrip from 'img/commonIcons/close.png'

const LocationCard = ({ address, days, isSelected, handleTripSelected, id, removeTrip }) => {
	return (
		<div className={cl.cardWrapper}>
			<div className={cl.imgRemoveTripWrapper}><img className={cl.imgRemoveTrip} src={imgRemoveTrip} alt='close' onClick={() => removeTrip(id)} /></div>
			<div onClick={() => handleTripSelected(id)} className={`${cl.card} ${isSelected === id ? cl.selected : ''}`}>
				<img className={cl.image} src={require(`../../../img/locations/${address}.jpg`)} alt={address} />
				<div className={cl.description}>
					<p className={cl.city}>{address}</p>
					<p className={cl.datetime}>{showDatetime(days)}</p>
				</div>
			</div>
		</div>
	)
}

export default LocationCard