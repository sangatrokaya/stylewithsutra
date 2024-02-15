'use client'
import React from 'react'
import styles from './styles.module.css'
import { useFormik } from 'formik';
import { Input, Card, CardBody } from "@nextui-org/react";
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

  const reigsterUser = async (values) => {
    await fetch('http://localhost:5000/register/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
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
    validationSchema: SignupSchema,
    onSubmit: values => {
      reigsterUser(values)
    },
  });
  return (
    <form className={styles.formFields} onSubmit={formik.handleSubmit}>
      <div className={styles.cardPosition}>
        <Card className={styles.formCard}>
          <h3 className='font-bold m-2 text-xl'>Sign Up</h3>
          <p className='text-xs my-1'>Enter sign up details to get registered</p>
          <CardBody>
            <h1>Full Name</h1>
            <Input id="fullName"
              className='text-1 font-thin italic'
              name="fullName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.fullName} label="Enter your full name" />
            {formik?.errors.fullName}
            <br/>
            <h1>Email</h1>
            <Input id="email"
              className='text-1 font-thin italic'
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email} label="Enter your email" />
            {formik?.errors.email}
            <br/>
            <h1>Phone Number</h1>
            <Input id="phoneNumber"
              className='text-1 font-thin italic'
              name="phoneNumber"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.phoneNumber} label="Enter your phone number" />
            {formik?.errors.phoneNumber}
            <br/>
            <h1>Role</h1>
            <Input id="role"
              className='text-1 font-thin italic'
              name="role"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.role} label="Select your role" />
            {formik?.errors.role}
            <br/>
            <h1>Password</h1>
            <Input id="password"
              className='text-1 font-thin italic'
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password} label="Enter your password" />
            {formik?.errors.password}
            <br/>
            <div className={styles.btn} >
            <button type="submit">Submit</button>
            </div>
          </CardBody>
        </Card>
      </div>
    </form>
  );
};
export default SignupForm