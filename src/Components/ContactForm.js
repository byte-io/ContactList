import {
    Formik,
    Form,
    Field,
    ErrorMessage,
    
  } from 'formik';

import * as Yup from 'yup';
import './ContactForm.css'



const initialValues = {
    name: '',
    email: '',
    phone: '',
    company: '',
    designation:'',
    address: ''
}

const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Required'),
    phone: Yup.string()
        .min(10, "Must be 10 digit")
        .max(10, "Must be 10 digit")
        .required('Required'),
    company: Yup.string().required('Required'),
    designation: Yup.string().required('Required'),
    address: Yup.string().required('Required')

  })


function ContactForm(props){
    return (
        <Formik 
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values)=>{props.addContact(values)}}>
            <Form>
                <div className='form-control'>
                    <label htmlFor='name'>Name</label>
                    <Field
                        type='text'
                        id='name'
                        name='name'
                        placeholder='Enter full name'
                        className = 'inputField'
                    />
                    <ErrorMessage name='name' />
                </div>
                <div className='form-control'>
                    <label htmlFor='email'>Email ID</label>
                    <Field
                        type='email'
                        id='email'
                        name='email'
                        placeholder='Enter email'
                        className = 'inputField'
                    />
                    <ErrorMessage name='email' />
                </div>
                <div className='form-control'>
                    <label htmlFor='phone'>Phone</label>
                    <Field
                        type='number'
                        id='phone'
                        name='phone'
                        placeholder='Enter Phone number'
                        className = 'inputField'
                    />
                    <ErrorMessage name='phone' />
                </div>
                <div className='form-control'>
                    <label htmlFor='company'>Company</label>
                    <Field
                        type='text'
                        id='company'
                        name='company'
                        placeholder='Enter company name'
                        className = 'inputField'
                    />
                    <ErrorMessage name='company' />
                </div>
                <div className='form-control'>
                    <label htmlFor='designation'>Designation</label>
                    <Field
                        type='text'
                        id='designation'
                        name='designation'
                        placeholder='Enter designation'
                        className = 'inputField'
                    />
                    <ErrorMessage name='designation' />
                </div>
                <div className='form-control'>
                    <label htmlFor='address'>Address</label>
                    <Field
                        type='text'
                        id='address'
                        name='address'
                        placeholder='Enter address'
                        className = 'inputField'
                    />
                    <ErrorMessage name='address' />
                </div>
                <button className='formButton' type='button' onClick={props.closeContactModal}>Cancel</button>
                <button className='formButton' type='submit'>Submit</button>
            </Form>
        </Formik>
    )

}

export default ContactForm;
