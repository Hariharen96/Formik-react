import React from 'react';
import * as Yup from 'yup';
import { Formik,Form } from 'formik';
import LoginControl from './LoginControl';

function LoginContainer() {
    const initialValues = {
        email: "",
        password: "",
    };
    const validationSchema = Yup.object({
        email: Yup.string()
          .email('Invalid email format')
          .required('Required'),
        password: Yup.string().required('Required')
      })
    const onSubmit = values => console.log('Form Values',values);
    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {
                formik => (
                 <Form>
                        <LoginControl control="input" type="email" name="email" label="Email" />
                        <LoginControl control="input" type="password" name="password" label="Password" />
                        <button className="btn" type="submit">Submit</button>
                    </Form>
                )
            }
            
        </Formik>
    )
}

export default LoginContainer
