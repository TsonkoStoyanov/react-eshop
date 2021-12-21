import React, { createContext, useReducer, useContext} from 'react';
import cartReducer from '../reducers/cartReducer';


export const CartContext = createContext();


const initialState = { cartItems: [], itemCount: 0, total: 0 };


export const CartContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);
    const addProduct = (product) => dispatch({type: 'ADD_PRODUCT', payload: product});
    const contexValues = {
        ...state,
        addProduct,
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