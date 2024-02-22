import axios from "axios";

const token = 'SXEHZWTW7ALJRM98VZBM79MZM';
const instance = axios.create({
	baseURL: 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/',
});

export const weatherAPI = {
	async getTripForecast(location, date1, date2) {
		const response = await instance
			.get(`timeline/${location}/${date1}/${date2}?key=${token}&include=days&elements=tempmax,tempmin,datetime,icon`);
		return response.data;
	},
	async getMultipleForecast(location1, location2) {
		const response = await instance.get(`timelinemulti?key=${token}&locations=${location1}%7C${location2}`);
		return response.data;
	},
	async getForecastToday(location, date) {
		const response = await instance.get(`timeline/${location}/${date}?key=${token}&include=days&elements=temp,datetime,icon`);
		return response.data;
	}
};

//55B3JJHTN3LT3J3E9FCFVTQPH
//NJHQVAZQKWWUHDAWCCYJ2Q9NN
//7C9AG2SLLEHNYHM28UDEE8U2X
//KEQVG7L9M6FETH8DMWWFCHQ2J
//SXEHZWTW7ALJRM98VZBM79MZM