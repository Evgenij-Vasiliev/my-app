import React, { useEffect, useState } from 'react/cjs/react.development';
import styles from  './Timer.module.css';

const date = new Date();


function Timer() {

    const[dateTime, setDateTime] = useState({
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
    });

    useEffect(() => {
        const timer = setInterval(() => {
            const date = new Date();
            setDateTime({
                hours: date.getHours(),
                minutes: date.getMinutes(),
                seconds: date.getSeconds()
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);
    return (<div className={styles.clock}>
                <div>
                    {dateTime.hours}:{dateTime.minutes}:{dateTime.seconds}
                </div>
            </div>
    );

}

export default Timer;