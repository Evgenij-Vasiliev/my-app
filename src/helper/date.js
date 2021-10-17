import { DateTime } from 'luxon';

export function padZero(value) {
    if(value < 10) {
        return `0${value}`;
    }
    return value;
}

export function currenDate() {
	const date = new Date();
	return {
		hours: padZero(date.getHours()),
		minutes: padZero(date.getMinutes()),
		seconds: padZero(date.getSeconds())
	};
}

export function newDate() {
	return DateTime.now().toLocaleString(DateTime.TIME_24_WITH_SECONDS);
}
export default currenDate;