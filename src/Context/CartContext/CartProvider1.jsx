import { useState } from "react";
import { CartContext } from "./CartContext";



export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const exists = (id) => {
        const exist = cart.some((p) => p.id === id);
        return exist;
    }
    const addItem = (item) => {
        if (exists(item.id)) {
            alert(`El producto ${item.nombre} ya está en el carrito`);
            return;
        }
        setCart([...cart, item]);
        alert(`Agregando ${item.nombre} al carrito`);
    }   

    const clearCart = () => {
        setCart([]);
    }

    const getTotalItems = () => {
        //return cart.reduce((total, item) => total + item.quantity, 0);
        if (cart.length) {
            return cart.length;
        }
    };



    const values = {cart, addItem, clearCart, getTotalItems};
    return (
        <CartContext.Provider value={{ values }}>
            {children}
        </CartContext.Provider>
    )
}
