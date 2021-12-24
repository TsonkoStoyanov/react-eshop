import { createContext, useContext, useState, useCallback } from 'react';

const NotificationContext = createContext();

export const types = {
    error: 'danger',
    success: 'success',
};

const initialNotificationState = { show: false, message: '', type: types.error };

export const NotificationProvider = ({ children }) => {
    
    const [notification, setNotification] = useState(initialNotificationState);

    const showNotification = useCallback((message, type = types.error) => {
        setNotification({show: true, message, type});

        setTimeout(() => {
            setNotification(initialNotificationState);
        }, 3000);
        
    }, []);

    const hideNotification = useCallback(() => setNotification(initialNotificationState), [])

    const contexValues = {
        notification, 
        showNotification, 
        hideNotification,
    }

    return (
        <NotificationContext.Provider value={ contexValues }>
            {children}
        </NotificationContext.Provider>
    )
};

export const useNotificationContext = () => {
    return  useContext(NotificationContext);    
};
