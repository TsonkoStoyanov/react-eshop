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

    if (response.ok && jsonResult.statusCode === 200) {
        return jsonResult.value;
    } else if (jsonResult.statusCode === 401) {
        throw ('Invalid credentials.');
    } else {
        let responseError = jsonResult.value.message ? jsonResult.value.message : 'Something get wrong';
        throw  responseError;
    }
};

export const signUp = async (username, email, password) => {
    let response = await fetch(`${BASE_URL}/signUp`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ username, email, password })
    });

    let jsonResult = await response.json();
    
    console.log(jsonResult);

    if (response.ok && jsonResult.statusCode === 200) {
        return jsonResult.value;
    } else {
        let responseError = jsonResult.value.message ? jsonResult.value.message : 'Something get wrong';
        throw responseError;
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

    if (response.ok) {
        return jsonResult.value;
    } else {        
        throw jsonResult.message;
    }
};