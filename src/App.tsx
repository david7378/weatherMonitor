import { useWeather } from '@/hooks/useWeather';
import { CurrentWeather, WeatherParamsCard, HourForecast } from '@/components/Card/';
import { Divider } from '@/components/Divider/Divider';
import LocationInput from '@/components/LocationInput/LocationInput';

function App() {
	const { location } = useWeather();

	return (
		<div className='h-screen justify-center bg-white flex items-center bg-gradient-to-t from-pink-900/30 via-zinc-500 to-blue-950 '>
			{!location ? (
				<LocationInput />
			) : (
				<div className='max-w-[390px] mx-auto flex flex-col gap-4 h-screen w-full lg:h-full lg:max-h-[844px] '>
					<main className='text-white bg-gradient-to-b from-sky-200/5 via-blue-500/5 to-sky-800/5 flex flex-col justify-around p-4 rounded-b-lg h-full w-full backdrop-blur-3xl'>
						<CurrentWeather />
						<Divider />
						<WeatherParamsCard />
					</main>
					<footer className='bg-gradient-to-b from-purple-200/5 via-blue-400/10 to-pink-400/5 p-4 rounded-t-lg'>
						<HourForecast />
					</footer>
				</div>
			)}
		</div>
	);
}

export default App;
