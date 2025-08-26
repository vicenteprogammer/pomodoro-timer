import styles from './style.module.css'

const Tasks = () =>{
  return(
    <div className= {styles.taskContainer}>
      <div className={styles.inputBox}>
        <input className={styles.input} placeholder='Enter your Task' type="text" name="input" id="input" />
        <button className={styles.btnAdd} >Add Task</button>
      </div>
    </div>
  )
}

export default Tasks