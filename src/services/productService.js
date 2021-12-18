import * as constants from '../constants/constants';

export const getAll = async () => {
    try {
        let response = await fetch(`${constants.BASE_URL}/products`);

        let jsonResult = await response.json();

        if (response.ok) {
            return jsonResult;        
        } else {
            throw jsonResult.value.message;
        }

    }
    catch(error) {
        console.log(error);
        throw constants.SOMETHING_GET_WRONG;
    }
};


export const create = async (product, token) => {
    try {
        let response = await fetch(`${constants.BASE_URL}/products`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(product)
        });

        let jsonResult = await response.json();

        if (response.ok) {
            return jsonResult.value;
        } else if (jsonResult.statusCode === 401) {
            throw constants.INVALID_CREDENTIALS;
        } else {
            throw jsonResult.value.message;
        }

    }
    catch(error) {
        console.log(error);
        throw constants.SOMETHING_GET_WRONG;
    }
};

export const update = async (productId, product, token) => {
    try {

        let response = await fetch(`${constants.BASE_URL}/products/${productId}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(product)
        });
        
        let jsonResult = await response.json();

        if (response.ok) {
            return jsonResult.value;
        } else if (jsonResult.statusCode === 401) {
            throw constants.INVALID_CREDENTIALS;
        } else {
            throw jsonResult.value.message;
        }

    } catch(error) {
        console.log(error);
        throw constants.SOMETHING_GET_WRONG;
    }
}

export const del = async (productId, token) => {
    try {

        let response = await fetch(`${constants.BASE_URL}/products/${productId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            },
        });
        
        let jsonResult = await response.json();

        if (response.ok) {
            return jsonResult.value;
        } else if (jsonResult.statusCode === 401) {
            throw constants.INVALID_CREDENTIALS;
        } else {
            throw jsonResult.value.message;
        }
    } catch(error) {
        console.log(error);
        throw constants.SOMETHING_GET_WRONG;
    }
}