import { useFormik } from "formik";
import React, { useState } from 'react'
import * as Yup from 'yup';

const RegisterSection = () => {
    
    const formik = useFormik({
        initialValues: {
            email: '',
            first_name: '',
            second_name: '',
            password:''
            
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Please Enter Your Email'),
            first_name: Yup.string().required('Please Enter Your First Name'),
            second_name: Yup.string().required('Please Enter Your Second Name'),
            password: Yup.string().required('Please Enter Your Password'),
        }),
        onSubmit: values => {
            console.log(values);
        },
    });

    return(

        <div className="container flex flex-col items-center py-[100px]">
            <div className="font-semibold text-[55px] leading-[82.5px] max-sm:text-[30px] max-sm:leading-[60px]">REGISTER</div>
            <div className="font-normal text-[22px] leading-[33px] mt-[5px] mb-[30px] max-sm:text-[15px] max-sm:leading-[30px]">Please fill in the information below:</div>
            
            
                                <input
                                    type="text"
                                    name="first_name"
                                    id="first_name"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.first_name}
                                    className={`font-normal text-[23px] leading-[34.5px] pl-[18px] w-[43%] max-sm:w-full p-[15px] border-[#0000008A] border  rounded-[3px] ${formik.touched.first_name && formik.errors.first_name ? 'border-red-500' : ''}`}
                                    placeholder='First Name'
                                />
                                {formik.touched.first_name && formik.errors.first_name ? (
                                    <div className="text-red-500">{formik.errors.first_name}</div>
                                ) : null}
                            
            
                                <input
                                    type="text"
                                    name="second_name"
                                    id="second_name"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.second_name}
                                    className={` font-normal text-[23px] leading-[34.5px] pl-[18px] w-[43%] max-sm:w-full p-[15px] border-[#0000008A] border mt-[15px] rounded-[3px] ${formik.touched.second_name && formik.errors.second_name ? 'border-red-500' : ''}`}
                                    placeholder='Last Name'
                                />
                                {formik.touched.second_name && formik.errors.second_name ? (
                                    <div className="text-red-500">{formik.errors.second_name}</div>
                                ) : null}
                            
            
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                    className={` font-normal text-[23px] leading-[34.5px] pl-[18px] w-[43%] max-sm:w-full p-[15px] border border-[#0000008A] mt-[15px] rounded-[3px] ${formik.touched.email && formik.errors.email ? 'border-red-500' : ''}`}
                                    placeholder='email'
                                />
                                {formik.touched.email && formik.errors.email ? (
                                    <div className="text-red-500">{formik.errors.email}</div>
                                ) : null}
                            
            
                                <input
                                    type="text"
                                    name="password"
                                    id="password"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.password}
                                    className={` font-normal text-[23px] leading-[34.5px] w-[43%] p-[15px] max-sm:w-full border-[#0000008A] border mt-[15px] rounded-[3px] ${formik.touched.password && formik.errors.password ? 'border-red-500' : ''}`}
                                    placeholder='Password'
                                />
                                {formik.touched.password && formik.errors.password ? (
                                    <div className="text-red-500">{formik.errors.password}</div>
                                ) : null}
                            
                            
                            <div className="mt-[20px]">
                            <button>
                            <div className="w-[155px] p-[15px] bg-gradient-to-b  from-yellow-400 to-orange-600 font-medium text-[16px] leading-[24px] flex flex-col justify-center rounded-[3px]">
                            REGISTER
                            </div>
                            </button>
                            </div>
        </div>
    )
}

export default RegisterSection;
