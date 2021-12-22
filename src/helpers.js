export const isInCart = (id, cartItems) => {    
    return cartItems.find(item => item.id === id);
}

export const storeCart = (cartItems) => {
    const cart = cartItems.length > 0 ? cartItems : [];
    localStorage.setItem('cart', JSON.stringify(cart));
}

export const calculateItemsCount = (cartItems) => {    
    return cartItems.reduce((total, prod) => total + prod.quantity , 0)
};

export const calculateTotal = (cartItems) => {    
    storeCart(cartItems);
    return cartItems.reduce((total, prod) => total + (prod.quantity * (prod.price - (prod.price * (prod.discount / 100)))) , 0)
};