import { createContext, ReactNode, useState, useEffect } from 'react';
import { WeatherContextInterface } from '../shared/types/types';
import { fetchWeatherData } from '../shared/services/WeatherApi';

export const WeatherContext = createContext<WeatherContextInterface | undefined>(undefined);

export const WeatherProvider = ({ children }: { children: ReactNode }) => {
	const [location, setLocation] = useState(localStorage.getItem('location') || '');
	const [weatherData, setWeatherData] = useState({});

	useEffect(() => {
		if (!location) return;
		const fetchData = async () => {
			try {
				const data = await fetchWeatherData(location);
				setWeatherData(data);
			} catch (error) {
				console.log('error', error);
			}
		};
		fetchData();
	}, [location]);

	const onSubmit = (place: string) => {
		setLocation(place);
		localStorage.setItem('location', place);
	};

	return (
		<WeatherContext.Provider
			value={{ setLocation, location, weatherData, setWeatherData, onSubmit }}
		>
			{children}
		</WeatherContext.Provider>
	);
};
