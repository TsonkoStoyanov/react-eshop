import { Link } from 'react-router-dom';
import './CartTotal.css'

const CartTotal = ({ clearCart, itemsCount, total }) => {
    return (
        <aside className='cart-total'>
            <h2>Total</h2>
            <div className='total-info'>
                <p className='items-count'>Items in cart: <strong>{itemsCount}</strong></p>
                <p className='total'>Total sum to pay: <strong>{total}$</strong></p>
            </div>
            <div className='cart-buttons'>
                <Link className='btn btn-primary' to='/chekout'>Proced to chekout</Link>
                <button className='btn btn-secondary' onClick={() => clearCart()}>Clear cart</button>
            </div>
        </aside>
    )
}
export default CartTotal;
