import React from 'react';
import { Field,ErrorMessage } from 'formik';
import ErrorText from './ErrorText'

function RadioButtons(props) {
    const { name,label,options, ...rest } = props;
    return (
        <div className="form-control">
            <label>{label}</label>
            <Field name={name} {...rest}>
                {
                    ({field})=>{
                        return options.map(option => {
                            return(
                                <React.Fragment key={option.key}>
                                    <input type="radio"  value={option.value} id={option.value} {...field} checked={field.value===option.value} />
                                    <label htmlFor={option.value}>{option.key}</label>

                                </React.Fragment>
                            )
                        })

                    }
                }
            </Field>
            <ErrorMessage name={name} component={ErrorText} />
        </div>
    )
}

export default RadioButtons
