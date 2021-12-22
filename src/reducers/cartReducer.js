import {storeCart, calculateItemsCount,calculateTotal } from '../helpers'

const cartReducer = (state, action) => {
    switch (action.type) {

        case 'ADD_PRODUCT':
            if (!state.cartItems.find(p => p.id === action.payload.id)) {
                state.cartItems.push({
                    ...action.payload,
                    quantity: 1,
                });
            }

            return {
                ...state,
                cartItems: [...state.cartItems],
                itemsCount: calculateItemsCount(state.cartItems),
                total: calculateTotal(state.cartItems),                
            }

        case 'INCREASE':
            const increaseIndex = state.cartItems.findIndex(p => p.id === action.payload);
            state.cartItems[increaseIndex].quantity++;                    

            return {
                ...state,
                cartItems: [...state.cartItems],
                itemsCount: calculateItemsCount(state.cartItems),
                total: calculateTotal(state.cartItems),

            }

        case 'DECREASE':
            const decreaseIndex = state.cartItems.findIndex(p => p.id === action.payload);
            const product = state.cartItems[decreaseIndex];

            if (product.quantity > 1) {
                product.quantity--;
            }            

            return {
                ...state,
                cartItems: [...state.cartItems],
                itemsCount: calculateItemsCount(state.cartItems),
                total: calculateTotal(state.cartItems),                
            };

        case 'REMOVE_PRODUCT':
            const filtredCardItems = state.cartItems.filter(p => p.id !== action.payload);
            
            return {
                ...state,
                cartItems: [...filtredCardItems],
                itemsCount: calculateItemsCount(filtredCardItems),
                total: calculateTotal(filtredCardItems),                  
            };

        case 'CLEAR_CART':
            storeCart([]);
            return {
                cartItems: [],
                itemsCount: 0, 
                total: 0 
            };

        default:
            return state;
    }
};

export default cartReducer;