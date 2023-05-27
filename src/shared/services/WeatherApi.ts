import {
	BASE_URL,
	WEATHER_KEY,
	FORECAST_WEATHER,
	DAYS,
} from '../constants/weatherConstants';

export const fetchWeatherData = async (location: string) => {
	const url = `${BASE_URL}${FORECAST_WEATHER}?key=${WEATHER_KEY}&q=${location}&days=${DAYS}&aqi=no`;
	const data = await fetch(url);
	return data.json();
};
