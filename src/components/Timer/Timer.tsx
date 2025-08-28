import { useRef, useState } from "react";
import styles from "./style.module.css";

const Timer = () => {
  const [seconds, setSeconds] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(5);
  const [isActivity, setIsActivity] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const startTimer = () => {
    if (intervalRef.current !== null) return; // já tem timer rodando

    setIsActivity(true);

    intervalRef.current = window.setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds > 0) {
          return prevSeconds - 1; // só decrementa segundos
        } else {
          // segundos chegaram em 0
          setMinutes((prevMinutes) => {
            if (prevMinutes === 0) {
              // acabou o timer
              clearInterval(intervalRef.current!);
              intervalRef.current = null;
              setIsActivity(false);
              return 0;
            }
            return prevMinutes - 1; // só decrementa minutos aqui
          });
          return 59; // reinicia segundos
        }
      });
    }, 1000);
  };

  const stopTimer = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsActivity(false);
  };

  const resetTimer = (min: number = 5) => {
    stopTimer();
    setMinutes(min);
    setSeconds(0);
  };

  const setShortTimer = () => resetTimer(5);
  const setMediumTimer = () => resetTimer(10);
  const setLongTimer = () => resetTimer(25);

  return (
    <div className={styles.timeBox}>
      <div className={styles.boxButtonTop}>
        <button className={styles.button} onClick={setShortTimer}>
          Short Time
        </button>
        <button className={styles.button} onClick={setMediumTimer}>
          Medium Time
        </button>
        <button className={styles.button} onClick={setLongTimer}>
          Long Time
        </button>
      </div>

      <p className={styles.textTime}>
        {minutes < 10 ? `0${minutes}` : minutes}:
        {seconds < 10 ? `0${seconds}` : seconds}
      </p>

      <div className={styles.boxButtonBottom}>
        <button
          className={styles.button}
          onClick={startTimer}
          disabled={isActivity}
        >
          Start
        </button>
        <button className={styles.button} onClick={stopTimer}>
          Stop
        </button>
        <button className={styles.button} onClick={() => resetTimer(minutes)}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
