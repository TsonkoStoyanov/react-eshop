import { useState } from 'react'
import { omit } from 'lodash'

const useForm = (callback) => {

    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});

    const validate = (name, value) => {
        switch (name) {
            case 'username':
                if (value.length === 0) {
                    setErrors({
                        ...errors,
                        username: 'The field is required.'
                    })
                } else {
                    let newObj = omit(errors, "username");
                    setErrors(newObj);
                }
                break;

            case 'password':
                if (value.length === 0) {

                    setErrors({
                        ...errors,
                        password: 'The field is required.'
                    })
                } else {

                    let newObj = omit(errors, "password");
                    setErrors(newObj);

                }
                break;
                
            case 'email':
                if (value.length === 0) {
                    setErrors({
                        ...errors,
                        email: 'The field is required.'
                    })
                } else if (
                    !new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(value)
                    ) {

                    setErrors({
                        ...errors,
                        email: 'Enter a valid email address.'
                    })
                }
                else {
                    let newObj = omit(errors, "email");
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
