
import { useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    
    const exists = (id) => {
        const exist = cart.some((p) => p.id === id);
        return exist;
    };  
/*-----------------------------------------------*/
/*      Agregar map y spread                     */
/*-----------------------------------------------*/
    const addItem = (item) => {
        if (exists(item.id)) {
            //map, cuido mutacion a nivel array
            const updatedCart = cart.map((prod) => {
                if (prod.id === item.id) {
                    //cuido mutacion anivel objeto
                    return { ...prod, quantity: prod.quantity + item.quantity };
                } else {
                    return prod;
                }
            });
            setCart(updatedCart);
            alert(`Actualizando cantidad de ${item.nombre} en el carrito`);
        } else {
            setCart([...cart, item]);
           
            alert(`Agregando ${item.nombre} al carrito`);
        }
    };

/*-----------------------------------------------*/
/*. Eliminar producto con filter                 */
/*-----------------------------------------------*/
/*const deleteItem = (id) => {
    const filtered =cart.filter = ((p) => p.id != id)
    setCart(filtered);
    alert(`Eliminando producto del carrito`);
}
*/

const deleteItem = (id) => {
    const filtered = cart.filter((p) => p.id !== id);
    setCart(filtered);
    alert(`Eliminando producto del carrito`);
};
/*-----------------------------------------------*/
/*.          Vaciar el carrito.                  */
/*-----------------------------------------------*/

    const clearCart = () => {
        setCart([]);
    };

/*-----------------------------------------------*/
/*. Calcular total de items en el carrito.       */
/*-----------------------------------------------*/

    const getTotalItems = () => {
        const getTotalItems = cart.reduce((acc, p) => acc + p.quantity, 0);
        return getTotalItems;       
    }

/*-----------------------------------------------*/
/*. Calcular total                               */
/*-----------------------------------------------*/
/*const total=() =>{
    const total = cart.reduce((acc, p) => acc + p.price * p.quantity, 0);
    return Math.round(total * 100) / 100;  

};
*/
const total = () => {
  const total= cart.reduce((acc, prod) => acc + (Number(prod.price) * Number(prod.quantity)), 0);

    return Math.round(total * 100) / 100;

}

const checkout = () =>{
    const ok = confirm ("Desea finalizar la compra?");
    if (ok){
        alert ("Gracias por su compra");
        clearCart();
    }
}


    const values = { cart, addItem, clearCart, getTotalItems, deleteItem, total, checkout };

    return (
        <CartContext.Provider value={values}>
            {children}
        </CartContext.Provider>
    );
};
