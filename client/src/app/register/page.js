'use client'
import React from 'react'
import styles from './styles.module.css'
import { useFormik } from 'formik';
import { Input } from "@nextui-org/react";
import * as Yup from 'yup';


const SignupForm = () => {
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

  const reigsterUser = async(values)=> {
    await fetch('http://localhost:5000/register/',{
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(values)
    })
  }

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      phoneNumber: '',
      role: '',
      password: ''
    },
    validationSchema:SignupSchema,
    onSubmit: values => {
      reigsterUser(values)
    },
  });
  return (
    <form className={styles.formFields} onSubmit={formik.handleSubmit}>
      {/* <label htmlFor="fullName">Full Name</label> */}
      <Input id="fullName"
        name="fullName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.fullName} label="FullName" />
      {formik?.errors.fullName}

      {/* <label htmlFor="email">Email</label> */}
      <Input id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email} label="Email" />
      {formik?.errors.email}


      {/* <label htmlFor="phoneNumber">Phone Number</label> */}
      <Input id="phoneNumber"
        name="phoneNumber"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.phoneNumber} label="PhoneNumber" />
      {formik?.errors.phoneNumber}


      {/* <label htmlFor="role">Role</label> */}
      <Input id="role"
        name="role"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.role} label="Role" />
      {formik?.errors.role}


      {/* <label htmlFor="password">Password</label> */}
      <Input id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password} label="Password" />
      {formik?.errors.password}


      <button type="submit">Submit</button>
    </form>
  );
};
export default SignupForm