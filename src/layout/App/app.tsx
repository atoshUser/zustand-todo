import React, { FormEvent } from 'react'
import styles from "./app.module.scss"
import { useStoreTodo } from '../../data/stores/useTodoStore'
import {useState,useCallback} from "react"
import { Input } from '../components'
import { FaPlus } from "react-icons/fa";
const App:React.FC = () => {


 const {createTask,tasks} = useStoreTodo()
 const [name,setName] = useState<string>('')


 const sendData =  useCallback  ((e:FormEvent) => {
     e.preventDefault()
     createTask(name)
     setName('')
     console.log(tasks);


 },
    [name],
  )




  return (
    <div className={styles.wrapper}>
       <article className={styles.articleWrapper}>
       <h1 className={styles.title}>To Do App</h1>
        <form className={styles.form} action='submit' onSubmit={(event) => sendData(event)}>
   <div className={styles.wrapperInput}>

   <Input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter name'/>
   <button className={styles.btn}><FaPlus/></button>
   </div>

        </form>

       <section className={styles.articleWrapperText}></section>
     </article>
    </div>
  )
}

export default App
