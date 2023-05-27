import { Divider } from './Divider';
import { render } from '@testing-library/react';

describe('Divider', () => {
	it('should render the component', () => {
		// Render the Divider component for testing
		const { getByRole } = render(<Divider />);

		// Find and verify the rendering of the time element
		const dividerElement = getByRole('separator');
		expect(dividerElement).toBeInTheDocument();
		const dividerClass = 'border-t-[1px] border-white/40 pb-2';
		expect(dividerElement).toHaveClass(dividerClass);
	});
});
