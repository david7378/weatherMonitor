import { useRef } from 'react';
import { useWeather } from '@/hooks/useWeather';

const LocationInput = () => {
	const { onSubmit } = useWeather();
	const locationRef = useRef<HTMLInputElement | null>(null);

	const handleOnClick = () => {
		if (locationRef.current) {
			const location = locationRef.current.value;
			onSubmit(location);
			locationRef.current.value = '';
		}
	};

	return (
		<div className='h-screen flex items-center justify-center flex-col gap-4  '>
			<div className='border-b border-teal-500 w-2/4 px-4 py-2 '>
				<input
					ref={locationRef}
					type='text'
					className='appearance-none font-mukta font-medium bg-transparent border-none w-full text-stone-300 placeholder:text-stone-400 mr-3 py-1 px-2 leading-tight focus:outline-none'
					placeholder='Your location here...'
					aria-label='location'
				/>
			</div>
			<button
				onClick={handleOnClick}
				className='bg-gradient-to-r from-stone-300 via-zinc-300 to-stone-300 text-stone-900  uppercase font-medium rounded-lg w-2/4 py-3'
			>
				Ready
			</button>
		</div>
	);
};

export default LocationInput;
