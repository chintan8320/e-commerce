import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import Image from "next/image";
import { Map } from "@lib/config";

function ContactSection() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      number: "",
      url: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Please Enter Your Email"),
      name: Yup.string().required("Please Enter Your Name"),
      number: Yup.string().required("Please Enter Your Number"),
      url: Yup.string().required("Please Enter Your URL"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <div className="container py-16">
        <div className="">
          <h3 className="font-semibold text-[55px] leading-[82.5px] text-center max-sm:text-[30px]">
            GET IN TOUCH
          </h3>
        </div>
         <div>
        <form onSubmit={formik.handleSubmit} className=" mx-auto">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="flex flex-col">
              <label htmlFor="name" className="font-normal text-lg mb-1">
                Your name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                className={`p-3 bg-[#FAFAFA] border border-black rounded-md ${
                  formik.touched.name && formik.errors.name
                    ? "border-red-500"
                    : ""
                }`}
              />
              {formik.touched.name && formik.errors.name && (
                <div className="text-red-500">{formik.errors.name}</div>
              )}
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="font-normal text-lg mb-1">
                Your email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className={`p-3 bg-[#FAFAFA] border border-black rounded-md ${
                  formik.touched.email && formik.errors.email
                    ? "border-red-500"
                    : ""
                }`}
              />
              {formik.touched.email && formik.errors.email && (
                <div className="text-red-500">{formik.errors.email}</div>
              )}
            </div>

            <div className="flex flex-col">
              <label htmlFor="number" className="font-normal text-lg mb-1">
                Your number
              </label>
              <input
                type=""
                name="number"
                id="number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.number}
                className={`p-3 bg-[#FAFAFA] border border-black rounded-md ${
                  formik.touched.number && formik.errors.number
                    ? "border-red-500"
                    : ""
                }`}
              />
              {formik.touched.number && formik.errors.number && (
                <div className="text-red-500">{formik.errors.number}</div>
              )}
            </div>

            <div className="flex flex-col">
              <label htmlFor="url" className="font-normal text-lg mb-1">
                Your website url
              </label>
              <input
                type="text"
                name="url"
                id="url"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.url}
                className={`p-3 bg-[#FAFAFA] border border-black rounded-md ${
                  formik.touched.url && formik.errors.url
                    ? "border-red-500"
                    : ""
                }`}
              />
              {formik.touched.url && formik.errors.url && (
                <div className="text-red-500">{formik.errors.url}</div>
              )}
            </div>
          </div>

          <div className="flex flex-col pt-4">
            <label htmlFor="message" className="font-normal text-lg mb-1">
              Your message (optional)
            </label>
            <textarea
              id="message"
              name="message"
              rows="10"
              className="w-full p-3 border border-black rounded-md bg-[#FAFAFA]"
            />
          </div>

          <div className="mt-4 p-4 w-48 flex justify-center bg-gradient-to-b from-yellow-400 to-orange-600 rounded-md mx-auto">
            <button
              type="submit"
              className="grid items-center font-medium text-lg leading-[24px]"
            >
              SEND MESSAGE
            </button>
          </div>
          </form>
        </div>
      </div>
      <div className="max-w-full pb-[25px]" >
  <Image
    className="w-full h-auto"
    src={Map}
    alt="map"
    width={1500}
    height={504}
  />
</div>
    </>
  );
}

export default ContactSection;
