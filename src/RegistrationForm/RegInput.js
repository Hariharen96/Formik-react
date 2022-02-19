import React from 'react';
import { Field,ErrorMessage } from 'formik';
import RegError from './RegError';

function RegInput(props) {
    const { label,name, ...rest } = props;
    return (
        <div className="form-control">
            <label htmlFor={name} className="labelText">{label}</label>
            <Field name={name} id={name} {...rest} />
            <ErrorMessage name={name} component={RegError} />
        </div>
    )
}

export default RegInput
