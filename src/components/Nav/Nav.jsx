import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext/UseCartContext"
import "./Nav.css";

export const Nav = () => {
    const {getTotalItems} = useCartContext()

    return <nav>
        <ul>
            <li>
                <Link to={"/"}>INICIO</Link>
            </li>
            <li>
                <Link to={"/nosotros/"}>NOSOTROS</Link>
            </li>
            <li>
                <Link to={"/productos/"}>PRODUCTOS</Link>
            </li>
            <li>
                <Link to={"/contacto/"}>CONTACTO</Link>
            </li>
            <li>
                <Link>CARRITO</Link>
                {getTotalItems() > 0 && (
                    <span className="in-cart">{getTotalItems()}</span>
                )}
            </li>
        </ul>
    </nav>
}