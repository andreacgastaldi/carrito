// ...existing code...
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useEffect, useState } from "react";

export const ItemDetailContainer = () => {  
  console.log("ItemDetailContainer renderizado");
  const [detail, setDetail] = useState(null); // null en lugar de {}
  const { id } = useParams(); 

  useEffect(() => {
    if (!id) return;
    const url = `https://6912245f52a60f10c820c470.mockapi.io/products/${id}`;
    console.log("Fetching product:", url);

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("No se encontró el producto");
        }
        return res.json(); // aquí viene UN objeto
      })
      .then((data) => {
        console.log("Producto recibido:", data);
        setDetail(data); // asignar directamente el objeto
      })
      .catch((error) => {
        console.error("Error en fetch producto:", error);
        setDetail(null);
      });
  }, [id]);

  return (
    <main>
      <p>Probando render</p>
      {detail ? <ItemDetail detail={detail} /> : <p>Cargando...</p>}
    </main>
  );
};
// ...existing code...




// import { useParams } from "react-router-dom";
// import { ItemDetail } from "../ItemDetail/ItemDetail";
// import { useEffect, useState } from "react";

// export const ItemDetailContainer = () => {  
    
//     console.log("ItemDetailContainer renderizado");
   
//     const [detail, setDetail] = useState({});

//     const { id } = useParams(); 

//     useEffect(() => {
//         // fetch("/data/products.json")
//         console.log(`https://6912245f52a60f10c820c470.mockapi.io/products/${id}`);
//         fetch(`https://6912245f52a60f10c820c470.mockapi.io/products/${id}`)
//         .then((res) =>{
//             if(!res.ok){
//                 throw new Error("No se encontro el producto");
//             }
//             return res.json();
//         })
//         .then((data) => {
//             console.log(data); 
//             const found = data.find((p) => p.id === id);
//             if (found) {
//                 setDetail(found);
//             } else {
//                 throw new Error("No se encontro el producto");
//             }   
//         })
//         .catch((error) => {
//             console.error("There was a problem with the fetch operation:", error);
//         });
//     }, [id]);

//     return <main>
//         <p>Probando render </p>
//         {Object.keys(detail).length ?(
//             <ItemDetail detail={detail} />
//         ): (
//             <p>Cargando...</p>  
//         )}
//     </main>
//     ;
// }   
