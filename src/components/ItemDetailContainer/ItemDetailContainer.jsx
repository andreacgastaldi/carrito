import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useEffect, useState } from "react";

export const ItemDetailContainer = () => {  
    
    console.log("ItemDetailContainer renderizado");
   
    const [detail, setDetail] = useState({});

    const { id } = useParams(); 

    useEffect(() => {
        fetch("/data/products.json")
        .then((res) =>{
            if(!res.ok){
                throw new Error("No se encontro el producto");
            }
            return res.json();
        })
        .then((data) => {
            console.log(data); 
            const found = data.find((p) => p.id === id);
            if (found) {
                setDetail(found);
            } else {
                throw new Error("No se encontro el producto");
            }   
        })
        .catch((error) => {
            console.error("There was a problem with the fetch operation:", error);
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