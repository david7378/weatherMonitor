import { render, RenderResult } from '@testing-library/react';
import { ReactElement } from 'react';
import { WeatherProvider } from '@/context/weatherContext';

export const renderWithWeatherProvider = (component: ReactElement): RenderResult => {
	return render(<WeatherProvider>{component}</WeatherProvider>);
};

export const useHourForecastMock = jest.fn(() => ({
	forecastHours: [
		{
			time: '2023-05-26 13:00',
			temp_c: 22.1,
			condition: {
				icon: 'sunny',
			},
		},
		{
			time: '2023-05-26 14:00',
			temp_c: 22.5,
			condition: {
				icon: 'cloudy',
			},
		},
	],
}));

export const useWeatherMock = jest.fn(() => ({
	weatherData: {
		current: {
			temp_c: '20°',
			condition: {
				text: 'Sunny',
			},
		},
		location: {
			region: 'California',
		},
		forecast: {
			forecastday: [
				{
					day: {
						maxtemp_c: '25',
						mintemp_c: '18',
						daily_chance_of_rain: '10',
					},
				},
			],
		},
	},
}));
