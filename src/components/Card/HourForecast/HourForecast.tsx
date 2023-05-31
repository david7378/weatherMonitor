import { HourForecastCard } from '@/shared/types/types';
import { convertDateToHour, convertTempWithSymbol } from '@/shared/utils/helperFunctions';

const HourForecast = ({ time, temperature, img }: HourForecastCard) => {
	const fixedTime = convertDateToHour(time);
	return (
		<div className='font-mukta text-white bg-sky-200/5 h-full text-center flex flex-col justify-between py-4 px-4 rounded-lg w-full'>
			<h2 className='text-lg font-medium '>{fixedTime}</h2>
			<div className='flex justify-center'>
				<img src={img} alt={img} className='w-9' />
			</div>
			<h2>{convertTempWithSymbol(temperature)}</h2>
		</div>
	);
};
export default HourForecast;
