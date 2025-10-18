import React from 'react';  
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext/useCartContext";
import './Nav.css';

export const Nav = () => {     
  const {getTotalItems} = useCartContext();
  return (
    <nav>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>     
        <li>
          <Link to={"/categoria/salado"}>Salado</Link>
        </li>
        <li>
          <Link to={"/categoria/dulce"}>Dulce</Link>
        </li>
        <li>
          <Link>Carrito</Link>
        
          {getTotalItems() > 0 && <span className="in-cart">{getTotalItems()}</span>
          }

        </li> 

       
      </ul>
    </nav>
  );
};
