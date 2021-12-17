import { useNotificationContext } from '../../contexts/NotificationContext';

import './Notification.css';

const Notification = () => {
    const { notification, hideNotification } = useNotificationContext();

    if (!notification.show) {
        return null;
    }

    return (
        <div className={`notification ${notification.type}`} onClose={hideNotification}>            
            <div className='notification-header'>
            <button className="notification-close-btn" onClick={hideNotification}>X</button>
            </div>
            <div className="notification-body">                
                {notification.message}                
            </div>
        </div>
    );
};

export default Notification;