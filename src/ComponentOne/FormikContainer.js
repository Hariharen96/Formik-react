import React from 'react'
import { Formik,Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';


function FormikContainer() {
    const dropdownOptions = [
        {key: 'select an option',value: ''},
        {key: 'option 1',value:'option1'},
        {key: 'option 2',value:'option2'},
        {key: 'option 3',value:'option3'},     
    ];
    const radioOptions = [
        {key: 'option 1',value:'roption1'},
        {key: 'option 2',value:'roption2'},
        {key: 'option 3',value:'roption3'},     
    ];
    
    const checkBoxOptions = [
        {key: 'option 1',value:'coption1'},
        {key: 'option 2',value:'coption2'},
        {key: 'option 3',value:'coption3'},     
    ];

    const initialValues = {
        email: "",
        description: "",
        selectOptions: "",
        radioOption: "",
        checkBoxOption: [],
        birthDates: null,
    };
    const validationSchema = Yup.object({
        email: Yup.string().required('Required'),
        description: Yup.string().required('Required'),
        selectOptions: Yup.string().required('Required'),
        radioOption: Yup.string().required('Required'), 
        checkBoxOption: Yup.array().required('Required'),
        birthDates: Yup.date().required('Required').nullable,  
    });
    const onSubmit = values => console.log("Form data",values);
    return (
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {
                    formik => (
                        <Form>
                            <FormikControl control="input" type="email" name="email" label="Email" />
                            <FormikControl control="textarea" name="description" label="Description" /> 
                            <FormikControl control="select" name="selectOptions" label="select an options" options={dropdownOptions} />
                            <FormikControl control="radio" name="radioOption" label="select topic" options={radioOptions} />
                            <FormikControl control="checkbox" name="checkBoxOption" label="Checkbox topics" options={checkBoxOptions} />
                            <FormikControl control="date" label="pick a date" name="birthDate" />
                            <button className="btn" type="submit">Submit</button>
                        </Form>
                    )
                }
            </Formik>
    )
}

export default FormikContainer
