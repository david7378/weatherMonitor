import { render, screen } from '@testing-library/react';
import { FeatureCard } from '..';

describe('FeatureCard', () => {
	const featureData = {
		firstParameter: 'First',
		secondParameter: 'Second',
		icon: <div>Icon</div>,
	};
	it('should render the differents parameters correctly', () => {
		// Render the FeatureCard component for testing
		render(<FeatureCard {...featureData} />);

		// Find and verify the rendering of the time element
		const firstParameterElement = screen.getByText(featureData.firstParameter);
		const secondParameterElement = screen.getByText(featureData.secondParameter);
		const iconElement = screen.getByText('Icon');

		expect(firstParameterElement).toBeInTheDocument();
		expect(secondParameterElement).toBeInTheDocument();
		expect(iconElement).toBeInTheDocument();
	});
});
