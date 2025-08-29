import { useRef, useState, useEffect } from "react";
import styles from "./style.module.css";

const Timer = () => {
  const [time, setTime] = useState<number>(5 * 60);
  const [isActivity, setIsActivity] = useState(false);
  const intervalRef = useRef<number | null>(null);


  useEffect(() => {
    if (time <= 0) {
      stopTimer();
    }
  }, [time]);

  const startTimer = () => {
    if (intervalRef.current !== null || time === 0) return;

    setIsActivity(true);

    intervalRef.current = window.setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);
  };

  const stopTimer = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsActivity(false);
  };


  const resetTimer = (min: number) => {
    stopTimer();
    setTime(min * 60);
  };

  const setShortTimer = () => resetTimer(5);
  const setMediumTimer = () => resetTimer(10);
  const setLongTimer = () => resetTimer(25);

  // 4. Calcular minutos e segundos para exibição a partir do estado 'time'
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

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
        {/* Lógica de exibição permanece a mesma */}
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
        {/* O reset agora reseta para o valor inicial da última configuração */}
        <button className={styles.button} onClick={() => resetTimer(Math.floor(time / 60) || 5)}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;