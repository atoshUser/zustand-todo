import React from 'react'
import { IListItemProps } from './index.props'
import styles from "./index.module.scss"
import { Input } from '..'
import moment from 'moment'
import {SyntheticEvent} from "react"
import { useStoreTodo } from '../../../data/stores/useTodoStore'
const Index:React.FC<IListItemProps> = ({data,checkbox = true}) => {

    const {completedData} = useStoreTodo()
   const handleEventCheckbox = (event:SyntheticEvent) => {
       if (event.target.checked) {
          completedData(data)
       }
   }


  return (
    <li className={styles.item}>
     {checkbox && (
          <Input type='checkbox' className={styles.inp} onClick={(e) => handleEventCheckbox(e) }/>
     )}
        <div>
        <span>created:{moment(data.createdAt).format('DD MMM,YYYY')}</span>
     {data.title}
        </div>
    </li>
  )
}

export default Index
