import { Item } from "../Item/Item"
import "./ItemDetail.css"
import { useCartContext } from "../../context/CartContext/useCartContext"
import  {Count} from "../Count/Count"

export const ItemDetail = ({detail}) => {
    const { addItem } = useCartContext()

    const handleAdd = (quantity) => {
    addItem({ ...detail, quantity })
    }
    return (
        <div className="item-detail-wrapper">
            <Item {...detail}>
                <Count onConfirm={handleAdd} /> 
            </Item>
        </div>
    )
}