import React from 'react';
import DateView from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Field,ErrorMessage } from 'formik';
import ErrorText from './ErrorText';

function DatePicker(props) {
    const { label,name, ...rest } = props;
    return (
        <div className="form-control">
            <label htmlFor={name} className="labelText">{label}</label>
            <Field name={name}>
                {
                    ({form,field})=>{
                        const { setFieldVaue } = form
                        const { value } = field
                        return <DateView id={name} {...field} {...rest} selected={value} onChange={val=>setFieldVaue(name,val)} />
                    }
                }
            </Field>
            <ErrorMessage name={name} component={ErrorText} />
        </div>
    )
}

export default DatePicker
