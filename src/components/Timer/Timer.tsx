import styles from './style.module.css'

const Timer = () =>{
  return(
    <div className={styles.allContainer}>
      <div className={styles.timeBox} >
       <div className={styles.boxButtonTop}>
        <button className={styles.button}>Short Time</button>
        <button className={styles.button}>Medium Time</button>
        <button className={styles.button}>Long Time</button>
       </div>
      <p className={styles.textTime} >30:20:50</p>
      <div className={styles.boxButtonBottom}>
       <button className={styles.button} >Start</button>
       <button className={styles.button}>Stop</button>
       <button className={styles.button}>Reset</button>
      </div>
     </div>
    </div>
  )
}

export default Timer