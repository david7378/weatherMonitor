import { render, screen } from '@testing-library/react';
import { HourForecast } from '..';
import { useHourForecastMock } from '@/shared/utils/testUtils';
import { useHourForecast } from '@/hooks/useHourForecast';
import { convertDateToHour, convertTempWithSymbol } from '@/shared/utils/helperFunctions';

// Mock the useHourForecast hook to return simulated data in tests
jest.mock('@/hooks/useHourForecast', () => ({
	useHourForecast: () => useHourForecastMock(),
}));

describe('HourForecast', () => {
	it('should render the elements correctly', () => {
		// Get the simulated forecast data for hours
		const { forecastHours } = useHourForecast();

		// Render the HourForecast component for testing
		render(<HourForecast />);

		// Find and verify the rendering of the time element
		const timeElement = screen.getByText(convertDateToHour(forecastHours[0].time));
		const iconElement = screen.getByAltText(forecastHours[0].condition.icon);
		const tempElement = screen.getByText(convertTempWithSymbol(forecastHours[0].temp_c));

		expect(timeElement).toBeInTheDocument();
		expect(iconElement).toBeInTheDocument();
		expect(tempElement).toBeInTheDocument();
	});
});
