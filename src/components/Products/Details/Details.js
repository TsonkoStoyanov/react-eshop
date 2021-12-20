import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom';
import { BsPencil, BsTrash } from "react-icons/bs";

import { useAuthContext } from '../../../contexts/AuthContext';
import * as productService from '../../../services/productService';
import './Details.css';

const Details = () => {

	const { productId } = useParams();
	const [product, setProduct] = useState({});
	const { isAdmin } = useAuthContext();
	const navigate = useNavigate();

	useEffect(() => {
		productService.getOne(productId)
			.then((product) => {
				setProduct(product.value);
			}).catch(err => {
				console.log(err);
			});
	}, [productId]);

	const onClickDeleteHandler = (e) => {
		console.log('delete handler');
		navigate('/');
	}

	const adminActions = (
		<div className="details-actions">
			<Link to={`/products/edit/${productId}`} className="btn btn-secondary"><BsPencil /></Link>
			<BsTrash className="btn btn-tertiary" onClick={onClickDeleteHandler} />
		</div>
	);

	return (
		<section className="product">
			<div className="product-photo">
				<div className="photo-container">
					{Number(product.discount) !== 0 ? <span className="discount">{product.discount}% off</span> : ""}
					{product.status && <span className="status">{product.status}</span>}
					<div className="photo-main">
						<img src={product.imageUrl} alt={product.name} />
					</div>
				</div>
			</div>
			<div className="product-info">
				<div className="title">
					<h1>{product.name}</h1>
				</div>
				<div className="price">
					{Number(product.discount) !== 0
						? <span className="product-old-price">{product.price}$</span>
						: ""}
					<span className="product-new-price">{product.price - product.price * (product.discount / 100)}$</span>
				</div>
				<div className="description">
					<h3>PRODUCT DESCRIPTION</h3>
					<p>{product.description}</p>
				</div>

				{isAdmin
					? adminActions
					: <button className="btn btn-primary">Add to cart</button>
				}
			</div>
		</section>
	)
}

export default Details
