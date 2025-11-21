import {Nav} from "../Nav/Nav"  
import { Link } from "react-router-dom";
import "./Header.css"

export const Header = () => {
  return (
    <header>
      <Link to= {"/"}><h2>Mi Tienda</h2></Link>
      <Nav/>
    </header>
  );
};
//Agregar link al home
