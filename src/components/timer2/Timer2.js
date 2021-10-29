import { useState, useEffect } from "react";
// import styles from './Timer2.module.css';

function Timer2() {
    console.log("Timer2 init")
    const [seconds, setSeconds] = useState(0);
    const [timerActive, setTimerActive] = useState(false);
    useEffect(() => {
        console.log("effect start");
    let timerId;
    if (timerActive) {
        timerId = setInterval(() => {
        setSeconds(seconds + 1); 
        console.log("setSeconds")
        }, 1000);
        } else if (timerId) {
        clearInterval(timerId);
        }

        return () => {
        clearInterval(timerId);
        console.log("end")
        };
    }, [timerActive, seconds]);

    function timerStart() {
        setTimerActive(true);
    }

    function timerStop() {
        setTimerActive(false);
    }

    function timerReset() {
        timerStop();
        setSeconds(0);
    }

    let minutes = `${Math.floor(seconds / 60)}`.padStart(2, '0');
    let secondsTime = seconds - minutes * 60;
    secondsTime = secondsTime < 10 ? `0${secondsTime}`: secondsTime;

    return (
        <div>
        <span>{minutes}:{secondsTime}</span>
        <button onClick={timerStart}>Start</button>
        <button onClick={timerStop}>Stop</button>
        <button onClick={timerReset}>Reset</button>
        </div>
    );
}
export default Timer2;
