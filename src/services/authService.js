import * as constants from '../constants/constants';

const BASE_URL = 'https://localhost:7131/api';

export const signIn = async (username, password) => {
    try {
        let response = await fetch(`${BASE_URL}/signIn`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        let jsonResult = await response.json();

        if (response.ok && jsonResult.statusCode === 200) {
            return jsonResult.value;
        } else if (jsonResult.statusCode === 401) {
            throw constants.INVALID_CREDENTIALS;
        } else {
            throw jsonResult.value.message;
        }
    }
    catch {
        throw constants.SOMETHING_GET_WRONG;
    }
};

export const signUp = async (username, email, password) => {
    try {


        let response = await fetch(`${BASE_URL}/signUp`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ username, email, password })
        });
        
        let jsonResult = await response.json();

        if (response.ok && jsonResult.statusCode === 200) {
            return jsonResult.value;
        } else {
            throw jsonResult.value.message;
        }
    } catch {
        throw constants.SOMETHING_GET_WRONG;
    }
}

export const signOut = (token) => {
    return fetch(`${BASE_URL}/signOut`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
};