import { Item } from '../Item/Item';
import { useCartContext } from '../../Context/CartContext/useCartContext';
import { Count } from '../Count/Count';

//import './ItemDetail.css';

export const ItemDetail = ({detail}) => {
    const {addItem} = useCartContext();
    const handleAdd = (quantity) => {
        addItem({...detail, quantity});
    }
    return (
        <Item {...detail}>
            <Count btnText={"Agregar al carrito"} onConfirm={handleAdd} />  
            {/* <button onClick={() => addItem(detail)}>Agregar al carrito </button> */}
        </Item>   
    );
};
