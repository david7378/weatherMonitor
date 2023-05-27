import {
	PressureIcon,
	VisibilityIcon,
	WaterDropIcon,
	WindDirectionIcon,
} from '@/components/icons';
import { useWeather } from '@/hooks/useWeather';
import { WeatherData } from '../types/types';

export const WeatherParams = () => {
	const { weatherData } = useWeather();

	const { current } = weatherData as WeatherData;
	const { wind_kph, pressure_mb, humidity, vis_km } = current ?? {};

	const PARAMS = [
		{
			icon: <WindDirectionIcon height={18} width={18} />,
			firstParameter: `${wind_kph} km/h`,
			secondParameter: `Wind`,
		},
		{
			icon: <PressureIcon height={21} width={21} />,
			firstParameter: `${pressure_mb} mbar`,
			secondParameter: 'Pressure',
		},
		{
			icon: <WaterDropIcon height={18} width={18} />,
			firstParameter: `${humidity} %`,
			secondParameter: 'Humidity',
		},
		{
			icon: <VisibilityIcon height={20} width={20} />,
			firstParameter: `${vis_km} km`,
			secondParameter: 'Visibility',
		},
	];

	return { PARAMS };
};
