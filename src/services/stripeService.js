import * as constants from '../constants/constants';
import { getToken } from '../helpers';

export const CreateCheckoutSession = async (data) => {
    
    let response = await fetch(`${constants.BASE_URL}/CreateCheckoutSession`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'Authorization': `Bearer ${getToken()}`
        },
        body: JSON.stringify(data)
    });

    if(response.status === 401){
        throw constants.NOT_AUTHORIZED;
    }

    let jsonResult = await response.json();
    
    if (response.ok) {
        return jsonResult;           
    } else {
        throw jsonResult;
    }
};