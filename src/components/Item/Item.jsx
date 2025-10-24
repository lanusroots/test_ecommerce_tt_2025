import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/UseCartContext";
import "./Item.css";

export const Item = ({id, name, price, description, imageUrl}) => {
    const { addItem } = useCartContext();
    
    return <article className="product-item">
        <Link to={`/detail/${id}`}>
            <img src={imageUrl} alt={description} />
        </Link>
        <Link to={`/detail/${id}`}>
            <h2 className="product-title">{name}</h2>
        </Link>
        <p>Precio: ${price}</p>
        <p>Descripcion {description}</p>
        <button onClick={() => {
            addItem({id, name, price, description, imageUrl});
        }}>
            Agregar al carrito
        </button>
    </article>
}