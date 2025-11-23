import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext/useCartContext";
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
                <Link to={"/carrito/"}>CARRITO
                {getTotalItems() > 0 && (
                    <span className="in-cart">{getTotalItems()}</span>
                )}
                </Link>
            </li>
        </ul>
    </nav>
}