import { useState } from 'react'
import { omit } from 'lodash'

import * as constants from '../constants/constants';

const useForm = (callback) => {

    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});

    const validate = (name, value) => {
        switch (name) {
            case 'username':
                if (value.length === 0) {
                    setErrors({
                        ...errors,
                        username: constants.REQUIRED_FIELD
                    })
                } else {
                    let newObj = omit(errors, 'username');
                    setErrors(newObj);
                }
                break;

            case 'password':
                if (value.length === 0) {
                    setErrors({
                        ...errors,
                        password: constants.REQUIRED_FIELD
                    })
                } else {
                    let newObj = omit(errors, 'password');
                    setErrors(newObj);

                }
                break;

            case 'email':
                if (value.length === 0) {
                    setErrors({
                        ...errors,
                        email: constants.REQUIRED_FIELD
                    })
                } else if (
                    !new RegExp(/^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(value)
                ) {
                    setErrors({
                        ...errors,
                        email: constants.VALID_EMAIL
                    })
                }
                else {
                    let newObj = omit(errors, 'email');
                    setErrors(newObj);
                }
                break;

            case 'name':
                if (value.length === 0) {
                    setErrors({
                        ...errors,
                        name: constants.REQUIRED_FIELD
                    })
                }
                else if (value.length < 3) {
                    setErrors({
                        ...errors,
                        name: constants.MIN_CHARACTERS_FIELD
                    })
                } else {
                    let newObj = omit(errors, 'name');
                    setErrors(newObj);
                }
                break;

            case 'description':
                if (value.length === 0) {
                    setErrors({
                        ...errors,
                        description: constants.REQUIRED_FIELD
                    })
                }
                else if (value.length < 3) {
                    setErrors({
                        ...errors,
                        description: constants.MIN_CHARACTERS_FIELD
                    })
                } else {
                    let newObj = omit(errors, 'description');
                    setErrors(newObj);
                }
                break;

            case 'imageUrl':
                if (value.length === 0) {
                    setErrors({
                        ...errors,
                        imageUrl: constants.REQUIRED_FIELD
                    })
                }
                else {
                    let newObj = omit(errors, 'imageUrl');
                    setErrors(newObj);
                }
                break;

            case 'price':
                if (value.length === 0) {
                    setErrors({
                        ...errors,
                        price: constants.REQUIRED_FIELD
                    })
                }
                else if (Number(value) < 0) {
                    setErrors({
                        ...errors,
                        price: constants.MIN_PRICE
                    })
                } else {
                    let newObj = omit(errors, 'price');
                    setErrors(newObj);
                }
                break;

                case 'discount':                  
                    if (Number(value) < 0) {
                        setErrors({
                            ...errors,
                            discount: constants.MIN_DISCOUNT
                        })
                    } else {
                        let newObj = omit(errors, 'discount');
                        setErrors(newObj);
                    }
                    break;

            default:
                break;
        }
    }

    const handleChange = (e) => {
        e.persist();

        let name = e.target.name;
        let val = e.target.value;

        validate(name, val);
        setValues({
            ...values,
            [name]: val,
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (Object.keys(errors).length === 0 && Object.keys(values).length !== 0) {
            callback();

        } else {
            return;
        }
    }

    return {
        values,
        errors,
        handleChange,
        handleSubmit
    }
}

export default useForm;
