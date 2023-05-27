import { render, fireEvent, screen } from '@testing-library/react';
import { useWeather } from '@/hooks/useWeather';
import { WeatherContextInterface } from '@/shared/types/types';
import LocationInput from './LocationInput';

// Mock the useWeather hook to return simulated data in tests
jest.mock('@/hooks/useWeather');

describe('LocationInput', () => {
	let mockUseWeather: jest.MockedFunction<typeof useWeather>;

	beforeEach(() => {
		// Mock the useWeather hook with simulated data before each test
		mockUseWeather = useWeather as jest.MockedFunction<typeof useWeather>;
		mockUseWeather.mockReturnValue({
			onSubmit: jest.fn(),
			setLocation: jest.fn(),
			location: '',
			setWeatherData: jest.fn(),
			weatherData: {},
		} as WeatherContextInterface);
	});

	afterEach(() => {
		// Clear all mocks after each test
		jest.clearAllMocks();
	});

	const setup = () => {
		render(<LocationInput />);
		const input = screen.getByLabelText('location');
		const button = screen.getByText('Ready');
		return { input, button };
	};

	// Test case: should call onSubmit with the input value when the button is clicked
	it('should call onSubmit with the input value when the button is clicked', () => {
		const { button, input } = setup();
		fireEvent.change(input, { target: { value: 'Test Location' } });
		fireEvent.click(button);
		expect(mockUseWeather().onSubmit).toHaveBeenCalledWith('Test Location');
	});

	// Test case: should clear the input after the button is clicked
	it('should clear the input after the button is clicked', () => {
		const { button, input } = setup();
		fireEvent.change(input, { target: { value: 'Test Location' } });
		fireEvent.click(button);
		expect(input).toHaveValue('');
	});
});
