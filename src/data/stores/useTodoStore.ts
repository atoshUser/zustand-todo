import { create } from "zustand";
import {v4 as uuidv4} from "uuid"
interface IItemData {
 _id:string
title:string
createdAt:Date
}

interface ITodoStore {
  tasks:IItemData[]
  createTask:(str:string) => void
  updateTask:(id:string,str:string) => void
  removeTask:(id:string) => void


}


export const useStoreTodo = create<ITodoStore>()((set) => ({

    tasks:[],

    createTask : (str:string) => {
      const data:IItemData = {
        _id:uuidv4(),
        createdAt:new Date(),
        title:str
     }
        set((state) => ({

           tasks:[data,...state.tasks]
        }))
    },
    removeTask : (id:string) =>{
        set((state) => ({
          tasks:state.tasks.filter((c) => c._id !== id)
        }))
    },
    updateTask(id:string, str:string) {
       set((state) => ({
        tasks:state.tasks.map((c) => c._id === id ? {...c,title:str} : c)
       }))
    },
}))
