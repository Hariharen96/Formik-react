import React from 'react';
import * as Yup from 'yup';
import { Formik,Form } from 'formik';
import RegControl from './RegControl';

function RegContainer() {
    const options = [
        {key: 'Email',value:'emailmoc'},
        {key:'Telephone',value:'telephonemoc'},
    ];
    const initialValues = {
        email: "",
        password: "",
        confirmPassword: "",
        modeOfContact: "",
        phone: "",

    };
    const validationSchema = Yup.object({
        email: Yup.string().email("Invalid email format").required("Required"),
        password: Yup.string().required("Required"),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'),''],'Passwords must match').required('Required'),
        modeOfContact: Yup.string().required('Required'),
        phone: Yup.string().when('modeOfContact', {
            is: 'telephonemoc',
            then: Yup.string().required('Required')
        }),
    });
    const onSubmit = values => console.log("Form Data",values);
    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {
                formik => (
                    <Form>
                        <RegControl control="input" type="email" name="email" label="Email" />
                        <RegControl control="input" type="password" name="password" label="Password" />
                        <RegControl control="input" type="password" name="confirmPassword" label="Confirm Password" />
                        <RegControl control="radio"  name="modeOfContact" label="Mode Of Contact" options={options} />
                        <RegControl control="input" type="text" name="phone" label="Phone Number" />
                        <button type="submit" disabled={!formik.isValid}>Submit</button>
                    </Form>
                )
            }
            
        </Formik>
    )
}

export default RegContainer
