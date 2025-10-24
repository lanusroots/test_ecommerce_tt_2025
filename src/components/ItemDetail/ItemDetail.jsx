import { Item } from "../Item/Item"
import "./ItemDetail.css";

export const ItemDetail = ({detail}) => {
    return <Item {...detail} />
}