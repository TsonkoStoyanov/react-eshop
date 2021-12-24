import { useNotificationContext } from '../../../contexts/NotificationContext';
import { BsXLg } from 'react-icons/bs';

import './Notification.css';

const Notification = () => {
    const { notification, hideNotification } = useNotificationContext();

    if (!notification.show) {
        return null;
    }

    return (
        <div className={`notification ${notification.type}`}>                    
            <div className='notification-header'>
             <span className='notification-type'>{notification.type} </span>   
            <BsXLg className='notification-close-btn' onClick={hideNotification} />
            </div>
            <div className='notification-body'>                
                {notification.message}                
            </div>
        </div>
    );
};

export default Notification;