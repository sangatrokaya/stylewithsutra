'use client'
import React from 'react'
import FormLayout from '@/components/layout/page'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Button, Input } from "@nextui-org/react";


const SignupSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  phoneNumber: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  role: Yup.string()
    .required('required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('required')
});

export const Register = () => {
  return (
    <div>

      <Formik
        initialValues={{
          fullName: '',
          phoneNumber: '',
          email: '',
          role: '',
          password: ''
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
          // same shape as initial values
          console.log(values);
        }}
      >
        {({ errors, touched }) => (

          <Form className='formFields'>
            <h1 className='heading'>Sign Up</h1>
            <br/>
            <p className='subHeading'>Create your account to get full access</p>
            <br/>
            <br/>
            <div className="formFields">
              <Input type="string" label="fullName" placeholder="Enter your full name" />
            </div>
            <br />
            <div className="formFields">
              <Input type="email" label="Email" placeholder="Enter your email" />
            </div>
            <br />
            <div className="formFields">
              <Input type="phoneNumber" label="phoneNumber" placeholder="Enter your phone number" />
            </div>
            <br />
            <div className="formFields">
              <Input type="string" label="Role" placeholder="Enter your role" />
            </div>
            <br />
            <div className="formFields">
              <Input type="password" label="Password" placeholder="Enter your password" />
            </div>
            <br />
            <Button type="submit" className='btn-primary'>Submit</Button>
          </Form>
        )}
      </Formik>
    </div>
  )
};

const page = () => {
  return (
    <FormLayout>
      <Register />
    </FormLayout>
  )
}

export default page