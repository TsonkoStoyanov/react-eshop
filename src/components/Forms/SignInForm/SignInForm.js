import { Link, useNavigate } from 'react-router-dom';
import { debounce } from 'lodash';

import { useAuthContext } from '../../../contexts/AuthContext';
import { useNotificationContext, types } from '../../../contexts/NotificationContext';

import useForm from '../../../hooks/useForm';
import './SignInForm.css';

import * as authService from '../../../services/authService';
import * as constants from '../../../constants/constants';

const SignInForm = () => {    
    const { signIn } = useAuthContext();
    const navigate = useNavigate();
    const { showNotification } = useNotificationContext();
    
    const signInFormHandler = () => {    

        authService.signIn(values.username, values.password)
            .then((authData) => {
                signIn(authData.value);
                showNotification(constants.SIGNED_IN_SUCCESSFULLY, types.success);
                navigate('/');
            })
            .catch(err => {                
                showNotification(err || constants.SOMETHING_GET_WRONG, types.danger);
            });
    }

    const { handleChange, values, errors, handleSubmit } = useForm(signInFormHandler);

    return (
        <section className="signin-form">
            <h1 className="form-heading">Sign In</h1>
            <form onSubmit={handleSubmit}>

                <div className="custom-field-input">
                    <label className="field field-border-bottom">
                        <input type="text" className="field-input" name="username" autoComplete="on" placeholder=" " 
                        onChange={debounce(handleChange, 200)} onBlur={handleChange} />
                        <span className="field-label-wrap">
                            <span className="field-label">Username</span>
                        </span>
                    </label>
                    <span className={errors.username ? "field-error show" : "field-error"}>{errors.username}</span>
                </div>

                <div className="custom-field-input">
                    <label className="field field-border-bottom">
                        <input type="password" className="field-input" name="password" autoComplete="on" placeholder=" " 
                        onChange={debounce(handleChange, 200)} onBlur={handleChange} />
                        <span className="field-label-wrap">
                            <span className="field-label">Password</span>
                        </span>
                    </label>
                    <span className={errors.password ? "field-error show" : "field-error"}>{errors.password}</span>
                </div>
                <input type="submit" className="btn btn-box btn-primary" value="Sign In" />
            </form>
            <span>Don't have an account yet?  <Link className="custom-link" to="/signup">Sign Up</Link></span>
        </section>
    )
}

export default SignInForm;
