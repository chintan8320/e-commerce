"use client";
import React from "react";
import BlogSection from "@components/BlogSection";
import HeaderSection from "@components/HeaderSection";
import Footer from "@components/Footer";

function page() {
  return (
    <div>
      <HeaderSection pageName="Blog" />
      <BlogSection />
      
    </div>
  );
}

export default page;
