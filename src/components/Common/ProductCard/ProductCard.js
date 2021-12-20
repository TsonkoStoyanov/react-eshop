import { Link } from 'react-router-dom';
import { BsCartPlus, BsHeart, BsPencil, BsSearch } from "react-icons/bs";

import { useAuthContext } from '../../../contexts/AuthContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    const { isAuthenticated, isAdmin } = useAuthContext();    
    let discount = Number(product.discount);
    let price = Number(product.price);
    let productDetails = `/products/details/${product.id}`; 
    let productEdit = `/products/edit/${product.id}`; 

    const onClickCartHandler = (e) => {
        console.log('cart-handler');
    }

    const onClickLikeHandler = (e) => {
        console.log('like-handler');
    }

    return (
        <li className="product-item">                    
                    <div className="product-body">
                        <div className="product-image-container">
                            <img src={product.imageUrl} alt={product.name}/>
                        </div>
                        {discount !== 0 ? <span className="discount">{discount}% off</span> : ""}
                        {product.status && <span className="status">{product.status}</span>}
                        <ul>
                            <li><Link to={productDetails}><BsSearch className="action-icon"/></Link></li>   
                            <li><BsCartPlus className="action-icon product-action" onClick={onClickCartHandler}/></li>
                            {
                            isAuthenticated 
                            ? <li><BsHeart className="action-icon product-action" onClick={onClickLikeHandler}/></li> 
                            : <li><Link to="/signin"><BsHeart className="action-icon"/></Link></li>
                            }
                            {isAdmin && <li><Link to={productEdit}><BsPencil className="action-icon"/></Link></li>}
                        </ul>
                    </div>
                    <div className="product-footer">
                        <div className="product-title">{product.name}</div>
                        {discount !== 0
                            ? <>
                                <span className="product-old-price">${price}</span>
                                <div className="product-price">${price - price * (discount / 100)}</div>
                            </>
                            : <div className="product-price">${product.price}</div>
                        }                        
                    </div>                            
        </li >
    );
}

export default ProductCard;