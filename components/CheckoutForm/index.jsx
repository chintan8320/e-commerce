import React, { useState } from 'react'
import LeftArrow from '@utilis/leftArrow'
import { AddProd } from "@lib/config";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Image from "next/image";

const CheckoutForm = () => {
    const [count, setCount] = useState(1);
    const formik = useFormik({
        initialValues: {
            email: '',
            billing_same: false,
            first_name: '',
            second_name: '',
            address: '',
            city: '',
            pin_code: '',
            phone_number: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Please Enter Your Email'),
            first_name: Yup.string().required('Please Enter Your Frist Name'),
            second_name: Yup.string().required('Please Enter Your Second Name'),
            address: Yup.string().required('Please Enter Your Address'),
            city: Yup.string().required('Please Enter Your City'),
            pin_code: Yup.string().required('Please Enter Your Pin Code'),
            phone_number: Yup.string().required('Please Enter Your Phobe Number')
        }),
        onSubmit: values => {
            console.log(values);
        },
    });

    const plus = () => {
        setCount(count + 1);
    };

    const minus = () => {
        setCount(count > 1 ? count - 1 : 1);
    };
    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="container my-20">
                <div className='flex font-medium text-[26px] leading-[39px] pb-4 max-sm:text-[15px]'>
                    <div>
                        Already have an account?
                    </div>
                    <div className='ml-2 bg-gradient-to-b  from-yellow-400 to-orange-600 text-transparent bg-clip-text'>
                        Login
                    </div>
                </div>
                <div className="grid gap-2 grid-cols-2 max-sm:flex max-sm:flex-col-reverse">
                    <div>
                        <div className='font-semibold text-[24px] leading-[36px] max-sm:text-[15px]'>
                            Contact information
                        </div>
                        <div className="col-span-5">
                            <input
                                type="text"
                                name="email"
                                id="email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                className={`p-[15px] text-[22px] max-sm:text-[11px] max-sm:p-[10px] max-sm:leading-[20px] leading-[33px] border rounded-[3px]  w-full ${formik.touched.email && formik.errors.email ? 'border-red-500' : ''}`}
                                placeholder='Email'
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <div className="text-red-500">{formik.errors.email}</div>
                            ) : null}
                        </div>
                        <div className="col-span-5">
                            <div className="inline-flex items-center font-normal text-xs leading-[18px] text-[#555555] pt-2 max-sm:text-[8px]">
                                <input
                                    type="checkbox"
                                    name="billing_same"
                                    id="billing_same"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    checked={formik.values.billing_same}
                                    className="form-checkbox"
                                />
                                <label htmlFor="billing_same" className="ml-2">Email me with news and offers</label>
                            </div>
                        </div>
                        <div className='font-semibold text-[24px] leading-[36px] pt-4 max-sm:text-[15px]'>
                            Shipping address
                        </div>
                        <div class="grid gap-2  grid-cols-6 pt-4">
                            <div className="col-span-3 max-sm:col-span-6">
                                <input
                                    type="text"
                                    name="first_name"
                                    id="first_name"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.first_name}
                                    className={`p-[15px] text-[22px] leading-[33px] max-sm:text-[11px] max-sm:p-[10px] max-sm:leading-[20px] border mt-1 rounded-[3px] w-full ${formik.touched.first_name && formik.errors.first_name ? 'border-red-500' : ''}`}
                                    placeholder='Frist Name'
                                />
                                {formik.touched.first_name && formik.errors.first_name ? (
                                    <div className="text-red-500">{formik.errors.first_name}</div>
                                ) : null}
                            </div>
                            <div className="col-span-3 max-sm:col-span-6">
                                <input
                                    type="text"
                                    name="second_name"
                                    id="second_name"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.second_name}
                                    className={`p-[15px] text-[22px] leading-[33px] max-sm:text-[11px] max-sm:p-[10px] max-sm:leading-[20px] border mt-1 rounded-[3px] w-full ${formik.touched.second_name && formik.errors.second_name ? 'border-red-500' : ''}`}
                                    placeholder='Second Name'
                                />
                                {formik.touched.second_name && formik.errors.second_name ? (
                                    <div className="text-red-500">{formik.errors.second_name}</div>
                                ) : null}
                            </div>
                            <div className="col-span-6">
                                <input
                                    type="text"
                                    name="address"
                                    id="addresse"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.address}
                                    className={`p-[15px] text-[22px] leading-[33px] max-sm:text-[11px] max-sm:p-[10px] max-sm:leading-[20px] border mt-1 rounded-[3px] w-full ${formik.touched.address && formik.errors.address ? 'border-red-500' : ''}`}
                                    placeholder='Address'
                                />
                                {formik.touched.address && formik.errors.address ? (
                                    <div className="text-red-500">{formik.errors.address}</div>
                                ) : null}
                            </div>
                            <div className="col-span-6">
                                <input
                                    type="text"
                                    name="city"
                                    id="city"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.city}
                                    className={`p-[15px] text-[22px] leading-[33px] max-sm:text-[11px] max-sm:p-[10px] max-sm:leading-[20px] border mt-1 rounded-[3px] w-full ${formik.touched.city && formik.errors.city ? 'border-red-500' : ''}`}
                                    placeholder='City'
                                />
                                {formik.touched.city && formik.errors.city ? (
                                    <div className="text-red-500">{formik.errors.city}</div>
                                ) : null}
                            </div>
                            <div className="col-span-6">
                                <input
                                    type="number"
                                    name="pin_code"
                                    id="pin_code"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.pin_code}
                                    className={`p-[15px] text-[22px] leading-[33px] max-sm:text-[11px] max-sm:p-[10px] max-sm:leading-[20px] border mt-1 rounded-[3px] w-full ${formik.touched.pin_code && formik.errors.pin_code ? 'border-red-500' : ''}`}
                                    placeholder='Pin_Code'
                                />
                                {formik.touched.pin_code && formik.errors.pin_code ? (
                                    <div className="text-red-500">{formik.errors.pin_code}</div>
                                ) : null}
                            </div>
                            <div className="col-span-6">
                                <input
                                    type="number"
                                    name="phone_number"
                                    id="phone_number"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.phone_number}
                                    className={`p-[15px] text-[22px] leading-[33px] max-sm:text-[11px] max-sm:p-[10px] max-sm:leading-[20px] border mt-1 rounded-[3px] w-full ${formik.touched.phone_number && formik.errors.phone_number ? 'border-red-500' : ''}`}
                                    placeholder='Phone_Number'
                                />
                                {formik.touched.phone_number && formik.errors.phone_number ? (
                                    <div className="text-red-500">{formik.errors.phone_number}</div>
                                ) : null}
                            </div>

                        </div>
                        <div className='flex justify-between pt-[14px]'>
                            <div className='flex items-center'>
                                <div className=''>
                                    <LeftArrow />
                                </div>
                                <div className='font-medium p-[10px] text-[20px] leading-[30px] bg-gradient-to-t  from-yellow-400 to-orange-600 text-transparent bg-clip-text max-sm:p-[2px] max-sm:text-[10px] max-sm:leading-[15px]'>
                                    Return Cart
                                </div>
                            </div>
                            <div class="col-span-4">
                                <div class="flex justify-end">
                                    <button class="bg-gradient-to-b from-yellow-400 to-orange-600 text-black font-semibold rounded-[3px] py-[13px] px-[26px]max-sm:py-[2px] max-sm:px-[5px] max-sm:leading-[5px] max-sm:text-[10px]">CONTINUE TO SHIPPING</button>
                                </div>
                            </div>
                            </div>
                    </div>
                    <div className='flex flex-col justify-around bg-[#E85222] bg-opacity-[10%] w-[632px] h-[294px] rounded-[3px] p-[35px] max-sm:w-full max-sm:p-[5px] max-sm:h-[150px]'>
                        <div className='font-semibold text-[22px] leading-[26.63px] border-[#CFCFCF] max-sm:text-[15px] '>
                            Order Summary
                        </div>
                        <div className='bg-[#CFCFCF]'>
                            <hr />
                        </div>
                        <div className='flex'>
                            <Image
                                src={AddProd}
                                alt={"Enox ring"}
                                width={78}
                                height={88}
                                className='bg-white rounded-[3px] w-[108px] h-[108px] max-sm:w-[75px] max-sm:h-[75px]'

                            />
                            <div className='flex justify-between max-sm:gap-[20px] max-sm:px-[5px] w-full'>
                                <div className='text-black font-semibold text-[16px] leading-[22.5px] px-2 flex flex-col gap-[5px] max-sm:text-[11px] max-sm:gap-[1px] max-sm:leading-[15px]'>
                                    <div>
                                        Enox ring
                                    </div>
                                    <div>
                                        Napkin model
                                    </div>
                                    <div>
                                        Rs.70/-
                                    </div>
                                </div>
                                <div className='flex items-end'>
                                    <div className='mr-2'>
                                        {count === 1 ? (
                                            <button onClick={minus} disabled>
                                                -
                                            </button>
                                        ) : (
                                            <button onClick={minus}>-</button>
                                        )}
                                    </div>
                                    <div className='border border-[#CFCFCF] w-[25px] h-[25px] flex justify-center mr-2'>{count}</div>
                                    <div>
                                        <button onClick={plus}>+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>

    )


}

export default CheckoutForm