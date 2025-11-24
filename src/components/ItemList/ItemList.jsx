import { Link } from "react-router-dom";
import { Item } from "../Item/Item";    
import "./ItemList.css"; 

export const ItemList = ({ lista }) => {
  console.log("ItemList recibió lista:", lista);
  return (
    <section className="item-list">
      {lista.map((item) => {
        console.log("ItemList renderizando item con id:", item.id);
        return <Item key={item.id} {...item} />;
      })}
    </section>
  );
};
                    