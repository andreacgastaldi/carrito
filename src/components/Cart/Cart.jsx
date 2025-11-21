import { useCartContext } from "../../Context/CartContext/useCartContext";
import "./Cart.css";
import { Link } from "react-router-dom";    
import { Item } from "../Item/Item";

export const Cart = ()=>{
    const {cart, clearCart, deleteItem, total, checkout} = useCartContext();
    
 
    return (
    <section className= "item-list-container">
        <h2>Carrito de compras</h2>

       {cart.length ? (
        cart.map((prod)=> (
        <Item key={prod.id} {...prod} >
            <span>Cantidad: {prod.quantity}</span> 
            {/* se podria agregar un subtotal por producto */}
            <button className="btn" onClick={() => deleteItem(prod.id)}>
                Eliminar producto
            </button>
        </Item>
       )) 
       ) : ( <p>El carrito está vacío</p> )
        }
       {cart.length ? (
        <div className="btn-container">
            <div className="total-pagar">
                <p>Total a pagar: ${total()}</p>
            </div>
            <button className="btn" onClick={checkout}>
                Finalizar compra
            </button>
            <button className="btn" onClick={clearCart}>
                Vaciar carrito
            </button>
        </div> 
       ) : (
        <Link className="btn" to="/">
            Volver al catálogo
        </Link>
       )}
       
        </section>
    );
};