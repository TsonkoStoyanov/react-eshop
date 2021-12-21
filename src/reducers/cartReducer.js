export const sumItems = cartItems =>{
    return {
        itemCount: cartItems.reduce((total, product) => total + product.quantity, 0),
        total: cartItems.reduce((total, product) => total + (product.quantity * (product.price - (product.price * product.discount / 100))), 0)        
    }
}

const cartReducer = (state, action) => {
    switch (action.type) {

        case 'ADD_PRODUCT':
            if (!state.cartItems.find(item => item.id === action.payload.id)) {
                state.cartItems.push({
                    ...action.payload,
                    quantity: 1,
                });
            }

            return{
                ...state,
                cartItems: [...state.cartItems],
                ...sumItems(state.cartItems)
            }

        default:
            return state;
    }
};

export default cartReducer;