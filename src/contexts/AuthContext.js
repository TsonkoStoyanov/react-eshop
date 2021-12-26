import { createContext, useContext } from 'react';

import useLocalStorage from '../hooks/useLocalStorage';

const initialAuthState = {
    userId: '',
    username: '',
    token: '',
    expiration: '',
    role: '',
};

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useLocalStorage('user', initialAuthState);

    const signIn = (authData) => {
        setUser(authData);
    }

    const signOut = () => {
        setUser(initialAuthState);
    };
    
    const isAdmin = user.role === 'Admin' ? true : false;
    const isAuthenticated = user.userId ? true : false;

    const contexValues = {
        user,
        signIn,
        signOut,
        isAuthenticated: isAuthenticated,
        isAdmin: isAdmin
    }

    return (
        <AuthContext.Provider value={ contexValues }>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => {
    return  useContext(AuthContext);    
}