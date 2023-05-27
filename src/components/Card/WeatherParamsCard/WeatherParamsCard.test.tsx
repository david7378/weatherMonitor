import { WeatherParamsCard } from '..';
import { renderWithWeatherProvider } from '@/shared/utils/testUtils';
import { WeatherParams } from '@/shared/services/WeatherParams';

jest.mock('@/shared/services/WeatherParams', () => ({
	WeatherParams: jest.fn().mockReturnValue({
		PARAMS: [
			{
				firstParameter: 'somoParam',
				secondParameter: 'somoParam',
				icon: <img src='icon.png' alt='Icon' />,
			},
			{
				firstParameter: 'somoParam2',
				secondParameter: 'somoParam2',
				icon: <img src='icon2.png' alt='Icon' />,
			},
		],
	}),
}));

describe('WeatherParamsCard', () => {
	it('should render the same amount of li as params length', () => {
		// Get the simulated PARAMS data for hours
		const { PARAMS } = WeatherParams();

		// Render the HourForecast component for testing
		const { getAllByTestId } = renderWithWeatherProvider(<WeatherParamsCard />);

		// Find and verify the rendering of the time element
		const featureCards = getAllByTestId('feature-card');
		expect(featureCards.length).toBe(PARAMS.length);
	});
});
