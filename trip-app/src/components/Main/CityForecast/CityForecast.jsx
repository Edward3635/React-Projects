import React, { useEffect } from 'react'
import cl from './cityForecast.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { getUpdateForecastToday } from '../../../redux/mainReducer';
import { defineDayOfWeek, fahrenheitToCel } from 'utils/utils';
import Loader from 'components/Common/Loader/Loader';
import Counter from './Counter/Counter';
const CityForecast = ({ city, startDate }) => {
	const dispatch = useDispatch();
	const forecast = useSelector(state => state.main.forecastToday);
	useEffect(() => {
		dispatch(getUpdateForecastToday({ city, date: new Date().toISOString().split('T')[0] }))
	}, [city]);

	if (!forecast.days.length) return (<div className={cl.forecastPreloader}><Loader loaderStyle={{ forecastLoader: "forecastLoader" }} /></div>)
	const { datetime, icon, temp } = forecast.days[0];

	return (
		<div className={cl.cityForecast}>
			<div className={cl.forecastInfo}>
				<div className={cl.icon}>
					<img src={require(`../../../img/weatherIcons/${icon}.png`)} alt="weatherImg" />
				</div>
				<h3>{forecast.days && defineDayOfWeek(datetime)}</h3>
				<div className={cl.temp}>
					<div className={cl.degreeWrapper}>
						<span>{forecast.days && fahrenheitToCel(temp)}</span>
						<span className={cl.degree}>&#176;</span>
						<span className={cl.celsium}>C</span>
					</div>
				</div>
				<div className={cl.city}>{forecast.address}</div>
			</div>
			<Counter startDate={startDate} />
		</div>
	)
}

export default CityForecast