import React from 'react'
import cl from './tripInfo.module.scss';
import DayOfWeek from './DayOfWeek/DayOfWeek';
import { defineDayOfWeek, fahrenheitToCel } from 'utils/utils';


const TripInfo = ({ days }) => {
	const daysOfWeek = days.map((day) => <DayOfWeek key={day.datetime} day={day}
		defineDayOfWeek={defineDayOfWeek} fahrenheitToCel={fahrenheitToCel} />);

	return (
		<div className={cl.tripInfo}>
			<h3>Week</h3>
			<div className={cl.daysOfWeek}>{daysOfWeek}</div>
		</div>
	)
}

export default TripInfo