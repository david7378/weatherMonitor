import { NOW_TITLE, ZERO_MINS } from '@/shared/constants/weatherConstants';

export const convertDateToHour = (date: string) => {
	const currentDate = new Date();
	const currentTimeHours = currentDate.getHours();
	const apiDate = new Date(date);
	const itemHours = apiDate.getHours();
	const itemDay = apiDate.getDate();
	const currentDay = currentDate.getDate();
	const fixedTime = `${itemHours}:${ZERO_MINS}`;
	const matchDay = itemDay === currentDay;
	const matchHours = itemHours === currentTimeHours;

	if (matchHours && matchDay) {
		return NOW_TITLE;
	}
	return fixedTime;
};

export const convertTempWithSymbol = (temp: number, H?: boolean, L?: boolean) => {
	if (H) {
		return `H ${temp}°`;
	} else if (L) {
		return `L ${temp}°`;
	}
	return `${temp}°`;
};
