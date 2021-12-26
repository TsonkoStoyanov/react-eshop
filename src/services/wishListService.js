import * as constants from '../constants/constants';
import { getToken } from '../helpers';

export const getAll = async (userId) => {        
        
        let response = await fetch(`${constants.BASE_URL}/wishList?userId=${userId}`, {            
            headers: {                
                'Authorization': `Bearer ${getToken()}`
            }            
        });

        let jsonResult = await response.json();

        if (response.ok) {
            return jsonResult;        
        } else {
            throw jsonResult.value?.message;
        }
};

export const addToWishList = async (userId, productId) => {
        let response = await fetch(`${constants.BASE_URL}/addTowishList`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${getToken()}`
            },
            body: JSON.stringify(userId, productId)
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

export const removeFromWishList = async (productId) => {

        let response = await fetch(`${constants.BASE_URL}/removeFromWishList?productId=${productId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${getToken()}`
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