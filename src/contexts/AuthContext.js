import { createContext, useContext } from 'react';

import useLocalStorage from '../hooks/useLocalStorage';

const initialAuthState = {
    userId: '',
    username: '',
    token: '',
    expiration: '',
    role: '',
};

export const AuthContext = createContext();

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

    return (
        <AuthContext.Provider value={{
            user,
            signIn,
            signOut,
            isAuthenticated: isAuthenticated,
            isAdmin: isAdmin
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => {
    const authState = useContext(AuthContext);

    return authState;
}