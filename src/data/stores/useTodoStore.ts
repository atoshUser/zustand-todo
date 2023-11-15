import { IItemData } from './useTodoStore';
import { create } from "zustand";
import {v4 as uuidv4} from "uuid"
export interface IItemData {
 _id:string
title:string
createdAt:Date
isCompleted:boolean
}

interface ITodoStore {
  tasks:IItemData[]
  completedDataArray:IItemData[]
  createTask:(str:string) => void
  updateTask:(id:string,str:string) => void
  removeTask:(id:string) => void

  completedData:(completed:IItemData) => void
}


export const useStoreTodo = create<ITodoStore>()((set,get) => ({

    tasks:[],
  completedDataArray:[],
    createTask : (str:string) => {

      const data:IItemData = {
        _id:uuidv4(),
        createdAt:new Date(),
        title:str,
        isCompleted:false
     }

      const filterArray = get().tasks.filter((obj) => !obj.isCompleted && obj)
        set({

           tasks:[...filterArray,data]
        })
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
    completedData:(completed:IItemData) => {
        let item:IItemData
     const filterDataToTasks =  get().tasks.filter((obj:IItemData) =>{
           if (obj._id === completed._id) {
             item = {...obj,isCompleted:true}
           }else {
            return obj
           }
       })


      set((state) => ({
       completedDataArray:[...state.completedDataArray,item],
       tasks:filterDataToTasks
      }))
    },
}))
