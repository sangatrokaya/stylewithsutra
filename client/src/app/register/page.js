'use client'
import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

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

export const ValidationSchemaExample = () => (
  <div>
    <h1>Signup</h1>
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
        <Form>
          <Field name="fullName" placholder = "Enter your full name"/>
          {errors.fullName && touched.fullName ? (
            <div>{errors.fullName}</div>
          ) : null}
          <br/>
          <Field name="email" type="email" placholder = "Enter your email"/>
          {errors.email && touched.email ? <div>{errors.email}</div> : null}
          <br/>
          <Field name="phoneNumber" placholder = "Enter your phone number"/>
          {errors.phoneNumber && touched.phoneNumber ? (
            <div>{errors.phoneNumber}</div>
          ) : null}
          <br/>
          <Field name="role" placholder = "Enter your role"/>
          {errors.role && touched.role ? (
            <div>{errors.role}</div>
          ) : null}
          <br/>
          <Field name="password" placholder = "Enter your password"/>
          {errors.password && touched.password ? (
            <div>{errors.password}</div>
          ) : null}
          <br/>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default ValidationSchemaExample