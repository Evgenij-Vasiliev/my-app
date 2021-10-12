import React, { useEffect, useState } from 'react/cjs/react.development';
import styles from  './Timer.module.css';

function Timer() {

    const date = new Date();

    const[dateTime, setDateTime] = useState({
        hours: date.getHours() ,
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
    });

    useEffect(() => {
        const timer = setInterval(() => {
            const date = new Date();
            setDateTime({
                hours: date.getHours() < 10 ? '0' + date.getHours(): date.getHours(),
                minutes: date.getMinutes() < 10 ? '0' + date.getMinutes(): date.getMinutes(),
                seconds: date.getSeconds() < 10 ? '0' + date.getSeconds(): date.getSeconds()
            });
        }, 1000);
        return () => clearInterval(timer);
    }, [dateTime]);
    return (<div className={styles.clock}>
                <div>
                    {dateTime.hours}:{dateTime.minutes}:{dateTime.seconds}
                </div>
            </div>
    );

}

export default Timer;