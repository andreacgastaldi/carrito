import { Link } from 'react-router-dom';    
import './Item.css';

export const Item = ({id, nombre, precio, descripcion, imagen,categoria, children}) => {
    const safeId = String(id ?? '').trim().replace(/[^\w-]/g, ''); 
    console.log("Item render -> id:", id);
    console.log("Item render -> id:", id, "safeId:", safeId, "URL generada:", `/detail/${safeId}`);
    return (
     
        <article className="product-card">
            <h2 className="product-title">{nombre}</h2>
            <p>Precio: ${precio}</p>
            <p>Descripcion: {descripcion}</p>
            <p>Categoria: {categoria}</p>
            <Link to={`/detail/${safeId}`}>
                <img src={imagen} alt={nombre} />
                <h3>{nombre}</h3>
            </Link>
            {/* <img src={imagen} alt={nombre} /> */}
            {children}
        </article>
     
    );
};
