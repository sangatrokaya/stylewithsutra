'use client'
import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Button, Input } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";

const subCategories = [
    { label: "Pant", value: "Pant", description: "The second most popular pet in the world" },
    { label: "Shirts", value: "Shirts", description: "The most popular pet in the world" },
    { label: "T-Shirts", value: "T-Shirts", description: "The largest land animal" },
    { label: "Jackets", value: "Jackets", description: "The king of the jungle" },
    { label: "Shoes", value: "Shoes", description: "The largest Pant species" },
    { label: "Accessories", value: "Accessories", description: "The tallest land animal" },
    {
        label: "Dolphin",
        value: "dolphin",
        description: "A widely distributed and diverse group of aquatic mammals",
    },
    { label: "Penguin", value: "penguin", description: "A group of aquatic flightless birds" },
    { label: "Zebra", value: "zebra", description: "A several species of African equids" },
    {
        label: "Shark",
        value: "shark",
        description: "A group of elasmobranch fish characterized by a cartilaginous skeleton",
    },
    {
        label: "Whale",
        value: "whale",
        description: "Diverse group of fully aquatic placental marine mammals",
    },
    { label: "Otter", value: "otter", description: "A carnivorous mammal in the subfamily Lutrinae" },
    { label: "Crocodile", value: "crocodile", description: "A large semiaquatic reptile" },
];

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

export const Categories = () => {
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
                        <h1 className='heading'>Products</h1>
                        <br />
                        <p className='subHeading'>Add your products here!</p>
                        <br />
                        <br />
                        <div className="formFields">
                            <Input label="Product Name" placeholder="Enter the product name" />
                        </div>
                        <br />
                        <div className="formFields">
                            <Input label="Category Name" placeholder="Enter the product category" />
                        </div>
                        <br />
                        <div className="formFields">
                            <Select
                                label="Sub Category"
                                placeholder="Enter the product sub category"
                                selectionMode="multiple"
                                className="max-w-xs"
                            >
                                {subCategories.map((animal) => (
                                    <SelectItem key={animal.value} value={animal.value}>
                                        {animal.label}
                                    </SelectItem>
                                ))}
                            </Select>
                        </div>
                        <br />
                        <div className="formFields">
                            <Input label="Product Price" placeholder="Enter the product price" />
                        </div>
                        <br />
                        <div className="formFields">
                            <Input label="Stock Quantity" placeholder="Enter the stock quantity" />
                        </div>
                        <br />
                        <input type='file'/>
                        <Button type="submit" className='btn-primary'>Submit</Button>
                    </Form>
                )}
            </Formik>
        </div>
    )
};

const page = () => {
    return (
        <div>
            <Categories />
        </div>
    )
}

export default page