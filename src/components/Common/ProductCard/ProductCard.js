import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    return (
        <Link to={`/products/details/${product.Id}`}>
            <li className="product-card">
                <h3>Name: {product.name}</h3>
                <p className="product-img"><img src={product.imageUrl} alt={product.name}/></p>
                <p className="product-price">${product.price}</p>                
            </li>
        </Link>
    );
}

export default ProductCard;