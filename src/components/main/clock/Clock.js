/* eslint-disable no-undef */
import React, { useState } from 'react';
import Clock1 from './clock1/Clock1';
import Clock2 from './clock2/Clock2';
import Timer  from './timer/Timer';
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
			<div><Clock2/>
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
			<div>
			{/* <Timer/> */}
			</div>
			<button className={styles.changeOfTimer} 
        	onClick={() => Timer}
        >
            Start
        </button>			
		</div>
	);
}
export default Clock;
