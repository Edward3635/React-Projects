export const showDatetime = (array) => {
	const date1 = array[0].datetime.split('-').reverse().join('-');
	const date2 = array[array.length - 1].datetime.split('-').reverse().join('-');
	return `${date1} - ${date2}`;
};

export const fahrenheitToCel = (fahrenheit) => {
	const celsius = (fahrenheit - 32) * 5 / 9;
	return parseFloat(celsius.toFixed(0));
};

export const defineDayOfWeek = (date) => {
	const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	const dayIndex = new Date(date).getDay();
	return daysOfWeek[dayIndex];
}

export const generateMaxDate = () => {
	const today = new Date();
	const maxDate = new Date(today);
	maxDate.setDate(today.getDate() + 15);
	return maxDate.toISOString().split('T')[0];
};

export const calculateTimeLeft = (startDate) => {
	const difference = +new Date(startDate + 'T00:00:00') - +new Date();
	let timeLeft = {};
	if (difference > 0) {
		timeLeft = {
			days: Math.floor(difference / (1000 * 60 * 60 * 24)),
			hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
			minutes: Math.floor((difference / 1000 / 60) % 60),
			seconds: Math.floor((difference / 1000) % 60)
		};
	}

	return timeLeft;
};

let idCounter = 0;

export const createUniqueIdGenerator = () => {
	return () => {
		idCounter++;
		return idCounter;
	};
};