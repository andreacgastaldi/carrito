import { Link } from 'react-router-dom';    
import './Item.css';

export const Item = ({id, nombre, precio, descripcion, imagen,categoria, children}) => {
     console.log("Item render -> id:", id);
    return (
     
        <article className="product-item">
            <h2 className="product-title">{nombre}</h2>
            <p>Precio: ${precio}</p>
            <p>Descripcion: {descripcion}</p>
            <p>Categoria: {categoria}</p>
            <Link to={`/detail/${id}`}>
                <img src={imagen} alt={nombre} />
                <h3>{nombre}</h3>
            </Link>
            {/* <img src={imagen} alt={nombre} /> */}
            {children}
        </article>
     
    );
};
