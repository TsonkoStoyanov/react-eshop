import { Link } from 'react-router-dom';
import { BsBag } from 'react-icons/bs';
import { useCartContext } from '../../../../contexts/CartContext';
import './CartIcon.css';

const CartIcon = () => {
    const { itemsCount  } = useCartContext();        
    
    return (
        <li className='nav-item bag-icon'><Link to='/cart'><BsBag />{itemsCount > 0
            ? <span className='bag-items-count'>{itemsCount}</span>
            : null
        }</Link></li>
    )
}

export default CartIcon;
