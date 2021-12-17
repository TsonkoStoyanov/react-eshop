const BASE_URL = 'https://localhost:7131/api';

export const signIn = async (username, password) => {
    let response = await fetch(`${BASE_URL}/signIn`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    });

    let jsonResult = await response.json();

    console.log(jsonResult);

    if (response.ok) {
        return jsonResult;
    } else {
        throw jsonResult.message;
    }
};

export const signUp = async (username, email, password) => {
    let response =  fetch(`${BASE_URL}/signUp`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ username, email, password })
    });

    let jsonResult = await response.json();

    console.log(jsonResult);

    if (response.ok) {
        return jsonResult;
    } else {
        throw jsonResult.message;
    }
}

export const signOut = async (username, token) => {
    let response = fetch(`${BASE_URL}/signOut`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'Bearer': token,
        },
        body: JSON.stringify({ username })
    });

    let jsonResult = await response.json();

    console.log(jsonResult.value);

    if (response.ok) {
        return jsonResult.value;
    } else {
        console.log(jsonResult.message)
        throw jsonResult.message;
    }
};