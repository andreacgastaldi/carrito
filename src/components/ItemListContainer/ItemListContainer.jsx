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
        <section className="item-list-container">   
            <h1>{titulo}</h1>   
            <ItemList lista={products} />
        </section>
          

    );
};
  
