import { useState } from 'react'
import styles from './style.module.css'

interface TasksProps{
  id: number,
  task: string
}

const Tasks = () =>{

  const [task,setTask] = useState('')
  const [tasks, setTasks] = useState<TasksProps[]>([])
  const [nextId, setNextId] = useState(1)


  const addTask = ()=>{
    if(task.trim() != ''){
      setTasks((prevTasks) => [
        { id: nextId, task: task }, ...prevTasks
      ])
      setNextId((prevId)=> prevId + 1)
      setTask('')
    }
  }

  return(
    <div className= {styles.taskContainer}>
      <div className={styles.inputBox}>
        <input className={styles.input} placeholder='Enter your Task' value={task} onChange={(e)=>setTask( e.target.value)} type="text" name="input" id="input" />
        <button className={styles.btnAdd} onClick={addTask} >Add Task</button>
      </div>
      {tasks.length != 0 && (
        <ul>
          {tasks.map((t) => (
            <div className={styles.taskBox} >
              <li key={t.id}>{t.task}</li>
              <div className={styles.buttonsTask}>
                <button className={styles.btnDelete} >Delete</button>
                <button className={styles.btnCheck} >Check</button>
              </div>
            </div>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Tasks