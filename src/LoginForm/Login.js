import React from 'react';
import { Field,ErrorMessage } from 'formik';
import ErrorsFormik from './ErrorsFormik';

function Login(props) {
    const { label,name, ...rest } = props;
    return (
        <div className="form-control">
            <label htmlFor={name} className="labelText">{label}</label>
            <Field name={name} id={name} {...rest} />
            <ErrorMessage name={name} component={ErrorsFormik} />
        </div>
    )
}

export default Login
