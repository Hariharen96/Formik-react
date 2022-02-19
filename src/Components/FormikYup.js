import React,{ useState } from 'react';
import './YtForm.css';
import { Formik,useFormik,Form,Field,ErrorMessage,FieldArray,FastField } from 'formik';
import * as Yup from 'yup';
import TextError from './TextError';



const initialValues = {
    name: "",
    email: "",
    channel: "",
    comments: "",
    address: "",
    social: {
        facebook: "",
        twitter: "",
    },
    phoneNumber: ["",""],
    phNumber: [""],
};


const savedValues = {
    name: "ganesh",
    email: "ganesh@gmail.com",
    channel: "ganeshchannel",
    comments: "good",
    address: "chn",
    social: {
        facebook: "ganni2",
        twitter: "ganni3",
    },
    phoneNumber: ["256","759"],
    phNumber: ["123"],
};


const onSubmit = (values,onSubmitProps) => {
   console.log(values);
   onSubmitProps.setSubmitting(false);
   onSubmitProps.resetForm(false);
}

const validate = values => {
    let errors = {};
    if(!values.name){
        errors.name="Required";
    }

    if(!values.email){
        errors.email="Required";
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.email="Invalid email format";
    }

    if(!values.channel){
        errors.channel="Required";
    }
    return errors;
}

const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email format").required("Required"),
    channel: Yup.string().required("Required"),
});

function FormikYup() {
    const [formValues,setFormValues] = useState(null);
    const contextForm = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
        // validate
    });
console.log(contextForm.errors);
//getfieldprops contains handleschange handleblur=Field
//Formik values,validate,submit
//Form automatically submit
//Field hook up,match,render
//validateField,validateForm,setTouched,setFieldTouched
    return (
        <Formik initialValues={formValues || initialValues} validationSchema={validationSchema} onSubmit={onSubmit} enableReinitialize>
            
            
            {
                formik => {
                    return(
                        <Form>
                        <div className="form-control">
                        <label htmlFor="name" className="labelText">Name</label>
                        <Field type="text" name="name" id="name"/>
                        <ErrorMessage name="name" component={TextError} />
                        </div>
                        <div className="form-control">
                        <label htmlFor="email" className="labelText">Email</label>
                        <Field type="email" name="email" id="email"/>
                        <ErrorMessage name="email" component={TextError} />
                        </div>
                        <div className="form-control">
                        <label htmlFor="channel" className="labelText">channel</label>
                        <FastField type="text" name="channel" id="channel"/>
                        <ErrorMessage name="channel" component={TextError} />
                        </div>
        
                        <div className="form-control">
                        <label htmlFor="comments" className="labelText">Comments</label>
                        <Field as="textarea" name="comments" id="comments"/>
                        <ErrorMessage name="comments" component={TextError} />
                        </div>
        
                        <div className="form-control">
                        <label htmlFor="address" className="labelText">Address</label>
                        <Field name="address">
                            {
                                (props) => {
                                    console.log(props);
                                    const {field,form,meta} = props;
                                    return(
                                        <div>
                                            <input type="text" {...field} />
                                            {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
                                        </div>
                                    )
                                }
                            }
                        </Field>
        
                        <div className="form-control">
                            <label htmlFor="facebook" className="labelText">Facebook</label>
                            <Field type="text" name="social.facebook" id="facebook" />
                            <ErrorMessage name="facebook" component={TextError} /> 
                        </div>
        
                        <div className="form-control">
                            <label htmlFor="twitter" className="labelText">Twitter</label>
                            <Field type="text" name="social.twitter" id="twitter" />
                            <ErrorMessage name="twitter" component={TextError} /> 
                        </div>
        
                        <div className="form-control">
                            <label htmlFor="phoneNumber" className="labelText">Phnumber1</label>
                            <Field type="text" name="phoneNumber[0]" id="phoneNumber" />
                            <ErrorMessage name="phoneNumber" component={TextError} /> 
                        </div>
        
                        <div className="form-control">
                            <label htmlFor="phoneNumber" className="labelText">phNumber2</label>
                            <Field type="text" name="phoneNumber[1]" id="phoneNumber" />
                            <ErrorMessage name="phoneNumber" component={TextError} /> 
                        </div>
                        
                        {/* <div className="form-control">
                            <label className="labelText">List of phone numbers</label>
                            <FieldArray name="phNumbers">
                                {
                                    (fieldArrayProps) => {
                                        console.log("fieldArrayProps", fieldArrayProps);
                                        const { push,remove,form } = fieldArrayProps;
                                        const { values } = form;
                                        const { phNumbers } = values;
                                       return(
                                           <div>
                                             {phNumbers.map((phNumber,index)=> (
                                                 <div key={index}>
                                                     <Field name={`phNumbers[${index}]`} />
                                                     <button type="button" onClick={()=>remove('index')}>-</button>
                                                     <button type="button" onClick={()=>push('')}>+</button>
                                                 </div>
                                             ))}
                                           </div>
                                       )
                                    }
        }
                            </FieldArray>  
                        </div>
                         */}
        </div>
                        <button className="btn" onClick={()=>setFormValues(savedValues)}>Load saved data</button>
                        <button className="btn" type="reset">Reset</button>
                        <button type="submit" className="btn" disabled={!formik.isValid}>Submit</button>
                    </Form>
                    )
                }
            }
            
        </Formik>
    )
}


export default  FormikYup
