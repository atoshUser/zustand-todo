import { IItemData } from "../../../data/stores/useTodoStore";

export interface IListProps {
  dataArray:IItemData[]
  checkbox?: false | true
}
