import { useHourForecast } from '@/hooks/useHourForecast';
import HourForecast from './HourForecast';

const HourlyForecastCard = () => {
	const { forecastHours } = useHourForecast();
	return (
		<ul className='flex gap-4 w-full scrollbar-hide sm:scrollbar-default overflow-auto'>
			{forecastHours &&
				forecastHours.map((item, index) => (
					<li key={index}>
						<HourForecast
							time={item?.time}
							temperature={item?.temp_c}
							img={item?.condition.icon}
						/>
					</li>
				))}
		</ul>
	);
};
export default HourlyForecastCard;
