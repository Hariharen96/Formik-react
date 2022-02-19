import React from 'react'
import { Field,ErrorMessage } from 'formik';
import ErrorText from './ErrorText';

function Input(props) {
    const { label,name, ...rest } = props
    return (
        <div className="form-control">
            <label htmlFor={name} className="labelText">{label}</label>
            <Field id={name} name={name} {...rest} />
            <ErrorMessage name={name} component={ErrorText} />            
        </div>
    )
}

export default Input
