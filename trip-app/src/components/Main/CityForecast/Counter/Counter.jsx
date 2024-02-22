import React, { useState, useEffect } from 'react'
import cl from './counter.module.scss';
import { calculateTimeLeft } from 'utils/utils';

const Counter = ({ startDate }) => {
	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(startDate));

	useEffect(() => {
		const timer = setTimeout(() => {
			setTimeLeft(calculateTimeLeft(startDate));
		}, 1000);

		return () => clearTimeout(timer);
	});

	const formatTime = (time) => {
		return time < 10 ? `0${time}` : time;
	};


	return (
		<div className={cl.counter}>
			<div className={cl.number}>{timeLeft.days || '0'}</div>
			<div className={cl.number}>{formatTime(timeLeft.hours || '0')}</div>
			<div className={cl.number}>{formatTime(timeLeft.minutes || '0')}</div>
			<div className={cl.number}>{formatTime(timeLeft.seconds || '0')}</div>
			<div className={cl.word}>DAYS</div>
			<div className={cl.word}>HOURS</div>
			<div className={cl.word}>MINUTES</div>
			<div className={cl.word}>SECONDS</div>
		</div>
	)
}

export default Counter