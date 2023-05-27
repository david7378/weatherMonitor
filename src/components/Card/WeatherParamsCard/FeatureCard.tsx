import { FeatureInterface } from '@/shared/types/types';

export const FeatureCard = ({
	firstParameter,
	secondParameter,
	icon,
}: FeatureInterface) => {
	return (
		<div className='flex items-center gap-2 p-2 rounded-xl'>
			<div>{icon}</div>
			<div className='flex flex-col'>
				<div>{firstParameter}</div>
				<div>{secondParameter}</div>
			</div>
		</div>
	);
};

export default FeatureCard;
