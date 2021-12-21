import { Link } from 'react-router-dom';
import { BsBag, BsHeart, BsPencil, BsSearch } from 'react-icons/bs';

import { useAuthContext } from '../../../contexts/AuthContext';
import { useCartContext } from '../../../contexts/CartContext';
import './ProductCard.css';
import { isInCart } from '../../../helpers';

const ProductCard = ({ product }) => {
    const { isAuthenticated, isAdmin } = useAuthContext();
    const { cartItems, addProduct } = useCartContext();

    let discount = Number(product.discount);
    let price = Number(product.price);
    let priceWithDiscount = price - price * (discount / 100);
    let productDetails = `/products/details/${product.id}`;
    let productEdit = `/products/edit/${product.id}`;

    const onClickCartHandler = () => {
        if(!isInCart(product, cartItems)){
            addProduct(product);
        }else{

        }
    }

    const onClickLikeHandler = (e) => {
        console.log('like-handler');
    }

    const adminActions = (
        <>
        <li><Link to={productDetails}><BsSearch className='action-icon' /></Link></li>  
        <li><Link to={productEdit}><BsPencil className='action-icon' /></Link></li>
        </>
    );

    const userActions = (
        <>
        <li><Link to={productDetails}><BsSearch className='action-icon' /></Link></li> 
        <li><BsBag className='action-icon product-action' onClick={onClickCartHandler} /></li> 
        {isAuthenticated
            ? <li><BsHeart className='action-icon product-action' onClick={onClickLikeHandler} /></li>
            : <li><Link to='/signin'><BsHeart className='action-icon' /></Link></li>
        }
        </>
    );

    return (
        <li className='product-item'>
            <div className='product-body'>
                <div className='product-image-container'>
                    <img src={product.imageUrl} alt={product.name} />
                </div>
                {discount !== 0 ? <span className='discount'>{discount}% off</span> : null}
                {product.status && <span className='status'>{product.status}</span>}
                <ul>
                    {isAdmin ? adminActions : userActions}
                </ul>
            </div>
            <div className='product-footer'>
                <div className='product-title'>{product.name}</div>
                {discount !== 0
                    ?<span className='product-old-price'>${price}</span>                                            
                    : null
                }
                <div className='product-price'>${priceWithDiscount}</div>
            </div>
        </li >
    );
}

export default ProductCard;