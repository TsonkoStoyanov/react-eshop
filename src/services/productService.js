import * as constants from '../constants/constants';
import { getToken } from '../helpers';

export const getAll = async () => {
    let response = await fetch(`${constants.BASE_URL}/products`);

    let jsonResult = await response.json();

    if (response.ok) {
        return jsonResult;
    } else {
        throw jsonResult.value;
    }
};

export const getOne = async (productId) => {
    let response = await fetch(`${constants.BASE_URL}/products/${productId}`);

    let jsonResult = await response.json();

    if(jsonResult.status === 404){
        throw jsonResult;
    }

    if (response.ok) {
        return jsonResult.value;
    } else {
        throw jsonResult;
    }
};

export const create = async (product) => {
    let response = await fetch(`${constants.BASE_URL}/products`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'Authorization': `Bearer ${getToken()}`
        },
        body: JSON.stringify(product)
    });

    if(response.status === 401){
        throw constants.NOT_AUTHORIZED;
    }

    let jsonResult = await response.json();
    
    if (response.ok) {
        return jsonResult.value;           
    } else {
        throw jsonResult.value;
    }
};

export const update = async (productId, product) => {

    let response = await fetch(`${constants.BASE_URL}/products/${productId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'Authorization': `Bearer ${getToken()}`
        },
        body: JSON.stringify(product)
    });    

    if(response.status === 401){
        throw constants.NOT_AUTHORIZED;
    }

    let jsonResult = await response.json();

    if(jsonResult.status === 404){
        throw jsonResult;
    }

    if (response.ok) {
        return jsonResult.value;
    } else{
        throw jsonResult.value;
    }
}

export const del = async (productId) => {

    let response = await fetch(`${constants.BASE_URL}/products/${productId}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${getToken()}`
        },
    });    

    if(response.status === 401){
        throw constants.NOT_AUTHORIZED;
    }

    let jsonResult = await response.json();

    if(jsonResult.status === 404){
        throw jsonResult;
    }

    if (response.ok) {
        return jsonResult.value;
    } else {
        throw jsonResult.value;
    }
}