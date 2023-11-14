import React, { FormEvent, ReactEventHandler } from 'react'
import styles from "./app.module.scss"
import { useStoreTodo } from '../../data/stores/useTodoStore'
import {useState} from "react"
const App:React.FC = () => {


 const {createTask,tasks} = useStoreTodo()
 const [name,setName] = useState<string>('')
   const sendData = (e:FormEvent) => {
    e.preventDefault()
        createTask(name)
        setName('')
   }

console.log(tasks);

  return (
    <div className={styles.wrapper}>
       <article className={styles.articleWrapper}>
       <h1 className={styles.title}>To Do App</h1>
        <form action='submit' onSubmit={(event) => sendData(event)}>
           <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter name'/>
           <button type='submit'>Click</button>
        </form>

       <section></section>
       <section></section>
     </article>
    </div>
  )
}

export default App
