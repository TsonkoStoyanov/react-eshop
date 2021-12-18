import { useNavigate} from "react-router-dom";
import { debounce } from 'lodash';

import { useAuthContext } from '../../../contexts/AuthContext';
import { useNotificationContext, types } from '../../../contexts/NotificationContext';

import useForm from '../../../hooks/useForm';

import './CreateProductForm.css';

import * as productService from '../../../services/productService';
import * as constants from '../../../constants/constants';

const CreateProductForm = () => {

    const { user} = useAuthContext();
    const navigate = useNavigate();    
    const { showNotification } = useNotificationContext();

    const createProductSubmitHandler = () => {
       
        const product = {
            name: values.name,
            description: values.description,
            imageUrl: values.imageUrl,
            price: values.price
        }

        productService.create(product, user.token)
        .then((result) => {            
            showNotification(constants.PRODUCT_CREATED, types.success);
            navigate('/');
        })
        .catch(err => {                
            showNotification(err, types.danger);
        });
    }

    const { handleChange, values, errors, handleSubmit } = useForm(createProductSubmitHandler);

    return (
        <section className="create-form">
        <h1 className="form-heading">Create Product</h1>
        <form onSubmit={handleSubmit}>

            <div className="custom-field-input">
                <label className="field field-border-bottom">
                    <input type="text" className="field-input" name="name" placeholder=" " 
                    onChange={debounce(handleChange, 200)} onBlur={handleChange}/>
                    <span className="field-label-wrap">
                        <span className="field-label">Name</span>
                    </span>
                </label>
                <span className={errors.name ? "field-error show" : "field-error"}>{errors.name}</span>
            </div>

            <div className="custom-field-input">
                <label className="field field-border-bottom">
                    <input type="text" className="field-input" name="description" placeholder=" " 
                    onChange={debounce(handleChange, 200)} onBlur={handleChange}/>
                    <span className="field-label-wrap">
                        <span className="field-label">Description</span>
                    </span>
                </label>
                <span className={errors.description ? "field-error show" : "field-error"}>{errors.description}</span>
            </div>

            <div className="custom-field-input">
                <label className="field field-border-bottom">
                    <input type="text" className="field-input" name="imageUrl" placeholder=" " 
                    onChange={debounce(handleChange, 200)} onBlur={handleChange}/>
                    <span className="field-label-wrap">
                        <span className="field-label">Image Url</span>
                    </span>
                </label>
                <span className={errors.imageUrl ? "field-error show" : "field-error"}>{errors.imageUrl}</span>
            </div>

            <div className="custom-field-input">
                <label className="field field-border-bottom">
                    <input type="number" className="field-input" name="price" placeholder=" " 
                    onChange={debounce(handleChange, 200)} onBlur={handleChange}/>
                    <span className="field-label-wrap">
                        <span className="field-label">Price</span>
                    </span>
                </label>
                <span className={errors.price ? "field-error show" : "field-error"}>{errors.price}</span>
            </div>
            
            <input type="submit" className="btn btn-box btn-primary" value="Create" />
        </form>        
    </section>
    )
}

export default CreateProductForm;
