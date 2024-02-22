import React from 'react'
import cl from '../tripInfo.module.scss'

const DayOfWeek = ({ day, defineDayOfWeek, fahrenheitToCel }) => {
	return (
		<div className={cl.dayOfWeekWrapper}>
			<div className={cl.dayOfWeek}>{defineDayOfWeek(day.datetime)}</div>
			<img className={cl.weatherIcon} src={require(`img/weatherIcons/${day.icon}.png`)} alt={day.icon} />
			<div className={cl.temp}>{`${fahrenheitToCel(day.tempmax)}°/${fahrenheitToCel(day.tempmin)}°`}</div>
		</div>
	)
}

export default DayOfWeek