import { useWeather } from '@/hooks/useWeather';
import { CurrentWeather, WeatherParamsCard, HourForecast } from '@/components/Card/';
import { Divider } from '@/components/Divider/Divider';
import LocationInput from '@/components/LocationInput/LocationInput';

function App() {
	const { location } = useWeather();

	return (
		<div className='max-w-[440px] mx-auto'>
			{!location ? (
				<LocationInput />
			) : (
				<div className='flex flex-col gap-4 h-screen'>
					<main className='text-white bg-gradient-to-b from-sky-200 via-blue-500 to-sky-800 flex flex-col justify-around p-4 rounded-b-lg  h-full'>
						<CurrentWeather />
						<Divider />
						<WeatherParamsCard />
					</main>
					<footer className='bg-gradient-to-b from-sky-300 via-blue-500 to-sky-800 p-4 rounded-t-lg'>
						<HourForecast />
					</footer>
				</div>
			)}
		</div>
	);
}

export default App;
