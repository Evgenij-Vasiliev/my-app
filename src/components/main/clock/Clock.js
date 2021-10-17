import React, { useState } from 'react';
import Clock1 from './clock1/Clock1';
import Clock12 from './clock2/Clock2';
import styles from './Clock.module.css';

function Clock() {
	let clock;
	const [ changeOfClock, setChangeOfClock ] = useState(true);
	if (changeOfClock) {
		clock = (
	<>
	<div><Clock1/></div>
	</>
	)		
	} else {
		clock = (
			<>
			<div><Clock12/>
			</div>
			</>
		)		
	}

	return (
		<div>
			{clock}
			<button className={styles.changeOfClock} 
			onClick={() => setChangeOfClock(!changeOfClock)}
			>
				Clock
			</button>
		</div>
	);
}
export default Clock;
