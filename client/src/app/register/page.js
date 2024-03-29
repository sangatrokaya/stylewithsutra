'use client'
import React from 'react'
import styles from './styles.module.css'
import { useFormik } from 'formik';
import { Input, Card, CardBody } from "@nextui-org/react";
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation'
import Link from 'next/link';
import Image from 'next/image'


const SignupForm = () => {
  const router = useRouter()
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
    password: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('required')
  });

  const reigsterUser = async (values) => {
    const res = await fetch('http://localhost:5000/register/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values)
    })
    const data = await res.json()
    if (res.status == 200) {
      router.push('/login')
    }
    toast(data.msg)
  }

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      phoneNumber: '',
      password: ''
    },
    validationSchema: SignupSchema,
    onSubmit: values => {
      reigsterUser(values)
    },
  });
  return (
    <div>
      <Image
        className={styles.bgImage}
        src="/bgImg.jpg"
        alt="Background image"
        layout='fill'
        objectFit='cover'
        objectPosition='center'
      />
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
              <br />
              <h1>Email</h1>
              <Input id="email"
                className='text-1 font-thin italic'
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email} label="Enter your email address" />
              {formik?.errors.email}
              <br />
              <h1>Phone Number</h1>
              <Input id="phoneNumber"
                className='text-1 font-thin italic'
                name="phoneNumber"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.phoneNumber} label="Enter your phone number" />
              {formik?.errors.phoneNumber}
              <br />
              <h1>Password</h1>
              <Input id="password"
                className='text-1 font-thin italic'
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password} label="Enter your password" />
              {formik?.errors.password}
              <br />
              <p className='text-sm p-3'>Already have an account? <span className='text-red-500'><Link href="/login">Login</Link></span> here</p>
              <div className={styles.btn}>
                <button type="submit">Submit</button>
              </div>
            </CardBody>
          </Card>
        </div>
      </form>
    </div>
  );
};
export default SignupForm