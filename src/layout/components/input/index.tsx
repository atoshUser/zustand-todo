import React from 'react'
import { IInputProps } from './index.props'
import styles from "./index.module.scss"
const Index:React.FC<IInputProps> = ({...props}) => {

  return (
    <input className={styles.input} {...props} />
  )
}

export default Index
