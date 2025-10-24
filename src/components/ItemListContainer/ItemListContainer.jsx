import { useEffect, useState } from "react"
import { ItemList } from "../ItemList/ItemList";
import "./ItemListContainer.css";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  // Cargar productos
  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => {
        if (!res.ok) {
            throw new Error("Hubo un problema al buscar productos")
        }
        return res.json()
      })
      .then((data) => setProducts(data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <section>
    <h1>Bienvenidos!</h1>
    <div className="product-grid">
      <ItemList list={products}/>
    </div>
  </section>
  )
}
