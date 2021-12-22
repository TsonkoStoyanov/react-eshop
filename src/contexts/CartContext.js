import React, { createContext, useReducer, useContext } from 'react';

import { calculateItemsCount, calculateTotal } from '../helpers';
import cartReducer from '../reducers/cartReducer';

export const CartContext = createContext();

const cartFromStorage = localStorage.getItem('cart');
const cart = cartFromStorage ? JSON.parse(cartFromStorage) : [];
const initialState = {cartItems: cart, itemsCount: calculateItemsCount(cart), total: calculateTotal(cart) };

export const CartContextProvider = ({ children }) => {  
      
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const addProduct = (product) => dispatch({ type: 'ADD_PRODUCT', payload: product });
    const removeProduct = (productId) => dispatch({ type: 'REMOVE_PRODUCT', payload: productId });
    const increaseProductQty = (productId) => dispatch({ type: 'INCREASE', payload: productId });
    const decreaseProductQty = (productId) => dispatch({ type: 'DECREASE', payload: productId });
    const clearCart = () => dispatch({ type: 'CLEAR_CART' });

    const contexValues = {
        ...state,
        addProduct,
        removeProduct,
        increaseProductQty,
        decreaseProductQty,
        clearCart,
    }

    return (
        <CartContext.Provider value={ contexValues }>
            {
                children
            }
        </CartContext.Provider>
    );
}


export const useCartContext = () => {
    return useContext(CartContext);
};