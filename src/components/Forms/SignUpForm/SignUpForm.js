import { Link, useNavigate} from "react-router-dom";
import { debounce } from 'lodash';

import { useAuthContext } from '../../../contexts/AuthContext';
import { useNotificationContext, types } from '../../../contexts/NotificationContext';

import useForm from '../../../hooks/useForm';
import './SignUpForm.css';

import * as authService from '../../../services/authService';
import * as constants from '../../../constants/constants';

const SignUpForm = () => {
    
    const navigate = useNavigate();
    const { signIn } = useAuthContext();
    const { showNotification } = useNotificationContext();

    const signUpFormHandler = () => {
       
        authService.signUp(values.username,values.email, values.password)
        .then((authData) => {
            signIn(authData.value);
            showNotification(constants.SIGNED_IN_SUCCESSFULLY, types.success);
            navigate('/');
        })
        .catch(err => {                
            showNotification(err, types.danger);
        });
    }

    const { handleChange, values, errors, handleSubmit } = useForm(signUpFormHandler);

    return (
        <section className="signup-form">
        <h1 className="form-heading">Sign Up</h1>
        <form onSubmit={handleSubmit}>

            <div className="custom-field-input">
                <label className="field field-border-bottom">
                    <input type="text" className="field-input" value={values.username} name="username" placeholder=" " 
                    onChange={debounce(handleChange, 200)} onBlur={handleChange}/>
                    <span className="field-label-wrap">
                        <span className="field-label">Username</span>
                    </span>
                </label>
                <span className={errors.username ? "field-error show" : "field-error"}>{errors.username}</span>
            </div>

            <div className="custom-field-input">
                <label className="field field-border-bottom">
                    <input type="text" className="field-input" name="email" placeholder=" " 
                    onChange={debounce(handleChange, 200)} onBlur={handleChange}/>
                    <span className="field-label-wrap">
                        <span className="field-label">Email</span>
                    </span>
                </label>
                <span className={errors.email ? "field-error show" : "field-error"}>{errors.email}</span>
            </div>

            <div className="custom-field-input">
                <label className="field field-border-bottom">
                    <input type="password" className="field-input" name="password" placeholder=" "
                     onChange={debounce(handleChange, 200)} 
                    onBlur={handleChange} onBlur={handleChange}/>
                    <span className="field-label-wrap">
                        <span className="field-label">Password</span>
                    </span>
                </label>
                <span className={errors.password ? "field-error show" : "field-error"}>{errors.password}</span>
            </div>
            
            <input type="submit" className="btn btn-box btn-primary" value="Sign Up" />
        </form>
        <span>Already have an account? <Link className="custom-link" to="/signin">Sign In</Link></span>
    </section>
    )
}

export default SignUpForm;
