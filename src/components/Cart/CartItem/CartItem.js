import { BsPlusLg, BsDashLg, BsTrash } from 'react-icons/bs';
import './CartItem.css';

const CartItem = (props) => {

    const { id, name, imageUrl, price, quantity, discount, increaseProductQty, decreaseProductQty, removeProduct } = props;

    const newPrice = price - price * (discount / 100);
    
    return (
        <div className='cart-item'>
            <div className='product-image-name'>
                <div className='cart-product-image'>
                    <img src={imageUrl} alt={name} />
                </div>
                <h3>{name}</h3>
            </div>
            <div className='product-prices'>

                {discount > 0
                    ? <span className='product-old-price'>{price}$</span>
                    : null
                }

                <span className='product-price'>{newPrice}$</span>
            </div>

            <div className='product-actions'>
                <BsDashLg className='btn btn-secondary' onClick={() => decreaseProductQty(id)}>-</BsDashLg>
                <span className='product-quantity'>{quantity}</span>
                <BsPlusLg className='btn btn-secondary' onClick={() => increaseProductQty(id)} />
                <BsTrash className='btn btn-tertiary' onClick={() => removeProduct(id)} />
            </div>
        </div>
    )
}

export default CartItem;
