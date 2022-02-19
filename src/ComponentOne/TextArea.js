import React from 'react'
import ErrorText from './ErrorText';
import { Field,ErrorMessage } from 'formik';

function TextArea(props) {
    const { label,name, ...rest } = props;
    console.log(props);
    return (
        <div className="form-control">
            <label htmlFor={name} className="labelText">{label}</label>
            <Field as="textarea" name={name} id={name} {...rest} />
            <ErrorMessage name={name} component={ErrorText} />
        </div>
    )
}

export default TextArea
