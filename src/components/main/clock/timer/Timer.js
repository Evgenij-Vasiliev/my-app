import { useState, useEffect } from "react";
import styles from '../timer/Timer.module.css';

function Timer() {
    
	const [ startTimer, setStartTimer ] = useState(0);
	useEffect(
		() => {
			const timerId = setInterval(() => {
				setStartTimer(startTimer + 1);
			}, 1000);
            return () => {
                clearInterval(timerId);
            }
            
		},
		[ startTimer ]
	);
	
	return (
        <>
		<div className={styles.startTimer}>
			<div>{startTimer}</div>
		</div>        
        </>
	);
}

export default Timer;