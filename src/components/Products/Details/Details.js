import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom';
import { BsPencil, BsTrash } from 'react-icons/bs';

import ConfirmModal from '../../Common/ConfirmModal/ConfirmModal';
import { useAuthContext } from '../../../contexts/AuthContext';
import { useCartContext } from '../../../contexts/CartContext';
import { isInCart } from '../../../helpers';
import * as productService from '../../../services/productService';
import './Details.css';

const Details = () => {

	const { productId } = useParams();
	const [product, setProduct] = useState({});
	const [showConfirmModal, setShowConfirmModal] = useState(false);
	const { isAdmin, user } = useAuthContext();
	const { cartItems, addProduct } = useCartContext();
	const navigate = useNavigate();

	useEffect(() => {
		productService.getOne(productId)
			.then((product) => {
				setProduct(product.value);
			}).catch(err => {
				console.log(err);
			});
	}, [productId]);

	let isProductInCart = isInCart(productId, cartItems);
	let discount = Number(product.discount);
	let price = Number(product.price);
	let priceWithDiscount = price - price * (discount / 100);

	const onClickDeleteHandler = (e) => {
		setShowConfirmModal(true);
	}

	const deleteHandler = () => {

		productService.del(productId, user.token)
			.then(() => {
				navigate('/');
			})
			.finally(() => {
				setShowConfirmModal(false);
			});
	};

	const adminActions = (
		<div className='details-actions'>
			<Link to={`/products/edit/${productId}`} className='btn btn-secondary'><BsPencil /></Link>
			<BsTrash className='btn btn-tertiary' onClick={onClickDeleteHandler} />
		</div>
	);

	const userActions = (
		isProductInCart
			? <Link className='btn btn-secondary' to='/cart'>Go to cart</Link>
			: <button className='btn btn-primary' disabled={isProductInCart} onClick={() => addProduct(product)}>Add to cart</button>
	);

	return (
		<>		<section className='product'>
			<div className='product-photo'>
				<div className='photo-container'>
					{Number(product.discount) !== 0 ? <span className='discount'>{product.discount}% off</span> : ''}
					{product.status && <span className='status'>{product.status}</span>}
					<div className='photo-main'>
						<img src={product.imageUrl} alt={product.name} />
					</div>
				</div>
			</div>
			<div className='product-info'>
				<div className='title'>
					<h1>{product.name}</h1>
				</div>
				<div className='price'>
					{Number(product.discount) !== 0
						? <span className='product-old-price'>{price}$</span>
						: ''}
					<span className='product-new-price'>{priceWithDiscount}$</span>
				</div>
				<div className='description'>
					<h3>PRODUCT DESCRIPTION</h3>
					<p>{product.description}</p>
				</div>

				{isAdmin
					? adminActions
					: userActions
				}
			</div>
		</section>
			<ConfirmModal show={showConfirmModal} onClose={() => setShowConfirmModal(false)} onSave={deleteHandler} />
		</>
	)
}

export default Details
