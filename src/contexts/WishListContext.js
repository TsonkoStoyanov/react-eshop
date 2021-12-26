import { createContext, useContext, useState, useEffect } from 'react';

import { useAuthContext } from '../contexts/AuthContext';
import * as wishListService from '../services/wishListService'

const WishListContext = createContext();

export const WishListProvider = ({ children }) => {
    const [state, setState] = useState([]);
    const { user } = useAuthContext();    

    useEffect(() => {
        
        if (user.userId) {
            wishListService.getAll(user.userId)
                .then(result => {
                    setState(result);
                })
                .catch(err => {
                    console.log(err?.message);
                })
        }else{
            setState([]);
        }

    }, [user.userId]);

    const addToWishList = (product) => {
        setState(...state, product);
    }

    const removeFromWishList = (productId) => {
        const filtered = state.filter(p => p.id !== productId);
        setState(filtered);
    };

    const wishListCount = state.length;

    const contexValues = {
        state,
        addToWishList,
        removeFromWishList,
        wishListCount : wishListCount,
    }

    return (
        <WishListContext.Provider value={ contexValues }>
            {children}
        </WishListContext.Provider>
    );
};

export const useWishListContext = () => {
    return useContext(WishListContext);
};