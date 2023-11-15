import { IItemData } from "../../../data/stores/useTodoStore";



export interface IListItemProps {
  data:IItemData
  checkbox?: true | false
}
