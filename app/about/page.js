"use client";
import React from "react";
import HeaderSection from "@components/HeaderSection";
import AboutSection from "@components/AboutUs";
import Newsletter from "@components/Sletter";

const page = () => {
  return (
    <div>
      <HeaderSection pageName="About Us" />
      <AboutSection />
      <Newsletter />
    </div>
  );
};

export default page;
