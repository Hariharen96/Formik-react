import React from 'react';
import { Formik,Form } from 'formik';
import * as Yup from 'yup';
import EnrControl from './EnrControl';


function EnrContainer() {
    const dropdownOptions = [
        {key: "select an option",value:""},
        {key:"React",value:"react"},
        {key:"Angular",value:"angular"},
        {key:"Vue",value:"vue"},
    ];

    const checkboxoptions = [
        {key: "Html",value: "html"},
        {key: "Css",value: "css"},
        {key: "Javascript",value: "javascript"},
    ];
    const initialValues = {
        email: "",
        bio: "",
        course: "",
        skills: "",
        coursedate: null,
    };
    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email format').required("Required"),
        bio: Yup.string().required("Required"),
        course: Yup.string().required("Required"),
        skills: Yup.string().required("Required"),
        courseDate: Yup.date().required("Required"),
    });
    const onSubmit = values => console.log("Form Data",values);
    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {
                formik => {
                    <Form>
                        <EnrControl control="input" type="email" name="email" label="Email" />
                        <EnrControl control="textarea" label="bio" name="bio" />
                        <EnrControl control="select" label="Course" name="course" options={dropdownOptions} />
                        <EnrControl control="checkbox" label="Your Skillset" name="skills" options={checkboxoptions} />
                        <EnrControl control="date" label="Course Date" name="courseDate" />
                        <button type="submit" disabled={!formik.isValid}>Submit</button>
                    </Form>
                }
            }
        </Formik>
    )
}

export default EnrContainer
