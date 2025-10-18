
import './Item.css';

export const Item = ({nombre, precio, descripcion, imagen,categoria, children}) => {

    return (
     
        <article className="product-item">
            <h2 className="product-title">{nombre}</h2>
            <p>Precio: ${precio}</p>
            <p>Descripcion: {descripcion}</p>
            <p>Categoria: {categoria}</p>
            <img src={imagen} alt={nombre} />
            {children}
        </article>
     
    );
};
