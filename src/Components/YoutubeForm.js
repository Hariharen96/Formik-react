import React from 'react';
import { Formik,Form,Field,ErrorMessage,FieldArray,FastField } from 'formik';
import * as Yup from 'yup';
import './YtForm.css';
import TextError from './TextError';

const initialValues = {
    name: "",
    email: "",
    channel: "",
    comments: "",
    address: "",
    social : {
        facebook: "",
        twitter: "",
    },
    phoneNumber: ["",""],
    phNumbers: [""],
};

const onSubmit = values => {
    console.log(values);
}

// const validate = values => {
//     let errors = {}
//     if(!values.name){
//         errors.name="Required";
//     }

//     if(!values.email){
//         errors.email="Required";
//     }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
//         errors.email="Invalid email format";

//     }

//     if(!values.channel){
//         errors.channel="Required";
//     }
//     return errors;
// }

const validateComments = value => {
let error;
if(!value){
    error='Required';
}
return error;
}

const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    channel: Yup.string().required('Required'),
    comments: Yup.string().required('Required'),
});

function YoutubeForm() {
    
//handlechange is used to read and update the values and access each of them and assign to value props
    // console.log(formik.touched);
    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            <Form>
                <div className="form-control">
                <label className="labelText" htmlFor="name">Name</label>
                <Field type="text" id="name" name="name"/>
                <ErrorMessage name='name' component={TextError} />
                </div>
                <div className="form-control">
                <label className="labelText" htmlFor="email" >Email</label>
                <Field type="email" id="email" name="email"/>
                <ErrorMessage name='email' component={TextError} />
                </div>
                <div className="form-control">
                <label className="labelText" htmlFor="channel">Channel</label>
                <Field type="text" id="channel" name="channel"/>
                <ErrorMessage name='channel'>
                    {(errorMsg) => <div className="error">{errorMsg}</div>} 
                </ErrorMessage>
                </div>

                <div className="form-control">
                    <label htmlFor="comments" className="labelText">Comments</label>
                    <Field as="textarea" id="comments" name="comments" validate={validateComments}  />
                   <ErrorMessage name="comments" component={TextError} />
                </div>

                <div className="form-control">
                    <label htmlFor="address" className="labelText">Address</label>
                    <FastField name="address">
                        {
                            (props)=>{
                                const { field,form,meta } = props
                                return (
                                    <div>
                                <input type="text" id="address" {...field} />
                                {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
                                </div>
                                )
                            }
                        }
                    </FastField>

                    <div className="form-control">
                        <label htmlFor="facebook" className="labelText">Facebook</label>
                        <Field type="text" id="facebook" name="social.facebook" />
                    </div>

                    <div className="form-control">
                        <label htmlFor="twitter" className="labelText">Twitter</label>
                        <Field type="text" id="twitter" name="social.twitter" />
                    </div>

                    <div className="form-control">
                        <label htmlFor="primaryPh" className="labelText">Primary phone number</label>
                        <Field type="text" id="primaryPh" name="phoneNumber[0]" />
                    </div>

                    <div className="form-control">
                        <label htmlFor="secondaryPh" className="labelText">Secondary phone number</label>
                        <Field type="text" id="secondaryPh" name="phoneNumber[1]" />
                    </div>

                    <div className="form-control">
                        <label className="labelText">List of PhnNumbers</label>   
                        <FieldArray name="phNumbers">
                             {fieldArrayProps => {
                                 console.log(fieldArrayProps);
                                 const { push,remove,form } = fieldArrayProps;
                                 const { values } = form;
                                 const { phNumbers } = values;
                                 return(
                                     <div>
                                         {
                                             phNumbers.map((phNumber,index)=>{
                                                 <div key={index}>
                                                     <Field name={`phNumbers[${index}]`} />
                                                     <button type="button" onClick={()=>remove(index)}>-</button>
                                                     <button type="button" onClick={()=>push(index)}>+</button>
                                                 </div>
                                             })
                                         }
                                     </div>
                                 )

                             }}    
                        </FieldArray> 
                    </div> 


                    
                </div>

                



                <button type="submit" className="btn">Submit</button>
            </Form>
        </Formik>
    )
}


export default YoutubeForm