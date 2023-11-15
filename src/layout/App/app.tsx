import React, { FormEvent } from 'react'
import styles from "./app.module.scss"
import { useStoreTodo } from '../../data/stores/useTodoStore'
import {useState,useCallback} from "react"
import { Input, List } from '../components'
import {useEffect} from "react"
import { FaPlus } from "react-icons/fa";
const App:React.FC = () => {


 const {createTask,tasks,completedDataArray} = useStoreTodo()
 const [name,setName] = useState<string>('')

 const sendData = ((e:FormEvent) => {
  e.preventDefault()
       if (name) {
          createTask(name)
           setName('')
         }
 })






  return (
    <div className={styles.wrapper}>
       <article className={styles.articleWrapper}>
       <h1 className={styles.title}>To Do App</h1>
        <form className={styles.form} action='submit'  onSubmit={(e) => sendData(e)}>
   <div className={styles.wrapperInput}>

   <Input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter name'/>
   <button type='submit' className={styles.btn}><FaPlus/></button>
   </div>

        </form>

       <section className={styles.articleWrapperText}>
          {!tasks.length ? (
            <p>no data available at this time</p>
          ) : (
            <List dataArray={tasks}/>
          )}
       </section>
       <section className={styles.completedTasks}>
           <h2>Completed Tasks</h2>
           {
             !completedDataArray.length && (
               <span style={{color:'red',textAlign:'center',marginTop:'15px'}}>You did not completed tasks yet!</span>
             )
           }
           <List dataArray={completedDataArray} checkbox={false}/>
       </section>
     </article>
    </div>
  )
}

export default App
