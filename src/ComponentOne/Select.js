import React from 'react';
import { Field,ErrorMessage } from 'formik';
import ErrorText from './ErrorText';

function Select(props) {
    const { label,name,options, ...rest } = props;
    return (
        <div className="form-control">
            <label htmlFor={name} className="labelText">{label}</label>
            <Field as="select" name={name} id={name} {...rest} >
            {
                options.map(option => {
                    return(
                        <option key={option.value} value={option.value}>{option.key}</option>
                    )
                })
            } 
            </Field>
            <ErrorMessage name={name} component={ErrorText} />
        </div>
    )
}

export default Select
