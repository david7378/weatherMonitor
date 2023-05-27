import { useWeather } from '@/hooks/useWeather';
import { WeatherData } from '@/shared/types/types';
import { RainIcon } from '@/components/icons';
import { convertTempWithSymbol } from '@/shared/utils/helperFunctions';

const CurrentWeather = () => {
	const { weatherData } = useWeather();
	const { current, location, forecast } = weatherData as WeatherData;
	const { day } = forecast?.forecastday[0] ?? [];
	const { region } = location ?? {};
	const { temp_c, condition } = current ?? {};

	return (
		<section>
			<div className='flex flex-col gap-2 pb-1 items-center border-slate-300 '>
				<h2 className='text-4xl font-catamaran font-semibold mb-1'>{region}</h2>
				<h2 className='text-7xl uppercase font-mukta font-semibold drop-shadow-lg'>
					{temp_c}
					<span className='font-extralight font-catamaran'>°</span>
				</h2>
				<div className='flex gap-6 font-muktaa'>
					<p>{convertTempWithSymbol(day?.maxtemp_c, true)}</p>
					<p>{convertTempWithSymbol(day?.mintemp_c, false, true)}</p>
				</div>
				<p className='font-mukta text-lg flex items-center justify-center'>{condition?.text}</p>
				<section className='flex items-center gap-1 font-mukta'>
					<RainIcon height={20} width={20} />
					<p>
						{day?.daily_chance_of_rain}
						<span className='text-xs pl-1 font-normal'>%</span>
					</p>
				</section>
			</div>
		</section>
	);
};

export default CurrentWeather;
