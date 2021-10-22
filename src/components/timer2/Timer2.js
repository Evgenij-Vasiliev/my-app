import { useState } from "react/cjs/react.development";
import styles from "./Timer2.module.css";

function Timer2() {
    
	const [ startTimer, setStartTimer ] = useState(0);
    let timer = setTimeout(() => setStartTimer(0), 1000)
	// useEffect(
	// 	() => {
	// 		const timerId = setInterval(() => {
	// 			setStartTimer(startTimer + 1);
	// 		}, 1000);
    //         return () => {
    //             clearInterval(timerId);
    //         }
            
	// 	},
	// 	[ startTimer ]
	// );
	
	return (
        <>
		<div className={styles.startTimer}>
			<div>{startTimer}</div>
            <button
            className={styles.start}
            onClick={timer}
      >
        TIMER
      </button>            
		</div>                
        </>
	);
}

export default Timer2;