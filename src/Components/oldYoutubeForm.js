import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './YtForm.css';

const initialValues = {
    name: "",
    email: "",
    channel: "",
};

const onSubmit = values => {
    console.log(values);
}

const validate = values => {
    let errors = {}
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
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    channel: Yup.string().required('Required'),
});

function OldYoutubeForm() {
    const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    })
//handlechange is used to read and update the values and access each of them and assign to value props
    console.log(formik.touched);
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-control">
                <label className="labelText" htmlFor="name">Name</label>
                <input type="text" id="name" name="name" onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur} />
                {formik.touched.name && formik.errors.name ? ( <div className="error">{formik.errors.name}</div> ) : null}
                </div>
                <div className="form-control">
                <label className="labelText" htmlFor="email" >Email</label>
                <input type="email" id="email" name="email" onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur}/>
                {formik.touched.email && formik.errors.email ? ( <div className="error">{formik.errors.email}</div> ) : null}
                </div>
                <div className="form-control">
                <label className="labelText" htmlFor="channel">Channel</label>
                <input type="text" id="channel" name="channel" onChange={formik.handleChange} value={formik.values.channel} onBlur={formik.handleBlur}/>
                {formik.touched.channel && formik.errors.channel ? ( <div className="error">{formik.errors.channel}</div> ) : null}
                </div>
                <button type="submit" className="btn">Submit</button>
            </form>
        </div>
    )
}


export default OldYoutubeForm
