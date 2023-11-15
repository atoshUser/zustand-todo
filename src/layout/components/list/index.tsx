import { useEffect } from "react"
import { ListItem } from ".."
import { useStoreTodo } from "../../../data/stores/useTodoStore"
import styles from "./index.module.scss"
import { IListProps } from "./index.props"

const Index:React.FC<IListProps> = ({dataArray,checkbox}) => {
   const {tasks} =  useStoreTodo()

  return (
    <ul className={styles.dataList}>
      {dataArray.map((item) => {
        return <ListItem checkbox={checkbox} key={item._id} data={item} />
      })}
    </ul>
  )
}

export default Index
