import { render } from '@testing-library/react';
import CurrentWeather from './CurrentWeather';
import { useWeather } from '@/hooks/useWeather';
import { useWeatherMock } from '@/shared/utils/testUtils';
import { WeatherData } from '@/shared/types/types';
import { convertTempWithSymbol } from '@/shared/utils/helperFunctions';

jest.mock('@/hooks/useWeather', () => ({
	useWeather: () => useWeatherMock(),
}));

describe('CurrentWeather', () => {
	it('should render the current weather information', () => {
		const { weatherData } = useWeather();
		const { location, current, forecast } = weatherData as WeatherData;
		const maxtemp_c = forecast.forecastday[0].day.maxtemp_c;
		const mintemp_c = forecast.forecastday[0].day.mintemp_c;
		const chanceOfRain = forecast.forecastday[0].day.daily_chance_of_rain;

		// Render the CurrentWeather component for testing
		const { getByText } = render(<CurrentWeather />);

		// Find and verify the rendering of the time element
		expect(getByText(location.region)).toBeInTheDocument();
		expect(getByText(current.temp_c)).toBeInTheDocument();
		expect(getByText(convertTempWithSymbol(maxtemp_c, true))).toBeInTheDocument();
		expect(getByText(convertTempWithSymbol(mintemp_c, false, true))).toBeInTheDocument();
		expect(getByText(current.condition.text)).toBeInTheDocument();
		expect(getByText(chanceOfRain)).toBeInTheDocument();
	});
});
