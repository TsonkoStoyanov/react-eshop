import * as constants from '../constants/constants';

export const getAll = async () => {
        let response = await fetch(`${constants.BASE_URL}/products`);

        let jsonResult = await response.json();

        if (response.ok) {
            return jsonResult;        
        } else {
            throw jsonResult.value?.message;
        }
};

export const getOne = async (productId) => {
    let response = await fetch(`${constants.BASE_URL}/products/${productId}`);

    let jsonResult = await response.json();

    if (response.ok) {
        return jsonResult;        
    } else {
        throw jsonResult.value?.message;
    }
};

export const create = async (product, token) => {
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
            throw jsonResult.value?.message;
        }
};

export const update = async (productId, product, token) => {

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
            throw jsonResult.value?.message;
        }
}

export const del = async (productId, token) => {

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
            throw jsonResult.value?.message;
        }
}