import { FeatureCard } from './FeatureCard';
import { WeatherParams } from '@/shared/services/WeatherParams';

const WeatherParamsCard = () => {
	const { PARAMS } = WeatherParams();

	return (
		<ul className='grid grid-cols-2 gap-6 p-4 items-center bg-white/5 rounded-lg '>
			{PARAMS.map((item) => (
				<li data-testid='feature-card' key={item?.firstParameter}>
					<FeatureCard {...item} />
				</li>
			))}
		</ul>
	);
};
export default WeatherParamsCard;
