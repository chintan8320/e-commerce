import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import Link from "next/link";
import ApiInstance from "@components/ApiInstance/ApiInstance";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

const LoginSection = () => {
  const router = useRouter()
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Please Enter Your Email"),
      
      password: Yup.string().min(8, "Password must be at least 8 characters long").required("Please Enter Your Password"),
    }),
    onSubmit: (values) => {
      handleSubmit(values)
    },
  });

  const handleSubmit = (val) => {
    const data = {
      email: val?.email,
      password: val?.password,
    };
    ApiInstance.post("/login", data).then((res) => {
      localStorage.setItem('token', res?.data?.token)
      toast.success("Login Successfully");
      setTimeout(() => {
        router.push("/");
      }, 3000);
    });
  };



  return (
    <form onSubmit={formik.handleSubmit}>
      <Toaster />
    <div className="container flex flex-col items-center py-[100px]">
      <div className="font-semibold text-[55px] leading-[82.5px] max-sm:text-[30px] max-sm:leading-[60px]">LOGIN</div>
      <div className="font-normal text-[22px] leading-[33px] pt-[5px] pb-[30px] max-sm:text-[15px] max-sm:leading-[30px]">
        Please enter your e-mail and password:
      </div>

      <input
          type="text"
          name="email"
          id="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className={` font-normal text-[23px] leading-[34.5px] pl-[18px] w-[43%] max-sm:w-full p-[15px] border border-[#0000008A] mt-[15px] rounded-[3px] ${
            formik.touched.email && formik.errors.email ? "border-red-500" : ""
          }`}
          placeholder="email"
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="text-red-500">{formik.errors.email}</div>
        ) : null}

        <input
          type="password"
          name="password"
          id="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          className={` font-normal text-[23px] leading-[34.5px] w-[43%] p-[15px] max-sm:w-full border-[#0000008A] border mt-[15px] rounded-[3px] ${
            formik.touched.password && formik.errors.password
              ? "border-red-500"
              : ""
          }`}
          placeholder="Password"
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="text-red-500">{formik.errors.password}</div>
        ) : null}

      <div className="pt-[20px]">
        <button type="submit">
          <div className="w-[155px] h-[50px] bg-[#facc15] font-medium text-[16px] leading-[24px] flex flex-col justify-center rounded-[3px]">
            LOGIN
          </div>
        </button>
      </div>
      <div className="font-medium text-[16px] leading-[24px] pt-[15px] h-[24px] max-sm:text-[10px] max-sm:pt-[5px]">
      <Link href="/register">Don&apos;t have an account?</Link> Create one &amp; enjoy!
      </div>
    </div>
    </form>
  );
};

export default LoginSection;
