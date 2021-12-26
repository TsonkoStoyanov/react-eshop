import { useState, useEffect } from 'react'

import { useNavigate, useParams } from 'react-router-dom';
import { debounce } from 'lodash';

import { useNotificationContext, types } from '../../../contexts/NotificationContext';

import useForm from '../../../hooks/useForm';

import './EditProductForm.css';

import * as productService from '../../../services/productService';
import * as constants from '../../../constants/constants';

const CreateProductForm = () => {

    const { productId } = useParams();
    const [product, setProduct] = useState({});    
    const navigate = useNavigate();    
    const { showNotification } = useNotificationContext();

    useEffect(() => {
		productService.getOne(productId)
			.then((product) => {
				setProduct(product.value);
			}).catch(err => {
				console.log(err);
			});
	}, [productId]);

    const editProductSubmitHandler = () => {
       
        const updatedProduct = {
            name: values.name ? values.name : product.name,
            description: values.description ? values.description : product.description,
            imageUrl: values.imageUrl ? values.imageUrl : product.imageUrl,
            price: values.price ? values.price : product.price,
            status: values.status ? values.status : product.status,
            discount: values.discount ? values.discount : product.discount,
        }

        productService.update(productId, updatedProduct)
        .then((result) => {            
            showNotification(constants.PRODUCT_UPDATED, types.success);
            navigate('/');
        })
        .catch(err => {                
            showNotification(err.message, types.danger);
        });
    }

    const { handleChange, values, errors, handleSubmit } = useForm(editProductSubmitHandler);

    return (
        <section className='create-form'>
        <h1 className='form-heading'>Create Product</h1>
        <form onSubmit={handleSubmit}>

            <div className='custom-field-input'>
                <label className='field field-border-bottom'>
                    <input type='text' className='field-input' name='name' placeholder=' ' 
                    onChange={debounce(handleChange, 200)} onBlur={handleChange} defaultValue={product.name}/>
                    <span className='field-label-wrap'>
                        <span className='field-label'>Name</span>
                    </span>
                </label>
                <span className={errors.name ? 'field-error show' : 'field-error'}>{errors.name}</span>
            </div>

            <div className='custom-field-input'>
                <label className='field field-border-bottom'>
                    <input type='text' className='field-input' name='imageUrl' placeholder=' ' 
                    onChange={debounce(handleChange, 200)} onBlur={handleChange}
                    defaultValue={product.imageUrl}/>
                    <span className='field-label-wrap'>
                        <span className='field-label'>Image Url</span>
                    </span>
                </label>
                <span className={errors.imageUrl ? 'field-error show' : 'field-error'}>{errors.imageUrl}</span>
            </div>

            <div className='custom-field-input'>
                <label className='field field-border-bottom'>
                    <input type='number' className='field-input' name='price' placeholder=' ' 
                    onChange={debounce(handleChange, 200)} onBlur={handleChange}
                    defaultValue={product.price}/>
                    <span className='field-label-wrap'>
                        <span className='field-label'>Price</span>
                    </span>
                </label>
                <span className={errors.price ? 'field-error show' : 'field-error'}>{errors.price}</span>
            </div>

            <div className='custom-field-input'>
                <label className='field field-border-bottom'>
                    <input type='number' className='field-input' name='discount' placeholder=' ' 
                    onChange={debounce(handleChange, 200)} onBlur={handleChange}
                    defaultValue={product.discount}/>
                    <span className='field-label-wrap'>
                        <span className='field-label'>Discount</span>
                    </span>
                </label>                
                <span className={errors.discount ? 'field-error show' : 'field-error'}>{errors.discount}</span>
            </div>

            <div className='custom-field-input'>
                <label className='field field-border-bottom'>
                    <input type='text' className='field-input' name='status' placeholder=' ' 
                    onChange={debounce(handleChange, 200)} onBlur={handleChange}
                    defaultValue={product.status}/>
                    <span className='field-label-wrap'>
                        <span className='field-label'>Status</span>
                    </span>
                </label>                
            </div>            
            
            <div className='custom-field-input'>
                <label className='field field-border-bottom'>
                    <textarea rows={2} className='field-input text-area' name='description' placeholder=' ' 
                    onChange={debounce(handleChange, 200)} onBlur={handleChange}
                    defaultValue={product.description}/>
                    <span className='field-label-wrap'>
                        <span className='field-label'>Description</span>
                    </span>
                </label>
                <span className={errors.description ? 'field-error show' : 'field-error'}>{errors.description}</span>
            </div>
            
            <input type='submit' className='btn btn-box btn-primary' value='Update' />
        </form>        
    </section>
    )
}

export default CreateProductForm;