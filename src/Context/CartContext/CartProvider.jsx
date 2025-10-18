
import { useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const exists = (id) => cart.some((p) => p.id === id);

    const addItem = (item) => {
        if (exists(item.id)) {
            alert(`El producto ${item.nombre} ya está en el carrito`);
            return;
        }
        setCart([...cart, item]);
        alert(`Agregando ${item.nombre} al carrito`);
    };

    const clearCart = () => setCart([]);

    const getTotalItems = () => cart.length;

    const values = { cart, addItem, clearCart, getTotalItems };

    return (
        <CartContext.Provider value={values}>
            {children}
        </CartContext.Provider>
    );
};
