import { Item } from '../Item/Item';
import { useCartContext } from '../../Context/CartContext/useCartContext';
//import './ItemDetail.css';

export const ItemDetail = ({detail}) => {
    const {addItem} = useCartContext();
    return (
        <Item {...detail}>
            <button onClick={() => addItem(detail)}>Agregar al carrito </button>
        </Item>   
    );
};
