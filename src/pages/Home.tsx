import Tasks from "../components/Task/Tasks"
import Timer from "../components/Timer/Timer"

import styles from './styles.module.css'

const Home = () =>{
  return(
    <div className={styles.homeStyle}>
     <Timer/>
     <Tasks/>
    </div>


  )
}

export default Home