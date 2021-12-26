import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuthContext } from '../../contexts/AuthContext';
import { useNotificationContext, types } from '../../contexts/NotificationContext';

import * as authService from '../../services/authService';
import * as constants from '../../constants/constants';

const SignOut = () => {
    const { signOut, isAuthenticated } = useAuthContext();
    const { showNotification } = useNotificationContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            authService.signOut()
                .then(() => {
                    signOut();
                    showNotification(constants.SIGNED_OUt_SUCCESSFULLY, types.success);
                    navigate('/');
                }).catch(err => {
                    console.log(err.message);
                });
        }
    }, [signOut, navigate, showNotification, isAuthenticated]);

    return null;

};

export default SignOut;