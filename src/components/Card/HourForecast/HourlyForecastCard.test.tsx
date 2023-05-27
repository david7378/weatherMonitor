import { render, screen } from '@testing-library/react';
import HourlyForecastCard from './HourlyForecastCard';
import { useHourForecast } from '@/hooks/useHourForecast';
import { convertDateToHour, convertTempWithSymbol } from '@/shared/utils/helperFunctions';
import { useHourForecastMock } from '@/shared/utils/testUtils';

// Mock the useHourForecast hook to return simulated data in tests
jest.mock('@/hooks/useHourForecast', () => ({
	useHourForecast: () => useHourForecastMock(),
}));

describe('HourlyForecastCard', () => {
	it('should render hourly forescast list correctly', () => {
		// Get the simulated forecast data for hours
		const { forecastHours } = useHourForecast();

		// Render the HourForecast component for testing
		render(<HourlyForecastCard />);

		// Find and verify the rendering of the time element
		const firstHour = screen.getByText(convertDateToHour(forecastHours[0].time));
		const secondHour = screen.getByText(convertDateToHour(forecastHours[1].time));
		const firstTemperature = screen.getByText(convertTempWithSymbol(forecastHours[0].temp_c));
		const secondTemperature = screen.getByText(
			convertTempWithSymbol(forecastHours[1].temp_c)
		);
		const firstIcon = screen.getByAltText(forecastHours[0].condition.icon);
		const secondIcon = screen.getByAltText(forecastHours[1].condition.icon);

		expect(firstHour).toBeInTheDocument();
		expect(secondHour).toBeInTheDocument();
		expect(firstTemperature).toBeInTheDocument();
		expect(secondTemperature).toBeInTheDocument();
		expect(firstIcon).toBeInTheDocument();
		expect(secondIcon).toBeInTheDocument();
	});
});
