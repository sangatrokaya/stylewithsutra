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
import { useSelector } from 'react-redux';


const LoginForm = () => {
  const {count} = useSelector(state => state.count)


  const router = useRouter()
  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('required')
  });

  const loginUser = async (values) => {
    const res = await fetch('http://localhost:5000/login/', {
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
      email: '',
      password: ''
    },
    validationSchema: LoginSchema,
    onSubmit: values => {
      loginUser(values)
    },
  });
  return (
    <div>
      <Image
        className = {styles.bgImage}
        src = "/bgImg.jpg"
        alt = "Background image"
        layout = 'fill'
        objectFit = 'cover'
        objectPosition = 'center'
      />
      <form className={styles.formFields} onSubmit={formik.handleSubmit}>
        <div className={styles.cardPosition}>
          <Card className={styles.formCard}>
            Count is {count}
            {/* <button onClick={()=>}>Increment</button> */}
            <h3 className='font-bold m-2 text-xl'>Login</h3>
            <p className='text-xs my-1'>Enter Login details to get access</p>
            <CardBody>
              <h1>Email</h1>
              <Input id="email"
                className='text-1 font-thin italic'
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email} label="Enter your email address" />
              {formik?.errors.email}
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
              <p className='text-sm p-3'>Don't have an account? <span className='text-red-500'><Link href="/register">Sign Up</Link></span> here</p>
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
export default LoginForm