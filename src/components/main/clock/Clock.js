/* eslint-disable no-undef */
import React, { useState } from "react";
import Clock1 from "./clock1/Clock1";
import Clock2 from "./clock2/Clock2";
import Timer from "./timer/Timer";
import styles from "./Clock.module.css";

function Clock() {
  let clock;
  const [changeOfClock, setChangeOfClock] = useState(true);
  const [isTimerVisible, setIsTimerVisible] = useState(false);
  if (changeOfClock) {
    clock = (
      <>
        <div>
          <Clock1 />
        </div>
      </>
    );
  } else {
    clock = (
      <>
        <div>
          <Clock2 />
        </div>
      </>
    );
  }

  return (
    <div>
      {clock}
      <button
        className={styles.changeOfClock}
        onClick={() => setChangeOfClock(!changeOfClock)}
      >
        Clock
      </button>
      <div>{isTimerVisible && <Timer />}</div>
      <button
        className={styles.changeOfTimer}
        onClick={() => setIsTimerVisible(!isTimerVisible)}
      >
        Start
      </button>
	  <button
        className={styles.changeOfTimer}
        onClick={() => setIsTimerVisible(!isTimerVisible)}
      >
        Stop
      </button>
	  <button
        className={styles.changeOfTimer}
        onClick={() => setIsTimerVisible(!isTimerVisible)}
      >
        Reset
      </button>
    </div>
  );
}
export default Clock;
