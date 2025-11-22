import { useEffect,useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getProducts } from "../../services/products.js";
import "./ItemListContainer.css";

export const ItemListContainer = ({titulo}) => {
    const [products, setProducts] = useState([]);
    const {categoria} = useParams();
    
    useEffect(() => {
        getProducts(categoria)
        .then((data) => setProducts(data))
        .catch((err) => {
            console.log(err);
        });
    }, [categoria]);


    // llamada a una api
    return(
        // <section className="item-list-container">   
        //     <h1>{titulo}</h1>   
        //     <ItemList lista={products} />
        // </section>
          <section className="item-list-container">
    <h2>{titulo}</h2>
    <div className="products-grid">
      {products.map(prod => (
        <div key={prod.id} className="product-card">
          <img src={prod.imagen} alt={prod.nombre} />
          <div className="body">
            <h3>{prod.nombre}</h3>
            <p>{prod.descripcion}</p>
            <div className="price">${prod.price}</div>
          </div>
        </div>
      ))}
    </div>
  </section>

    );
};
  
