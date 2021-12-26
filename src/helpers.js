import * as constants from './constants/constants'

export const isInCart = (id, cartItems) => {
    return cartItems.find(item => item.id === id);
}

export const storeCart = (cartItems) => {
    const cart = cartItems.length > 0 ? cartItems : [];
    
    try {
        localStorage.setItem('cart', JSON.stringify(cart));
    }
    catch (err) {
        console.log(err);
    }
}

export const calculateItemsCount = (cartItems) => {
    return cartItems.reduce((total, prod) => total + prod.quantity, 0)
};

export const calculateTotal = (cartItems) => {
    storeCart(cartItems);
    return cartItems.reduce((total, prod) => total + (prod.quantity * (prod.price - (prod.price * (prod.discount / 100)))), 0)
};

export const getToken = () => {
    try {
        let userFromLocalStorage = localStorage.getItem('user');

        if (!userFromLocalStorage) {
            throw constants.NOT_AUTHENTICATED;
        }

        let user = JSON.parse(userFromLocalStorage);

        return user.token;

    } catch (err) {
        console.log(err);
    }
}