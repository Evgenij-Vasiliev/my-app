import { useState } from 'react';
import styles from './Timer2.module.css';

function Timer2() {
    const [seconds, useSeconds] = useState(0);
    function timerStart() {
        setInterval(() => {
            useSeconds(seconds + 1);
        }, 1000)                        
    }

    return <div>
        <span>{ seconds }</span>
        <button onClick={ timerStart }>Start</button>
        <button>Stop</button>
        <button>Reset</button>
        </div>
    
}
export default Timer2;