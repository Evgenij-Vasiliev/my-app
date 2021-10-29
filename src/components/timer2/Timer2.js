import { useState, useEffect } from "react";
// import styles from './Timer2.module.css';

function Timer2() {
  const [seconds, setSeconds] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  useEffect(() => {
    let timerId;
    if (timerActive) {
      timerId = setInterval(() => {
        setSeconds(seconds + 1);
        console.log(seconds);
      }, 1000);
    } else if (timerId) {
      clearInterval(timerId);
    }

    return () => {
      clearInterval(timerId);
    };
  }, [timerActive]);

  function timerStart() {
    setTimerActive(true);
  }

  function timerStop() {
    setTimerActive(false);
  }

  function timerReset() {
    setSeconds(0);
  }

  return (
    <div>
      <span>{seconds}</span>
      <button onClick={timerStart}>Start</button>
      <button onClick={timerStop}>Stop</button>
      <button onClick={timerReset}>Reset</button>
    </div>
  );
}
export default Timer2;
