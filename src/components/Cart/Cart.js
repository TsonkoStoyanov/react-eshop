import { useCartContext } from '../../contexts/CartContext';

import './Cart.css';
import CartItem from './CartItem';
import CartTotal from './CartTotal';

const Cart = () => {

    const { cartItems, removeProduct, increaseProductQty, decreaseProductQty, total, clearCart, itemsCount } = useCartContext();

    const emptycart = (<div className='empty-cart'> No products in cart</div>);

    const cartProductList = (
        <div className='cart-products-list'>
            {cartItems.map(item => <CartItem {...item} key={item.id} increaseProductQty={increaseProductQty} decreaseProductQty={decreaseProductQty} removeProduct={removeProduct} />)}
        </div>
    );

    return (
        <section className='cart'>
            <div className='cart-products-container'>
                <h1>Cart</h1>
                {
                    cartItems.length === 0
                        ? emptycart
                        : cartProductList
                }
            </div>
           { itemsCount > 0  
           ? <CartTotal clearCart={clearCart} itemsCount={itemsCount} total={total} />
           : null }
        </section>
    )
}

export default Cart;
