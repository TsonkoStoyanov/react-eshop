
import './CartItem.css';

const CartItem = (props) => {
    
    const {id, name, imageUrl, price, quantity, increaseProductQty, decreaseProductQty, removeProduct} = props;    
    
    return (
        <div className='cart-item'>
            <div className='cart-product-image'>
                <img src={imageUrl} alt={name} />
            </div>
            <div className='product-name'>
                <h4>{name}</h4>            
            </div>
            <div className='product-price'>{price}$</div>

            <div className='product-actions'>
                <span className='increase-quantity' onClick={() => increaseProductQty(id)}>+</span>
                <span className='product-quantity'>{quantity}</span>
                <span className='decrease-quantity'  onClick={() => decreaseProductQty(id)}>-</span>
                <span className='remove-product' onClick={()=> removeProduct(id)}>X</span>
            </div>
        </div>        
    )
}

export default CartItem;
