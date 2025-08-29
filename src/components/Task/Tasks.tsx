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
    console.log(tasks)
  }

  const deleteTask = (id: number) =>{
    alert('Task deleted')
    setTasks(tasks.filter((t)=> t.id !== id))
  }

  const checkTask = (id: number) =>{
    alert('Task Completed')
    setTasks(tasks.filter((t)=> t.id !== id))
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
                <button className={styles.btnDelete} onClick={() => deleteTask(t.id)} >Delete</button>
                <button className={styles.btnCheck} onClick={()=> checkTask(t.id)}>Check</button>
              </div>
            </div>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Tasks