import { WeatherData } from '@/shared/types/types';
import { useWeather } from './useWeather';
import { HOURS_DAY } from '@/shared/constants/weatherConstants';

export const useHourForecast = () => {
	const { weatherData } = useWeather();
	const { forecast } = weatherData as WeatherData;
	const currentDayForecast = forecast?.forecastday[0];
	const nextDayForecast = forecast?.forecastday[1];
	const forecastHours = [];
	const currentDate = new Date();
	const currentTime = currentDate.getHours();

	for (let i = currentTime; i < HOURS_DAY; i++) {
		const hourData = currentDayForecast?.hour[i];
		forecastHours.push(hourData);
	}

	let isAbleToAddNextDayForecast = forecastHours.length <= HOURS_DAY;

	for (let i = 0; isAbleToAddNextDayForecast && i <= HOURS_DAY; i++) {
		const hourData = nextDayForecast?.hour[i];
		forecastHours.push(hourData);
		if (forecastHours.length === 25) isAbleToAddNextDayForecast = false;
	}

	return { forecastHours };
};
