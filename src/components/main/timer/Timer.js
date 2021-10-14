/* eslint-disable no-unused-vars */
import { DateTime } from 'luxon';
import React, { useEffect, useState } from 'react';
// import { padZero } from '../../../helper/date';
import styles from  './Timer.module.css';

// function currenDate() {
//     const date = new Date();
//         return ({
//             hours: padZero(date.getHours()),
//             minutes: padZero(date.getMinutes()),       
//             seconds: padZero(date.getSeconds())
//         });
// }

function newDate() {
    return DateTime.now().toLocaleString(DateTime.TIME_24_WITH_SECONDS);
}


function Timer() {
    // const[dateTime, setDateTime] = useState(currenDate());
    const [newDateString, setNewDateString] = useState(newDate());
    
    useEffect(() => {
        setTimeout(() => {
            setNewDateString(newDate());
        }, 1000)
    }, [newDateString]);

    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         setDateTime(currenDate());
    //     }, 1000);
       
    //     return () => clearInterval(timer);
    // }, []);
    return (<div className={styles.clock}>
                <div>
                {newDateString}
                    {/* {dateTime.hours}:{dateTime.minutes}:{dateTime.seconds} */}
                </div>
            </div>
    );

}

export default Timer;