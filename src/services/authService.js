import * as constants from '../constants/constants';

export const signIn = async (username, password) => {
        let response = await fetch(`${constants.BASE_URL}/signIn`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        let jsonResult = await response.json();

        if (response.ok && jsonResult.statusCode === 200) {
            return jsonResult;
        } else if (jsonResult.statusCode === 401) {
            throw constants.INVALID_CREDENTIALS;
        } else {
            throw jsonResult.value?.message;
        }
};

export const signUp = async (username, email, password) => {
    let response = await fetch(`${constants.BASE_URL}/signUp`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ username, email, password })
    });

    let jsonResult = await response.json();

    if (response.ok && jsonResult.statusCode === 200) {
        return jsonResult;
    } else {
        throw jsonResult.value?.message;
    }

}

export const signOut = (token) => {
    return fetch(`${constants.BASE_URL}/signOut`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
};