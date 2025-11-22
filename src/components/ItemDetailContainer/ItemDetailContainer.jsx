
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useEffect, useState } from "react";
import { getProductById } from "../../services/products.js";

export const ItemDetailContainer = () => {  
    
    console.log("ItemDetailContainer renderizado");
   
    const [detail, setDetail] = useState({});

    const { id } = useParams(); 

    useEffect(() => {
        
        getProductById(id)
        .then((data) => setDetail(data))
        .catch((err) => {
            console.log(err);
        });
    }, [id]);

    return <main>
        <p>Probando render </p>
        {Object.keys(detail).length ?(
            <ItemDetail detail={detail} />
        ): (
            <p>Cargando...</p>  
        )}
    </main>
    ;
}   