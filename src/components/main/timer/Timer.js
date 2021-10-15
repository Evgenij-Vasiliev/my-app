import React, { useEffect, useState } from 'react';
import { newDate } from '../../../helper/date';
import styles from './Timer.module.css';

function Timer() {
	const [ newDateString, setNewDateString ] = useState(newDate());
	useEffect(
		() => {
			setTimeout(() => {
				setNewDateString(newDate());
			}, 1000);
		},
		[ newDateString ]
	);
	return (
		<div className={styles.clock}>
			<div>{newDateString}</div>
		</div>
	);
}
export default Timer;
