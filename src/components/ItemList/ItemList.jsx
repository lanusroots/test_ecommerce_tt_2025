import { Item } from "../Item/Item";
import "./ItemList.css";

export const ItemList = ({ list }) => {
  return (
    <>
      {list.length ? (
        list.map((prod) => (
          <Item key={prod.id} {...prod} />
        ))
      ) : (
        <p>No hay productos</p>
      )}
    </>
  );
};