import React, { useEffect } from 'react'
import { IListItemProps } from './index.props'
import styles from "./index.module.scss"
import { Input } from '..'
import moment from 'moment'
import {SyntheticEvent} from "react"
import { useStoreTodo } from '../../../data/stores/useTodoStore'
import { useState } from 'react'
import { CgArrowsExchange } from "react-icons/cg";
import { FaCheck } from "react-icons/fa6";
const Index:React.FC<IListItemProps> = ({data,checkbox = true}) => {
    const [edit,setEditChange] = useState<boolean>(false)
    const [editTitle,setEditTitle] = useState<string>(data.title)
    const {completedData,updateTask} = useStoreTodo()
   const handleEventCheckbox = (event:SyntheticEvent) => {
       if (event.target.checked) {
          completedData(data)
       }
   }



   const handleEdit = () => {
      if (data.title !== editTitle) {
        updateTask(data._id,editTitle)
        setEditChange(false)
      }
   }


  return (
    <li className={styles.item}>

      {!edit ?
       (
        <div className={styles.wrapperItemSection}>
        {checkbox && (
             <Input type='checkbox' className={styles.inp} onClick={(e) => handleEventCheckbox(e) }/>
        )}
           <div>
           <span>created:{moment(data.createdAt).format('DD MMM,YYYY')}</span>
           <div className={styles.wrapperTextChange}>
       {checkbox &&   <CgArrowsExchange onClick={() => setEditChange(true)} className={styles.changeIcon}/>}
        {data.title}
           </div>
           </div>
        </div>
       ) :
       (
        <div className={styles.changeWrapper}>
        <Input type='text' value={editTitle} onChange={(e) => setEditTitle(e.target.value)}  placeholder='change'/>
        <button onClick={handleEdit}  className={styles.faCheck}>
          <FaCheck className={styles.checkIcon}/>
        </button>
         </div>
       )
        }






    </li>
  )
}

export default Index
