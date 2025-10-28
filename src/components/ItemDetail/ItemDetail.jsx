import { Item } from "../Item/Item"
import "./ItemDetail.css";

export const ItemDetail = ({detail}) => {
    return (
        <div className="item-detail-wrapper">
            <Item {...detail} />
        </div>
    )
}